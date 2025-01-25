---
lang: zh-CN
title: 主动加载器
description: 主动加载器的作用, 组成, 以及实现方式
createTime: 2023/07/27 00:25:50
permalink: /article/er40kvy3/
---

# 主动加载器

## 概述

这类加载器是单独的程序, 通过其他方式与插件进行交互

例如: C# 中我们使用 MEF 框架进行实现插件的交互设计, 加载器将是单独的 exe 程序, 而插件则是单独的文件

要实现主动加载器, 最好视语言决定, 如果语言生态中已经有较好的实现方案, 那么再好不过了

这对有虚拟机的语言、可以动态调用的语言来说实现较为简单, 例如: C#, Java, Python

## 主动加载插件的启动

1. 仪表盘执行 Shell 命令: `<主动加载器程序文件> --load <插件> --connect <IP地址>:<端口>`
2. 主动加载器启动
3. 加载器调用插件入口点，插件启动

## 主动加载器的启动

1. 根据 `--load` 参数获取插件跟启动文件
2. 插件框架启动
3. 向仪表盘发送 `PluginStruct` 的 Json 序列化文本, 格式: `PluginStruct: <PluginStruct>`
   其中, `<PluginStruct>` 是 Json 序列化后的 `PluginsStruct` 文本
4. 仪表盘接收到 `PluginStruct` 之后, 向加载器发送插件的工作路径, 格式: `WorkPath: <WorkPath>`
   其中, `<WorkPath>` 是一个路径, 插件应该在这个路径下存放配置文件以及临时数据等
5. 自由通信开始
