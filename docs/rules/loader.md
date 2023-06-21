---
lang: zh-CN
title: 加载器
description: 本篇文章介绍加载器的作用, 组成, 以及实现方式
---

首先, 我们需要知道加载器在 KitX Project 中的作用.

由于我们不可能将多种语言的插件交互逻辑都写入主程序, 于是我们设想, 是否能够通过中间程序负责具体交互, 并统一主程序与中间程序的通讯协议 ?

于是我们设计了 KitX Project 的三层设计:

KitX Dashboard <-> Loader <-> Plugin

加载器 (Loader) 在 KitX 支持多语言编写插件方面功不可没

## 加载器的分类

加载器目前有两类:

1. `主动加载器`
2. `被动加载器` (自加载)

### 主动加载器

这类加载器是单独的程序, 通过其他方式与插件进行交互

例如: C# 中我们使用 MEF 框架进行实现插件的交互设计, 加载器将是单独的 exe 程序, 而插件则是单独的 dll 文件

要实现主动加载器, 最好视语言决定, 如果语言生态中已经有较好的实现方案, 那么再好不过了

这对有虚拟机的语言来说实现较为简单, 例如: C#, Java

但对于编译到机器码的语言来说就不是那么容易

例如我们为 C++ 开发主动加载器, 也许可以采取共享内存的方式通信

当然, 更好的方式是使用被动加载器

### 被动加载器

被动加载器的加载方式也称为自加载

也就是编写一个对应语言的库, 在库中封装与 KitX Dashboard 通信的部分

插件需要使用该库, 并在启动时手动配置与 KitX Dashboard 的连接

以下是设想中实现后的使用方式:

```java
Loader loader = new Loader();

loader.Connect(ipaddress, port);
loader.Register(new Identify());

myPath = loader.GetWorkPath();

// ...
```

## 加载器与仪表盘的通信规则

用户启动插件:

1. 仪表盘执行 Shell: `loader --load <path> --connect <ip>:<port>`
2. loader 启动

Loader 启动:

1. 根据 `--load` 参数获取插件跟启动文件
2. 插件框架启动
3. 向仪表盘发送 `PluginStruct` 的 Json 序列化文本, 格式: `PluginStruct: <PluginStruct>`
   其中, `<PluginStruct>` 是 Json 序列化后的 `PluginsStruct` 文本
4. 仪表盘接收到 `PluginStruct` 之后, 向加载器发送插件的工作路径, 格式: `WorkPath: <WorkPath>`
   其中, `<WorkPath>` 是一个路径, 插件应该在这个路径下存放配置文件以及临时数据等
5. 自由通信开始

自由通信阶段:

仪表盘与加载器之间现在可以双向通信, 通信内容必须是 `Command` 类的 Json 序列化文本

