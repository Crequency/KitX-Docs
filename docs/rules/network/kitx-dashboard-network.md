---
lang: zh-CN
title: KitX Dashboard 网络
description: 这篇文章是有关 KitX Dashboard 网络
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

暴露如下 APIs

### /Device

- `[GET]` /
  - `[FromQuery]` Token // 访问令牌
  - 获取设备信息
- `[POST]` /ExchangeKey
  - `[FromQuery]` Key // 密钥
  - `[FromQuery]` KeyId // 密钥标识
  - `[FromQuery]` DecryptionVerifyCode // 密钥解密验证码
  - 发起密钥交换流程
- `[POST]` /ExchangeKeyBack
  - `[FromQuery]` Key // 本机密钥
  - `[FromQuery]` KeyId // 密钥标识
  - 返回本机密钥 (由被调用 /ExchangeKey 的设备向发起方调用该 API 来完成密钥交换过程)
- `[POST]` /Swap
  - `[FromQuery]` Token // 访问令牌
  - // ToDo
  - 移交主控 (由主控向从控发起)
- `[GET]` /Connect
  - `[FromQuery]` KeyId // 密钥标识
  - `[FromQuery]` VerifyCode // 验证码
  - `[FromQuery]` VerifyAnwser // 验证答案
  - `[FromQuery]` GivenToken // 加密的 Client Token
  - Host 根据 KeyId 使用对应的 Key 解密 VerifyCode, 若结果与 VerifyAnwser 一致, 则身份验证通过, 解密并存储 Client Token, 返回 Host Token

### /Plugin

- `[GET]` /Request
  - `[FromQuery]` Token // 访问令牌
  - `[FromQuery]` Request // 请求报文 ([KWC](kitx-web-command.md) 格式)
