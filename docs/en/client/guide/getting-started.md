---
lang: en-US
title: Get Started
description: This page will lead you to get started with KitX
---

# Get Started

## Get Source Code

### Clone Main Repository

KitX Project use Git to manage version, you can get source code by following command:

```shell
git clone git@github.com:Crequency/KitX.git
cd KitX
```

If you haven't set SSH key, you can use HTTPS to get source code:

```shell
git clone https://github.com/Crequency/KitX.git
cd KitX
```

---

### Init Submodules

> And you can add `--recurse-submodules` to the command above to get submodules at the same time.

KitX Project use submodules to split the repository, you need to execute following command to init submodules:

```shell
git submodule init
```

Then use KitX init tool to select which submodules you want to get:

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

You can select value of `<type>` to get different submodules:

`dashboard` | `mobile` | `loader` | `plugin` | `installer` | `reference`

If you want to develop KitX Dashboard PC Client, please start `dashboard` and `reference`

If you want to develop KitX Mobile Client, please start `mobile`

If you want to develop KitX Loader, please start `loader`

If you want to develop KitX Plugins, please start `loader` and `plugin`

If you want to develop KitX Installer, please start `installer`

And you can always run `list` to list available types

---

## Build Project

### Preparations before build

1. You need to install dotnet 6 SDK, please go to [dotnet official website](https://dotnet.microsoft.com/download/dotnet/6.0) to download and install
   The sign of successful installation is: successfully run command `dotnet --list-sdks` and list dotnet 6 SDK version

---

### Compile

You only need to `cd` to the project directory (contains `.csproj` file) you want to compile, and then run the following command:

```shell
dotnet build
```

If you run the command `dotnet run`, the project will be compiled and run automatically

::: details Compile for publish

You may notice that there are many files with `.pubxml` suffix in `KitX Dashboard/Properties/PublishProfiles/`

These are the publish profiles, you can use the following command:

```shell
cd "KitX Dashboard"
dotnet publish /p:Profile=Properties/PublishProfiles/<xxx>.pubxml
```

to publish with these profiles, where `<xxx>` is the name of the profile file

The binary file will be generated in `KitX Publish/`

And you can execute the following command to publish all profiles at once:

```shell
cd "ToolKits/KitX.ToolKits.Publisher"
dotnet run
```

:::

---

### Other Build Methods

You can also use some IDE to build the project
For example:
- Visual Studio (Recommended version: 2019 or above, currently recommended version: 2022)
- Jetbrains Rider

In Visual Studio, you can right-click the project in the solution explorer, and select `Publish`, then select the publish profile to publish
You can also use similar operations in Rider to publish

Or, you can also configure your editor to simplify the build process
For example:
- Visual Studio Code
- Vim

Here is the omitted steps to configure the editor, please search for related tutorials yourself
