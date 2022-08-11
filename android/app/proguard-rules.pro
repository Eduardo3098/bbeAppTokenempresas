# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native

# Keep our interfaces so they can be used by other ProGuard rules.
# See http://sourceforge.net/p/proguard/bugs/466/
-keep,allowobfuscation @interface com.facebook.proguard.annotations.DoNotStrip
-keep,allowobfuscation @interface com.facebook.proguard.annotations.KeepGettersAndSetters
-keep,allowobfuscation @interface com.facebook.common.internal.DoNotStrip

# Do not strip any method/class that is annotated with @DoNotStrip
-keep @com.facebook.proguard.annotations.DoNotStrip class *
-keep @com.facebook.common.internal.DoNotStrip class *
-keepclassmembers class * {
    @com.facebook.proguard.annotations.DoNotStrip *;
    @com.facebook.common.internal.DoNotStrip *;
}

-keepclassmembers @com.facebook.proguard.annotations.KeepGettersAndSetters class * {
  void set*(***);
  *** get*();
}

-keep class * extends com.facebook.react.bridge.JavaScriptModule { *; }
-keep class * extends com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers,includedescriptorclasses class * { native <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }

-dontwarn com.facebook.react.**
-keep,includedescriptorclasses class com.facebook.react.bridge.** { *; }

# okhttp

-keepattributes Signature
-keepattributes *Annotation*
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-dontwarn okhttp3.**

# okio

-keep class sun.misc.Unsafe { *; }
-dontwarn java.nio.file.*
-dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
-dontwarn okio.**

# Hermes

-keep class com.facebook.hermes.unicode.** { *; }

# RN config

-keep class com.pichincha.empresas.token.BuildConfig { *; }

# Detect id

-dontwarn net.easysol.shortcuts.**
-dontwarn net.easysol.did.**
-dontwarn net.easysol.faceid.authenticator.**
-dontwarn net.easysol.liveness.**
-dontwarn net.easysol.faceid_detector_sdk.**
-dontwarn net.easysol.jni.dlib.**
-dontwarn net.easysol.mobile.commos.**
-dontwarn com.cyxtera.did.sdk.data.**
-dontwarn com.cyxtera.did.sdk.tokens.**
-dontwarn com.cyxtera.did.sdk.encryptor.**
-dontwarn com.cyxtera.did.sdk.offline.**

-keep class net.easysol.shortcuts.** {*;}
-keep class net.easysol.did.** {*;}
-keep class net.easysol.faceid.authenticator.** {*;}
-keep class net.easysol.liveness.** {*;}
-keep class net.easysol.faceid_detector_sdk.** {*;}
-keep class net.easysol.jni.dlib.** {*;}
-keep class net.easysol.mobile.commos.** {*;}
-keep class com.cyxtera.did.sdk.data.** {*;}
-keep class com.cyxtera.did.sdk.tokens.** {*;}
-keep class com.cyxtera.did.sdk.encryptor.** {*;}
-keep class com.cyxtera.did.sdk.offline.** {*;}

-dontwarn com.google.errorprone.annotations.**
-dontwarn androidx.annotation.**