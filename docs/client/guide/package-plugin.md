---
lang: zh-CN
title: 打包和发布插件
description: 本页详细讲述如何打包一个插件并将插件发布到 KitX 插件市场
createTime: 2025/01/25 11:24:47

---

::: details 旧的打包方式已弃用

## ~~手动环境搭建~~

> ***注意: 本节内容已过时, 请使用 `KitX SDK` 来打包插件***

1. ~~准备打包工具 (首先需要拥有 .NET 7 的 SDK 方可执行以下命令)~~
```SHELL
dotnet tool install --global KitX.KXP.Tool
```

1. ~~准备模板生成工具 (同样需要有 .NET 7 的 SDK)~~
```SHELL
dotnet tool install --global KitX.Struct.Producer
```

## ~~开始打包~~

```SHELL
mkdir plugin # 将您插件的所有文件放置于某一个文件夹下, 例如: `./plugin`
ksmaker -o ./plugin/ # 运行模板生成工具, 该命令会在 ./plugin/ 目录下创建 `PluginStruct.json` 和 `LoaderStruct.json` 文件
vim ./plugin/PluginStruct.json # 编辑生成的插件结构模板, 可把 `vim` 命令换成其它文本编辑器
vim ./plugin/LoaderStruct.json # 编辑生成的加载器结构模板, 可把 `vim` 命令换成其它文本编辑器
kxpmaker -s ./plugin/ # 打包插件, 默认输出到工作目录 `plugin.kxp` 文件
```

~~更多关于 `ksmaker` 和 `kxpmaker` 的命令语法请执行命令: `ksmaker --help` 或者 `kxpmaker --help`~~

:::

# 使用 KitX SDK 打包插件

`KitX SDK` 正在开发中

# 发布插件

KitX 插件市场正在开发中
