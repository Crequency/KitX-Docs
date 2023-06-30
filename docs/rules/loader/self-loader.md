---
lang: zh-CN
title: 自加载器
description: 被动加载器的作用, 组成, 以及实现方式
---

## 概述

自加载是指一种被动的加载方式

也就是编写一个对应语言的库, 在库中封装与 KitX Dashboard 通信的部分

自加载器一般是一个库，库中封装了各种与 KitX Dashboard 通信的代码

插件需要使用该库, 并在启动时调用自加载器与 KitX Dashboard 的连接

