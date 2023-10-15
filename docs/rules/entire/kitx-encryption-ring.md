---
lang: zh-CN
title: KitX 加密环
description: 本页有关 KitX 加密环的运作原理
---

# KitX 加密环运作原理

1. 每个客户端在启用 "加密环" 时生成一对 RSA 密钥对存储在本地
2. 用户启用 "加密环" 后, 可手动添加要加密通信的目标设备 (目标设备也需启用 "加密环")
3. 若目标设备启用了 "加密环", 则开始密钥交换过程
4. 若目标设备未启用 "加密环", 则弹窗提示用户目标设备未启用 "加密环"

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
        A(生成临时六位密码) --> |AES| B(用临时密码加密密钥)
        B --> |KWC| D
        B --> C(将临时密码显示在屏幕中<br>提示用户在目标设备上输入这串密码)
    end
```

## 加密通信

对于已交换密钥的设备, 在 KWC 报文中设置 `IsEncrypted` 字段为 `True` 即可标记该报文启用了加密通信
并需随报文附带 `EncryptionKeyId` 字段以便目标设备能使用正确的密钥解密报文

`EncryptionKeyId` 由密钥提供方提供, 且在密钥交换过程中已经交换, 其值为密钥的 SHA256 哈希值



