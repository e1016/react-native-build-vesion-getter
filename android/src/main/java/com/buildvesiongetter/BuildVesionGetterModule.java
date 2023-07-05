package com.buildvesiongetter;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.util.Log;

@ReactModule(name = BuildVesionGetterModule.NAME)
public class BuildVesionGetterModule extends ReactContextBaseJavaModule {
  public static final String NAME = "BuildVesionGetter";

  public BuildVesionGetterModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void getVersionName(Promise promise) {
    try {
      PackageInfo packageInfo = getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
      Log.d("LOOOGY", "getVersionName: " + packageInfo.versionName);
      promise.resolve(packageInfo.versionName);
    } catch (PackageManager.NameNotFoundException e) {
      promise.resolve("");
    }
  }
  @ReactMethod
  public void getVersionCode(Promise promise) {
    try {
      PackageInfo packageInfo = getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
      Log.d("LOOOGY", "getVersionCode: " + packageInfo.versionCode);
      promise.resolve(packageInfo.versionCode);
    } catch (PackageManager.NameNotFoundException e) {
      Log.d("LOOOGY", "CAAAAATCHED");
      promise.resolve(0);
    }
  }
}
