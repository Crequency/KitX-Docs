---
lang: zh-CN
title: 执行流程
description: 加载器的执行流程以及与 KitX 仪表板的通信规则
createTime: 2023/07/27 00:25:50
permalink: /article/q5mdzfy1/
---

# 执行流程

## 通信方式

我们使用 TCP 进行通信，以加载器为客户端, 以仪表板为服务端

## 插件启动阶段

1. 通过主动加载器或自加载器，插件启动
3. 向仪表盘发送 `PluginStruct` 的 Json 序列化文本, 格式: `PluginStruct: <PluginStruct>`
   其中, `<PluginStruct>` 是 Json 序列化后的 `PluginsStruct` 文本
4. 仪表盘接收到 `PluginStruct` 之后, 向加载器发送插件的工作路径, 格式: `WorkPath: <WorkPath>`
   其中, `<WorkPath>` 是一个路径, 插件应该在这个路径下存放配置文件以及临时数据等
5. 自由通信开始

## 自由通信阶段

仪表盘与加载器之间现在可以双向通信, 通信内容必须是 `Command` 类的 Json 序列化文本

## 离线

当 Loader 一方因任意原因断开 TCP Socket 连接, Dashboard 都会认为插件离线
