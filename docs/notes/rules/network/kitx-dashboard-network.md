---
lang: zh-CN
title: KitX Dashboard 网络
description: 这篇文章是有关 KitX Dashboard 网络
createTime: 2024/02/19 11:12:25
permalink: /article/ss4uokw5/
---

# KitX Dashboard 网络

## Plugins Server

> 通信协议: WebSocket
>
> 报文协议: [KWC](kitx-web-command.md)

流程:

1. 生成 ConnectionId
2. 启动 Loader
   - `--load` 参数传入插件启动文件路径
   - `--connect` 参数传入连接路径, 如 `ws://localhost:8080/plugin/<ConnectionId>`
3. Loader 启动后, 通过 WebSocket 连接到 Dashboard
4. 完成以下流程
   1. Loader 向 Dashboard 注册插件, 发送 `PluginInfo`
      - `[PLUG]` Command.Request: "RegisterPlugin"
   2. 从 Dashboard 获取别的信息, 包括插件工作路径等
      - `[PLUG]` Command.Request: "RequestWorkingDetail"
      - `[DASH]` Command.Request: "ReceiveWorkingDetail"
   3. 进入插件工作循环: 汇报插件状态, 接收 [KWC](kitx-web-command.md)
      - `[PLUG]` Command.Request: "ReportStatus"
      - `[PLUG]` Command.Request: "RequestCommand"
      - `[DASH]` Command.Request: "ReceiveCommand"

## Devices Server

> 通信协议: Http
>
> 报文协议: [KWC](kitx-web-command.md)

在本地访问 `http://localhost:<devicesServerPort>/swagger` 可以打开 Swagger

在线 Api 文档我们正在开发, 请稍安勿躁 ~
