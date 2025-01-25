---
lang: zh-CN
title: 快速上手
description: 本页引导新人快速熟悉 KitX Mobile 项目 -> 包括获取源码, 第一次编译等 ...
createTime: 2023/07/27 00:25:50

---

# 快速上手

## 获取源码

您可参照 [KitX 快速上手](/guide/getting-started.md) 克隆主仓库后 start `mobile`, 后续在 `KitX Mobile` 文件夹中开发

或是直接 clone `KitX Mobile` 仓库

```shell
git clone git@github.com:Crequency/KitX-Mobile.git
```

---

## 构建项目

### 编译前准备

#### 安装 Flutter SDK

您可参照 [官方文档](https://flutter.cn/docs/get-started/install)

::: details 不使用 Android Studio 全量安装提供 Android 平台支持
您没有必要安装 Android Studio 全量安装提供 Android 平台支持, 您可以选择其他编辑器, 例如: VSCode

但由于其官网不完善, 所以本教程会交您使用 Android SDK 命令行工具 提供 Android 平台支持

1. 安装 Android SDK 命令行工具

   在 [此处](https://developer.android.com/studio#command-tools) 下载安装包, 并参照 [此处](https://developer.android.com/studio/command-line/sdkmanager?hl=zh-cn) 完成安装

2. 在 `cmdline-tools\<version>\bin` 目录运行以下命令
   ```shell
   sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.1"
   ```

3. 检查您的 SDK 目录是否大致为下
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


::: details 在 Windows 环境为 Flutter 设定镜像配置
您可以使用 `set` 命令为当前命令行窗口设定 Flutter 镜像

```
set PUB_HOSTED_URL=https://mirror.sjtu.edu.cn/dart-pub
set FLUTTER_STORAGE_BASE_URL=https://mirror.sjtu.edu.cn
```

若要设置全局镜像, 请设置环境变量, 例如:

- 设置环境变量  `PUB_HOSTED_URL` 的值为 `https://mirror.sjtu.edu.cn/dart-pub`

- 设置环境变量 `FLUTTER_STORAGE_BASE_URL` 的值为 `https://mirror.sjtu.edu.cn`
:::

#### 检测环境

运行 `flutter doctor -v` 命令, 检查以下项目是否通过 (`[✓]` `[!]` 均可)

- Flutter
- Android toolchain - develop for Android devices

#### 获取 Packages

切换目录到 `kitx_mobile`, 然后运行 `flutter pub get` 即可

::: tip
对 `pubspec.yaml` 做出任何更改以后, 均要重新获取 Packages
:::

::: note
接下来的教程会默认在 `kitx_mobile` 目录
:::

---

### 运行/调试

请先使用数据线连接手机, 并确保 adb 调试功能正常

有关 adb 调试功能的信息, 您可以参考 [这里](https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn)

::: warning
请您 **始终使用真机** 进行运行/调试, 任何模拟器都可能出现不可预料的问题
:::

::: tip
推荐使用编辑器调试应用以提供更多功能
:::

::: note
在编译时若出现乱码, 设置环境变量 `GRADLE_OPTS` 为 `-Dfile.encoding=UTF-8` 即可
:::

#### 使用编辑器运行/调试

##### 使用 Visual Studio Code 运行/调试

打开项目目录, 打开 `kitx_mobile/lib/main.dart` 文件, 按 `Ctrl` + `F5` 键运行, `F5` 键调试

##### 使用 Android Studio 运行/调试

TODO

#### 使用命令行运行

运行 `flutter run` 即可

---

### 编译

#### 为 Android 编译

运行 `flutter build apk` 即可

使用 `flutter build apk --split-per-abi` 可编译单个文件更小但只支持一个 ABI 的安装包

#### 为 iOS 编译

TODO

---

### 其它构建方式

您也可以使用一些 IDE 来构建项目
例如:
- Android Studio

或者, 您也可以配置编辑器来简化构建步骤
例如:
- Visual Studio Code
- Vim

此处省略配置编辑器的步骤, 请自行搜索相关教程
