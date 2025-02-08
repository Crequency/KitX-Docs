---
lang: en-US
title: Get started quickly
description: This page guides newcomers to quickly get familiar with the KitX project -> including obtaining source code, first compilation, etc....
createTime: 2025/01/25 11:24:47

---

# Get started quickly

## Get the source code

### Clone main warehouse

The KitX project uses Git for version control, and you can get the source code through the following command:

```shell
git clone git@github.com:Crequency/KitX.git --recurse-submodules
cd KitX
```

::: warning

**It is not supported to obtain submodules through the https protocol. It is strongly recommended to configure local git and ssh environments**

:::

---

### Initialize dependencies

Use `cheese` to select the initialization submodule and make relevant settings:

::: tabs
@tab Initialize dependencies
```shell
cheese reference --setup
```
@tab Install Cheese
```shell
# You need dotnet sdk to execute this command
dotnet tool install cheese -g
```
:::

> If you encounter an error in the `cheese` command, you can add the `--verbose` parameter to view detailed error information

---

## Build a project

### Preparation before compilation

1. You need to install dotnet 8 SDK, please go to [dotnet official website](https://dotnet.microsoft.com/download/dotnet/8.0) to download and install
   The installation is successful: the command `dotnet --list-sdks` was successfully run and the version number of the dotnet 8 SDK is listed.

---

### Compilation

You just need `cd` to the project directory you want to compile (including the `.csproj` file), and then run the following command:

```shell
dotnet build
```

If you run the command `dotnet run`, the project will be automatically compiled and run.

::: details Release-oriented compilation

You may notice that there are many files with `.pubxml` suffix under `KitX Dashboard/Properties/PublishProfiles/`

These are the Publish configuration files, you can use the commands:

```shell
cd "KitX Dashboard"
dotnet publish /p:Profile=Properties/PublishProfiles/<xxx>.pubxml
```

To publish using these configuration files, where `<xxx>` is the configuration file name

The published binary file will exist under `KitX Publish/`

You can also execute the following command to publish all configuration files in one click:

```shell
cheese scripts -e publish
```

:::

---

### Other construction methods

You can also use some IDEs to build your project
For example:
- Visual Studio (Recommended to use version 2022)
- Jetbrains Rider

Among them, you can right-click the project in Solution Explorer in Visual Studio, select `Publish`, and then select Publish configuration file to publish
You can also use similar actions in Rider to publish

Alternatively, you can configure an editor to simplify the build steps
For example:
- Visual Studio Code
- Vim

The steps to configure the editor are omitted here, please search for relevant tutorials by yourself
