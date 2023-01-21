---
lang: en-US
title: KXP File Format
description: This page explains the special file formats of KitX .kxp (KitX Extensions Package)
---

# .kxp file format
.kxp file format is a package format, used to package a single plugin, and record some extra information, .kxp file format records all information in order

File Structure:

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

* KXP File Header
    16 Bytes
    To prove it's a .kxp file, the value is fixed to `6E` `69` `64` `75` `6F` `6A` `69` `75` `68` `75` `69` `6C` `61` `69` `61` `3F`

* MD5 Hash Header
    16 Bytes
    Storage Hash code of all behind value.

* File Map Length
    8 Bytes
    A Int64 value indicated files count.

* File Map Item (multi)
    16 Bytes
    Two Int64 for File Name Length and File Body Length.

* File Item (multi)
    Variable Length
    File Name and File Body.

* Loader Struct Length
    8 Bytes
    A Int64 value indicated how long does Loader Struct took.

* Loader Struct
    Variable Length
    A string in json format that storage ths Loader Struct.

* Plugin Struct Length
    8 Bytes
    A Int64 value indicated how long does Plugin Struct took.

* Plugin Struct
    Variable Length
    A string in json format that storage ths Plugin Struct.

All of the above, the file map part indicates the length of each file name, file body, and records the file structure, which is convenient for the decoder to decode, and each file map item corresponds to a file item

* [Encoder Source Code](https://github.com/Crequency/KitX-File-Format-Helper/blob/main/KitX.KXP.Helper/Encoder.cs)
* [Decoder Source Code](https://github.com/Crequency/KitX-File-Format-Helper/blob/main/KitX.KXP.Helper/Decoder.cs)
