---
lang: zh-CN
title: KWC 网络通讯协议
description: 这篇文章是有关 KWC 网络通讯协议
---

# 什么是 KWC

KWC 是 KitX Web Command 的缩写, 即 `KitX 网络命令系统`, 是一种通讯协议, 适用于 KitX 网络中的通讯.

# KWC 协议

KWC 是一种通讯规范, 规范了 KitX 网络中的通讯格式, 使得不同的设备可以通过 KWC 协议进行通讯.
本质是 Json 序列化/反序列化文本, 但使用 KitX 网络特定属性.

## 内容

KWC 主要包含两部分:

- [Request](#request)
- [Command](#command)

### Request

| 属性名          | 类型              | 描述           | 默认值    |
|-----------------|-------------------|--------------|-----------|
| Type            | String            | 消息类型       | "Command" |
| Version         | String            | 协议版本       |           |
| Sender          | `DeviceLocator`   | 发送设备定位器 |           |
| Target          | `DeviceLocator`   | 目标设备定位器 |           |
| EncryptionInfo  | `EncryptionInfo`  | 加密信息       |           |
| CompressionInfo | `CompressionInfo` | 压缩信息       |           |
| Content         | String            | 内容           |           |

- [`DeviceLocator`](https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/Device/DeviceLocator.cs) 设备定位器, 用于定位设备, 具体成员列表参见外部链接.
- [`EncryptionInfo`](https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/WebCommand/Infos/EncryptionInfo.cs) 加密信息
- [`CompressionInfo`](https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/WebCommand/Infos/CompressionInfo.cs) 压缩信息

### Command


