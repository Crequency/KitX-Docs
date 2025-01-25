---
lang: zh-CN
title: 适用于 C# 的 Loader
description: 关于适用于 C# 的 Loader 的设计思路与技术细节
createTime: 2023/07/27 00:25:50
permalink: /article/rethgvok/
---

# 适用于 C# 的 Loader

查看 [源代码](https://github.com/Crequency/KitX-Loaders/tree/main/KitX.Loader.CSharp) .

## 设计思路

先决条件:

1. dotnet 平台中已有成熟的插件框架: MAF/MEF
2. csharp 是基于虚拟机和 CIL 的语言, 易于实现主动加载器
3. csharp 有成熟的接口和反射机制

设计:

插件实现特定接口, 加载器通过 MEF 框架加载插件之后, 通过特定接口获取插件信息并进行调度

## 实际设计

### 文件组成

程序部分包含:

- `ArgsParser.cs`: 启动参数处理器
- `Option.cs`: 启动选项定义类
- `Program.cs`: 程序入口

加载器部分包含

- `CommunicationManager.cs`: 通讯管理器, 负责处理与 KitX Dashboard 的通讯
- `PluginManager.cs`: 插件管理器, 调度 KitX Plugin 的生命周期

### 执行流程

1. 处理命令行启动参数
   1. 得到 KitX Dashboard 插件服务器地址
      1. 随即实例化 `CommunicationManager` 并开始 TCP 通讯
   2. 得到插件跟启动文件路径
      1. 随即实例化 `PluginManager.cs`
      2. 传入发送信息的回调函数
      3. 加载插件 (通过 MEF 框架)
         1. 从插件实现了 `IIdentityInterface` 接口的类中整理 `PluginStruct` 实例
         2. 向仪表盘发送 Json 序列化的 `PluginStruct`, 格式: "PluginStruct: `content`"
         3. 获取插件实现了 `IController` 接口的类实例 `controller`
         4. 调用 `controller.SetRootPath` 向插件传入插件文件所在路径
         5. 调用 `controller.SetSendCommandAction` 向插件传入发送 `Command` 的回调函数
         6. 调用 `controller.Start` 开始插件生命周期
