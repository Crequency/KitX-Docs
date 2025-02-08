---
lang: en-US
title: Get Started
description: This page will lead you to get started with KitX Mobile
createTime: 2025/01/25 11:25:05

---

# Get Started

## Get Source Code

You can refer to [KitX Get Started](/guide/getting-started.md) to clone the main repository, and then develop in the `KitX Clients/KitX Mobile` folder

Or, you can directly clone the `KitX Mobile` repository

```shell
git clone git@github.com:Crequency/KitX-Mobile.git
```

## Build a project

### Preparation before compilation

#### Install Flutter SDK

You can refer to [Official Document](https://flutter.cn/docs/get-started/install)

::: details Android Studio is fully installed without Android and provides Android platform support

There is no need to install Android Studio. Full installation provides Android platform support. You can choose other editors, such as: Visual Studio Code

However, due to the incomplete official website, this tutorial will teach you how to use the Android SDK command line tool to provide Android platform support

1. Install the Android SDK command line tool

   Download the installation package at [here](https://developer.android.com/studio#command-tools) and refer to [here](https://developer.android.com/studio/command-line/sdkmanager?hl=zh-cn) Complete the installation

2. Run the following command in the `cmdline-tools\<version>\bin` directory
   ```shell
   sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.1"
   ```

3. Check if your SDK directory is roughly as follows
   ```
   path/to/android/sdk
   ├─build-tools
   │  └─33.0.1
   ├─cmdline-tools
   │  └─latest
   │      ├─bin
   │      └─lib
   ├─platform-tools
   └─platforms
      └─android-33
    ```

:::

#### Detection environment

Run the `flutter doctor -v` command to check whether the following items pass (`[✓]` `[!]` is OK)

- Flutter
- Android toolchain - develop for Android devices

#### Get Packages

Switch the directory to `KitX Clients/KitX Mobile/kitx_mobile`, and then run `flutter pub get`

::: tip
After making any changes to `pubspec.yaml`, you must re-acquire Packages
:::

::: note
The next tutorial will default to the `kitx_mobile` directory
:::

---

### Run/Debug

Please use a data cable to connect the phone first and ensure that the adb debugging function is normal

For information about adb debugging functions, you can refer to [here](https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn)

::: warning
Please **Always use real machines** for running/debugging, any emulator may have unpredictable problems
:::

::: tip
It is recommended to use the editor to debug the application to provide more features
:::

::: note
If garbled code appears during compilation, just set the environment variable `GRADLE_OPTS` to `-Dfile.encoding=UTF-8`
:::

#### Run/Debug using the editor

##### Run/Debug with Visual Studio Code

Open the project directory, open the `kitx_mobile/lib/main.dart` file, press `Ctrl` + `F5` key to run, `F5` key to debug

##### Run/Debug with Android Studio

TODO

#### Run with the command line

Just run `flutter run`

---

### Compilation

#### Compile for Android

Just run `flutter build apk`

Use `flutter build apk --split-per-abi` to compile a package with smaller single files but only one ABI

#### Compile for iOS

TODO

---

### Other construction methods

You can also use some IDEs to build your project
For example:
- Android Studio

Alternatively, you can configure an editor to simplify the build steps
For example:
- Visual Studio Code
- Vim

The steps to configure the editor are omitted here, please search for relevant tutorials by yourself
