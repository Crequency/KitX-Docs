---
lang: zh-CN
title: 适用于 C# 的 Loader
description: 关于适用于 C# 的 Loader 的设计思路与技术细节
---

# 适用于 C# 的 Loader

获取 [源代码](https://github.com/Crequency/KitX-Loaders/tree/main/KitX.Loader.CSharp) .

## 设计思路

先决条件:

1. dotnet 平台中已有成熟的插件框架: MAF/MEF
2. csharp 是基于虚拟机和 CIL 的语言, 易于实现主动加载器
3. csharp 有成熟的接口和反射机制

实际设计:

### 文件组成

程序部分包含:

- `ArgsParser.cs`: 启动参数处理器
- `Option.cs`: 启动选项定义类
- `Program.cs`: 程序入口

加载器部分包含

- `CommunicationManager.cs`: 通讯管理器, 负责处理与 KitX Dashboard 的通讯
- `PluginManager.cs`: 插件管理器, 调度 KitX Plugin 的生命周期

