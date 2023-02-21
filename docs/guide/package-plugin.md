---
lang: zh-CN
title: 打包和发布插件
description: 本页详细讲述如何打包一个插件并将插件发布到 KitX 插件市场
---

# 打包插件

## 手动环境搭建

1. 准备打包工具 (首先需要拥有 .NET 6 的 SDK 方可执行以下命令)
```SHELL
dotnet tool install --global KitX.KXP.Tool
```

2. 准备模板生成工具 (同样需要有 .NET 6 的 SDK)
```SHELL
dotnet tool install --global KitX.Struct.Producer
```

## 开始打包
1. 将您插件的所有文件放置于某一个文件夹下
2. 运行模板生成工具 (ksmake 命令), 并按菜单选择生成模板项后填写待打包的插件目录
3. 编辑生成的模板
4. 运行打包工具 (kxper 命令), 并填写插件目录路径 (确保该路径下有 PluginStruct.json 以及 LoaderStruct.json 文件, 若已经拥有可以跳过 2,3 步)
5. 得到 .kxp 插件包

## 使用 KitX SDK

//TODO: KitX SDK

# 发布插件

//TODO: KitX 插件市场
