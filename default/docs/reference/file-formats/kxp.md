---
lang: zh-CN
title: KXP 文件格式详解
description: 本页详细解释了 KitX 的专有文件格式 .kxp (KitX Extensions Package)
---

# .kxp 格式
.kxp 格式全称 KitX Extensions Package, 是一种封装格式, 用于打包单个插件, 并记录一些额外信息, .kxp 格式顺序记录所有信息

文件结构:

| Struct Name           | Size     | Descr                                                     |
|-----------------------|----------|-----------------------------------------------------------|
| KXP File Header       | 16 bytes | Prove it's a .kxp file.                                   |
| MD5 Hash Header       | 16 bytes | Storage Hash code of all behind value.                    |
| File Map Length       | 8 bytes  | Storage a Int64 value indicated files count.              |
| File Map Item (multi) | 16 bytes | Two Int64 for File Name Length and File Body Length.      |
| File Item (multi)     | VAR      | File Name and File Body.                                  |
| Loader Struct Length  | 8 bytes  | A Int64 value indicated how long does Loader Struct took. |
| Loader Struct         | VAR      | A string in json format that storage ths Loader Struct.   |
| Plugin Struct Length  | 8 bytes  | A Int64 value indicated how long does Plugin Struct took. |
| Plugin Struct         | VAR      | A string in json format that storage ths Plugin Struct.   |

* KXP 文件校验头
    16 字节
    用来标明这是一个 kxp 文件, 值固定为 `49` `74` `20` `69` `73` `20` `61` `20` `4B` `58` `50` `20` `66` `69` `6C` `65`
    也就是 "It is a KXP file" 的 ASCII 码

* MD5 哈希校验值
    16 字节
    存放后文所有字节的 MD5 哈希校验值

* 文件地图长度
    8 字节
    一个 64 位的整数, 表示文件地图的长度

* 文件地图项 (多个)
    16 字节
    两个 64 位的整数, 分别表示 文件名的长度 和 文件体的长度 

* 文件项 (多个)
    可变长度
    文件名 与 文件体

* 加载器结构长度
    8 字节
    一个 64 位的整数, 表示加载器结构的长度

* 加载器结构
    可变长度
    一个 JSON 格式的字符串, 存放加载器结构

* 插件结构长度
    8 字节
    一个 64 位的整数, 表示插件结构的长度

* 插件结构
    可变长度
    一个 JSON 格式的字符串, 存放插件结构

其中, 文件地图部分标明了每个文件名, 文件体的长度, 同时记录了文件结构, 方便解码器进行解码, 每个文件地图项都一一对应一个文件项

* [编码器源码](https://github.com/Crequency/KitX-File-Format-Helper/blob/main/KitX.KXP.Helper/Encoder.cs)
* [解码器源码](https://github.com/Crequency/KitX-File-Format-Helper/blob/main/KitX.KXP.Helper/Decoder.cs)
