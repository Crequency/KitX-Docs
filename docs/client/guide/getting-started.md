---
lang: zh-CN
title: 快速上手
description: 本页引导新人快速熟悉 KitX 项目 -> 包括获取源码, 第一次编译等 ...
createTime: 2025/01/25 11:24:47

---

# 快速上手

## 获取源码

### Clone 主仓库

KitX 项目使用 Git 进行版本控制, 您可以通过以下命令获取源码:

```shell
git clone git@github.com:Crequency/KitX.git --recurse-submodules
cd KitX
```

::: warning

**暂不支持通过 https 协议获取子模块, 强烈建议配置本地 git 以及 ssh 环境**

:::

---

### 初始化依赖

使用 `cheese` 来选择初始化子模块并进行相关设置:

::: tabs
@tab 初始化依赖
```shell
cheese reference --setup
```
@tab 安装 Cheese
```shell
# 您需要 dotnet sdk 才可以执行此命令
dotnet tool install cheese -g
```
:::

> 如果遇到 `cheese` 命令出错的情况, 可以添加 `--verbose` 参数来查看详细错误信息

---

## 构建项目

### 编译前准备

1. 您需要安装 dotnet 8 SDK, 请前往 [dotnet 官网](https://dotnet.microsoft.com/download/dotnet/8.0) 下载并安装
   安装成功的标志是: 成功运行命令 `dotnet --list-sdks` 并且列出了 dotnet 8 SDK 的版本号

---

### 编译

您只需要 `cd` 至您想要编译的项目目录 (包含 `.csproj` 文件), 然后运行以下命令即可:

```shell
dotnet build
```

若运行命令 `dotnet run` 则会自动编译并运行项目

::: details 面向发布的编译

您可能会注意到, 在 `KitX Dashboard/Properties/PublishProfiles/` 下有许多 `.pubxml` 后缀的文件

这些便是发布配置文件, 您可以使用命令:

```shell
cd "KitX Dashboard"
dotnet publish /p:Profile=Properties/PublishProfiles/<xxx>.pubxml
```

来使用这些配置文件进行发布, 其中 `<xxx>` 为配置文件名

发布后的二进制文件将存在于 `KitX Publish/` 下

您也可以执行以下命令来一键发布所有配置文件:

```shell
cheese scripts -e publish
```

:::

---

### 其它构建方式

您也可以使用一些 IDE 来构建项目
例如:
- Visual Studio (建议使用 2022 版本)
- Jetbrains Rider

其中, 您可以在 Visual Studio 中右键解决方案资源管理器中的项目, 选择 `发布`, 然后选择发布配置文件来进行发布
您也可以在 Rider 中使用类似的操作来进行发布

或者, 您也可以配置编辑器来简化构建步骤
例如:
- Visual Studio Code
- Vim

此处省略配置编辑器的步骤, 请自行搜索相关教程
