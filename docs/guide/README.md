---
lang: zh-CN
title: 项目简介
description: 本页简单介绍 KitX 项目
---

# 项目简介

KitX Project 旨在打造一个跨平台万物互联可扩展的工具箱, 使得电子设备不再割裂, 算力得到共享, 人人都能享受到科技的乐趣.

# 项目组成

面向最终用户

- KitX 仪表盘 ([KitX Dashboard](https://github.com/Crequency/KitX-Dashboard)) 是 KitX Project 的核心, 也是 KitX Project 在桌面端的具体实现.

  仪表盘是一个跨平台的桌面应用, 可运行在 `Windows` , `MacOS` , `GNU/Linux` 等桌面操作系统上,
  旨在为用户提供一个集成的工具箱, 使得用户可以在一个界面上管理多个设备, 并且可以通过插件的形式扩展功能.

  仪表盘项目基于 `Avalonia UI` 实现跨平台图形界面, 使用 `C#` 作为主要开发语言.

- KitX 移动端 ([KitX Mobile](https://github.com/Crequency/KitX-Mobile)) 是 KitX Project 在移动端的具体实现, 可运行在 `Android` , `iOS` 设备上.

  受限于移动端较低的权限, 移动端无法进行广泛的功能扩展, 但是用户可以使用移动端来管理设备, 并调用远程设备上的功能.
  当然, 移动端也可以通过 `小程序` 等形式扩展功能, 类似于 `微信小程序`

  移动端项目基于 `Flutter` 实现跨平台图形界面, 使用 `Dart` 作为主要开发语言.

- KitX 安装包 ([KitX Installer](https://github.com/Crequency/KitX-Installer)) 包含多个项目, 主要实现 KitX 仪表盘 不同平台的安装包

面向开发者

- KitX SDK 是 KitX 插件开发者会用到的一系列开发工具

  包含插件打包工具, 插件解包工具, 插件调试工具, 插件模板生成器, 插件通讯诊断器等

  KitX SDK 并不是具体的项目, 它由多个项目组成, 主要部分是 [KitX Tools](https://github.com/Crequency/KitX-Tools).

- [KitX Script](https://github.com/Crequency/KitX-Script) 是专用于 `KitX 任务计划` 流程控制的脚本语言.

  KitX Script 语言的设计目标是简单易用, 但是功能强大, 可以用来实现复杂的流程控制, 包括易用但强大的远程调用.

- [KitX Docs](https://github.com/Crequency/KitX-Docs) 是 KitX Project 的文档站点, 使用 `VuePress` 构建.

  也就是您现在正在查看的站点


