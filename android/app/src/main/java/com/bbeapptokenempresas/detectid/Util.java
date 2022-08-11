package com.bbeapptokenempresas.detectid;

import android.os.Bundle;
import com.annimon.stream.Objects;
import com.annimon.stream.Optional;
import com.annimon.stream.Stream;
import com.facebook.react.bridge.ReadableMap;
import net.easysol.did.DetectID;
import net.easysol.did.common.account.Account;

public class Util {
    public static final String KEY_ORGANIZATION_NAME = "organizationName";
    public static final String KEY_USERNAME = "username";
    public static final String KEY_REGISTRATION_DATE = "registrationDate";
    public static final String KEY_REGISTRATION_METHOD = "registrationMethod";

    private Util() {
    }

    static Bundle mapAccount(Account account) {
        Bundle result = new Bundle();
        result.putString(KEY_ORGANIZATION_NAME, account.organizationName);
        result.putString(KEY_USERNAME, account.username);
        result.putLong(KEY_REGISTRATION_DATE, account.registrationDate);
        result.putInt(KEY_REGISTRATION_METHOD, account.registrationMethod);
        return result;
    }

    static Account mapAccount(ReadableMap map) {
        if (map == null) {
            return null;
        }

        Account account = new Account();
        account.organizationName = map.getString(KEY_ORGANIZATION_NAME);
        account.username = map.getString(KEY_USERNAME);
        account.registrationDate = (long) map.getDouble(KEY_REGISTRATION_DATE);
        account.registrationMethod = map.getInt(KEY_REGISTRATION_METHOD);
        return account;
    }

    static Optional<Account> findAccount(DetectID sdk, Account accountRef) {
        if (sdk == null || accountRef == null) {
            return Optional.empty();
        }

        return Stream.of(sdk.getAccounts())
                .filter(account -> Objects.equals(accountRef.organizationName, account.organizationName)
                        && Objects.equals(accountRef.registrationDate, account.registrationDate)
                        && Objects.equals(accountRef.registrationMethod, account.registrationMethod))
                .findFirst();
    }
}