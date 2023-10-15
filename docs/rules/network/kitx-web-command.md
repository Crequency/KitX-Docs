---
lang: zh-CN
title: KWC 网络通讯协议
description: 这篇文章是有关 KWC 网络通讯协议
---

# 什么是 KWC

KWC 是 KitX Web Command 的缩写, 即 `KitX 网络命令系统`, 是一种通讯协议, 适用于 KitX 网络中的通讯.

# KWC 协议

KWC 是一种通讯规范, 规范了 KitX 网络中的通讯格式, 使得不同的设备可以通过 KWC 协议进行通讯.
本质是 LBPT 序列化/反序列化文本, 但使用 KitX 网络特定属性.

## KWC 格式 (属性列表)

KWC 语法完全符合 LBPT 格式, 但使用特定的属性来传递仅适用于 KitX 网络的信息.
以下列出 KWC 协议中的属性:

| 属性名           | 类型            | 描述                                | 默认值    |
|------------------|-----------------|-----------------------------------|-----------|
| Type             | String          | 消息类型                            | "Command" |
| Version          | String          | 协议版本                            |           |
| Target           | `DeviceLocator` | 目标设备定位器                      |           |
| EncryptionMethod | String          | 加密方法                            | "AES"     |
| EncryptionKeyId  | String          | 加密密钥 ID                         |           |
| IsEncrypted      | Boolean         | `Content` 属性是否加密              | False     |
| IsCompressed     | Boolean         | `Content` 属性是否压缩              | False     |
| Content          | String          | 内容 (一定为 LBPT 中的末尾多行属性) |           |

- [`DeviceLocator`](https://github.com/Crequency/KitX-Rules/blob/main/KitX.Web.Rules/DeviceLocator.cs) 设备定位器, 用于定位设备, 具体成员列表参见外部链接.




