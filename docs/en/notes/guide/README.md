---
lang: en-US
title: Project Description
description: This page will simply introduce KitX to you
createTime: 2023/07/27 00:25:50

---

# Project Description

Kitx Project aims to create a cross-platform and scalable toolbox, so that the electronic devices are no longer split, the computing power is shared, and everyone can enjoy the fun of technology.

# Project Composition

To end users

- [KitX Dashboard](https://github.com/Crequency/KitX-Dashboard) is the core of KitX Project and the specific implementation of KitX Project on the desktop.

  The dashboard is a cross-platform desktop application that can run on the desktop operating systems such as `Windows`, `Macos`, `GNU/Linux`
  The purpose is to provide users with an integrated toolbox, so that users can manage multiple devices on one interface, and can expand functions through the form of plug-ins.

  The dashboard project is based on the `Avalonia UI` to realize the cross-platform graphic interface, and use `C#` as the main development language.

- [KitX Mobile](https://github.com/Crequency/KitX-Mobile) is the specific implementation of KitX Project on the mobile terminal, which can be run on `Android`, `iOS` devices.

  Due to the low authority of the mobile terminal, the mobile terminal cannot perform extensive function expansion, but users can use mobile to manage devices and call the function on the remote device.
  Of course, the mobile terminal can also expand the function through the `Mini App` and other forms, similar to the `WeChat Mini App`

  The mobile project is based on the `Flutter` to realize the cross-platform graphic interface, and use `dart` as the main development language.

- [KitX Installer](https://github.com/Crequency/KitX-Installer) include multiple projects, mainly realize the installation package of different platforms of KitX Dashboard

To developers

- KitX SDK is a series of development tools used by KitX plug-in developers

  Including plug-in packing tools, plug-in unpacking tools, plug-in debugging tools, plug-in template generators, plug-in communication diagnostics, etc.

  KitX SDK is not a specific project. It consists of multiple projects. The main part is [KitX Tools](https://github.com/Crequency/KitX-Tools).

- [KitX Script](https://github.com/Crequency/KitX-Script) is dedicated to the script language for the `KitX Task Plan`.

  The design goal of the KitX Script language is easy to use, but the function is powerful, which can be used to achieve complex process control, including easy-to-use but powerful remote calls.

- [KitX Docs](https://github.com/Crequency/KitX-Docs) is the document site of KitX Project, built with `vuepress`.

  This is the site you are watching now.
