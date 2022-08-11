package com.bbeapptokenempresas.detectid;

import android.os.Bundle;
import android.text.TextUtils;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.annimon.stream.Collectors;
import com.annimon.stream.ComparatorCompat;
import com.annimon.stream.Objects;
import com.annimon.stream.Optional;
import com.annimon.stream.Stream;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.bbeapptokenempresas.R;
import java.util.List;
import net.easysol.did.DetectID;
import net.easysol.did.common.account.Account;
import org.jetbrains.annotations.NotNull;

public class DetectIdModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "RNDetectIdModule";
    private static final String RESPONSE_CODE_SUCCESS = "200";
    public static final ComparatorCompat<Account> ACCOUNT_BY_REGISTRATION_DATE_COMPARATOR = ComparatorCompat.comparingLong(Account::getRegistrationDate)
            .reversed();

    public DetectIdModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);

        int[] certChain = {R.raw.banko, R.raw.serviciosexternostest_pichincha_com};

        DetectID sdk = DetectID.sdk(reactContext);

        sdk.didInit();
        sdk.configureSecurityCertificateConnection(certChain);
        sdk.isSdkVersionSupported();
        sdk.enableRegistrationServerResponseAlerts(false);
        sdk.enableSecureCertificateValidationProtocol(false);

        sdk.PUSH_API.enablePushAlertDefaultDialog(false);
        sdk.PUSH_API.enablePushTransactionDefaultDialog(false);
        sdk.PUSH_API.enablePushTransactionServerResponseAlerts(false);
        sdk.QR_API.enableQRCodeTransactionDefaultDialog(false);
        sdk.QR_API.enableQRCodeTransactionServerResponseAlerts(false);
        sdk.FACE_API.enableFaceRegistrationServerResponseAlerts(false);
        sdk.FACE_API.enableFaceTransactionServerResponseAlerts(false);
        sdk.INBOX_API.enableBadgeNumber(false);
        sdk.FACE_API.enableFaceRegistrationAutomaticOpen(false);
        sdk.FACE_API.enableFaceTransactionAutomaticOpen(false);
    }

    @NonNull
    @NotNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void registerDevice(String url, String code, Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());
        sdk.setDeviceRegistrationServerResponseListener(response -> {
            callback.invoke(Objects.equals(response, RESPONSE_CODE_SUCCESS), response);
        });

        sdk.didRegistration(url + code);
    }

    @ReactMethod
    public void setLastAccountName(String name, Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());

        if (!sdk.existAccounts()) {
            callback.invoke(false);
            return;
        }

        Optional<Account> accountOptional = Stream.of(sdk.getAccounts())
                .sorted(ACCOUNT_BY_REGISTRATION_DATE_COMPARATOR)
                .findFirst();

        if (accountOptional.isEmpty()) {
            callback.invoke(false);
            return;
        }

        sdk.setAccountUsername(accountOptional.get(), name);
        callback.invoke(true);
    }

    @ReactMethod
    public void getAccounts(Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());

        if (!sdk.existAccounts()) {
            callback.invoke();
            return;
        }

        List<Bundle> list = Stream.of(sdk.getAccounts())
                .sorted(ACCOUNT_BY_REGISTRATION_DATE_COMPARATOR)
                .map(Util::mapAccount)
                .collect(Collectors.toList());
        callback.invoke(Arguments.fromList(list));
    }

    @ReactMethod
    public void getToken(ReadableMap accountMap, Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());

        try {
            if (!sdk.existAccounts()) {
                callback.invoke();
                return;
            }

            Account mapped = Util.mapAccount(accountMap);
            Optional<Account> accountOptional = Util.findAccount(sdk, mapped);

            if (accountOptional.isEmpty()) {
                callback.invoke();
                return;
            }

            Account account = accountOptional.get();
            String token = sdk.OTP_API.getTokenValue(account);

            if (!TextUtils.isEmpty(token)) {
                callback.invoke(token, sdk.OTP_API.getTokenTimeStepValue(account));
                return;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        callback.invoke();
    }

    @ReactMethod
    public void setAccountName(ReadableMap accountMap, String name, Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());

        if (!sdk.existAccounts()) {
            callback.invoke(false);
            return;
        }

        Account mapped = Util.mapAccount(accountMap);
        Optional<Account> accountOptional = Util.findAccount(sdk, mapped);

        if (accountOptional.isEmpty()) {
            callback.invoke(false);
            return;
        }

        sdk.setAccountUsername(accountOptional.get(), name);
        callback.invoke(true);
    }

    @ReactMethod
    public void removeAccount(ReadableMap accountMap, Callback callback) {
        DetectID sdk = DetectID.sdk(getReactApplicationContext());

        if (!sdk.existAccounts()) {
            callback.invoke(false);
            return;
        }

        Account mapped = Util.mapAccount(accountMap);
        Optional<Account> accountOptional = Util.findAccount(sdk, mapped);

        if (accountOptional.isEmpty()) {
            callback.invoke(false);
            return;
        }

        sdk.removeAccount(accountOptional.get());
        callback.invoke(true);
    }
}
