---
lang: zh-CN
title: 安装包
description: 本篇文章介绍安装包的核心组成
---

# 安装包

KitX Installer 中的安装包项目主要负责 KitX Dashboard 的安装.

移动端 (KitX Mobile) 的安装将交给分发渠道 (应用市场) 来完成, 故不单独制作安装程序.

## 服务器端安装文件存储结构

按照各个编译目标 profile 存储

常见组合是 平台 + 架构 + 限定选项

平台包括: win, linux, osx
架构包括: x86, x64, arm, arm64
限定选项有: -single, -cut, -runtime-relied

组合值例如:

- kitx-win-x86
- kitx-win-x64-single
- kitx-win-x64-single-cut
- kitx-linux-arm-single
- kitx-linux-arm64-single
- kitx-linux-arm64-single-cut
- kitx-osx-arm64-single

URL 前缀 (设想): https://source.catrol.cn/kitx/dashboard/%version%/%profile%.zip

其中, `%version%` 是版本, `%profile%` 是目标架构

Installer 在下载时拼接 URL, 并下载 zip 格式安装文件, 下载完成后解压并完成后续安装操作

## 服务器端安装包下载与存储

服务器端将对应各个编译目标 profile 存放对应的安装包, 存放格式如下 (设想):

https://source.catrol.cn/kitx/installer/%version%/%profile%

其中, `%version%` 是版本, `%profile%` 是目标架构

且将根据 %profile% 的平台决定后缀名是 .exe 还是无后缀名

### Q: 安装包如何知道自己应该下载哪一个 version 和哪一个 profile

新的安装包使用 Rust + Egui 的方式编写

我们在程序内编写了两个常量字符串 version 和 profile
其中, version 和 profile 字符串的长度均为 60
默认值分别为:

```text
version: "$$_!_%Version%_@_$$<spaces>#"
profile: "$$_!_%Profile%_@_$$<spaces>#"
```

其中 `<spaces>` 是补齐长度的空格, 共计 40 个

程序运行时根据这两个字符串拼接 URL

### Q: 如何处理使得我们可以通过源安装包生成一系列安装包

编译出原版安装包之后, 我们将使用 `KitX Installer Patcher` 这个工具对安装包进行修补
将 version 和 profile 常量字符串的默认值替换成目标值, 并重命名文件

## 安装包在本地的工作流程

新版安装包使用 Rust + Egui 的方式编写, 天然具有跨平台运行的能力, 且同时支持 GUI 界面安装与 CLI 命令行安装

共有安装流程:

1. 创建临时目录
2. 根据 version, profile, 拼接 URL 并下载安装文件到临时目录
3. 解压安装文件

核心安装流程:

### Windows

1. 获取基础信息 (桌面路径, 开始菜单路径)
2. 使用 GUI 界面询问基础安装信息
3. 创建目标路径文件夹
4. 执行 `共有安装流程`
5. 移动解压后的安装文件到目标路径文件夹
6. 更新注册表信息 (如果不是 Portable 安装模式的话)
7. 创建桌面快捷方式 (如果勾选)
8. 创建开始菜单快捷方式 (如果勾选)
9. 复制本程序到 Windows Installer 目录作为卸载程序

### GNU/Linux

building ...

### MacOS

building ...
