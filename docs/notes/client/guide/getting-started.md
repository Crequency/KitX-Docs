---
lang: zh-CN
title: 快速上手
description: 本页引导新人快速熟悉 KitX 项目 -> 包括获取源码, 第一次编译等 ...
createTime: 2025/01/25 11:24:47
permalink: /article/ks6xxrs8/
---

# 快速上手

## 获取源码

### Clone 主仓库

KitX 项目使用 Git 进行版本控制, 您可以通过以下命令获取源码:

```shell
git clone git@github.com:Crequency/KitX.git
cd KitX

# 若您未设置 SSH 密钥, 可以使用 HTTPS 方式获取源码
# 此时, git clone 命令的链接请换成 https://github.com/Crequency/KitX.git
```

**注意: 暂不支持通过 https 协议获取子模块, 强烈建议配置本地 git 以及 ssh 环境**

---

### 初始化子模块

> 您也可以在上一步的 `clone` 命令中追加 `--recurse-submodules` 参数来获取子模块从而跳过这一步, 但是使用 `start.sh` 来初始化项目仍然是必须的
> 或者在 `clone` 命令之后, 在项目根目录执行 `git submodule update --recursive --remote` 来获取所有子模块

KitX 项目使用子模块来对仓库进行拆分, 您需要在获取源码后执行以下命令来初始化子模块:

```shell
git submodule init
```

使用 KitX 的初始化工具来选择获取哪些子模块并进行相关设置:

:::: code-group
::: code-group-item Bash
```shell
./ToolKits/start.sh <type>
```
:::
::: code-group-item PowerShell
```pwsh
./ToolKits/start.ps1 <type>
```
:::
::::

其中 `<type>` 为开发类型, 可选值为:

`list` | `dashboard` | `mobile` | `loader` | `plugin` | `installer` | `reference` | `all`

若您想要开发 KitX PC 端客户端, 请 start `dashboard` 和 `reference`

若您想要开发 KitX 移动端客户端, 请 start `mobile`

若您想要开发加载器, 请 start `loader`

若您想要开发插件, 请 start `loader` 和 `plugin`

若您想要开发 KitX 安装包, 请 start `installer`

您也可以随时 start `list` 来列出可供选择的开发类型

或者 start `all` 来更新所有子模块

---

## 构建项目

### 编译前准备

1. 您需要安装 dotnet 7 SDK, 请前往 [dotnet 官网](https://dotnet.microsoft.com/download/dotnet/7.0) 下载并安装
   安装成功的标志是: 成功运行命令 `dotnet --list-sdks` 并且列出了 dotnet 7 SDK 的版本号

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
cd "ToolKits/KitX.ToolKits.Publisher"
dotnet run
```

:::

---

### 其它构建方式

您也可以使用一些 IDE 来构建项目
例如:
- Visual Studio (推荐 2019 以上的版本, 目前建议使用 2022 版本)
- Jetbrains Rider

其中, 您可以在 Visual Studio 中右键解决方案资源管理器中的项目, 选择 `发布`, 然后选择发布配置文件来进行发布
您也可以在 Rider 中使用类似的操作来进行发布

或者, 您也可以配置编辑器来简化构建步骤
例如:
- Visual Studio Code
- Vim

此处省略配置编辑器的步骤, 请自行搜索相关教程
