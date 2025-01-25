---
lang: zh-CN
title: KitX 加密环
description: 本页有关 KitX 加密环的运作原理
createTime: 2023/10/15 19:06:56
permalink: /article/hrx8ovbx/
---

# KitX 加密环运作原理

1. 每个客户端在初次启动时生成一对 RSA 密钥对存储在本地
2. 用户需在设备页面选择新设备选择开始密钥交换过程来交换密钥
3. 本机 (A) 会弹窗显示一个临时的八位数字密码, 密钥信息使用 AES 加密后发送给目标设备 (B)
4. 目标设备 (B) 收到密钥信息后, 会弹窗提示用户输入临时密码, 输入正确后解密密钥信息并存储在本地
5. 目标设备 (B) 成功解密后, 会将自己的密钥信息使用相同的临时密码加密后发送给本机 (A)
6. 结束密钥交换过程
7. 之后新的设备和加密环中任何一个设备配对, 都将自动开始与其他加密环中所有设备交换密钥

## 密钥交换过程

```mermaid
---
title: 密钥交换过程
---
flowchart TB
    subgraph Client.A
        K(收到 Client.B 的密钥) --> |AES| L(用临时密码解密密钥)
        L --> M(将 Client.B 的密钥存储在本地)
    end

    subgraph Client.B
        D(收到密钥交换请求) --> E(询问用户临时密码)
        E --> F(验证解密是否成功)
        F --> |否| G(提示用户密码错误)
        G --> E
        F --> |是| H(存储 Client.A 的密钥及相关信息)
        H --> |AES| I(用相同的临时密码加密 Client.B 的密钥)
        I --> J(加密后的密钥发回 Client.A)
        J --> |KWC| K
    end

    subgraph Client.A
        A(生成临时八位密码) --> |AES| B(用临时密码加密密钥)
        B --> |KWC| D
        B --> C(将临时密码显示在屏幕中<br>提示用户在目标设备上输入这串密码)
    end
```
