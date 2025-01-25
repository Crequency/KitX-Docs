---
lang: en-US
title: Package and Publish Plugin
description: This page describes in detail how to package a plugin and publish the plugin to the KitX plugin market
createTime: 2025/01/25 11:25:05

---

# Package Plugin

## Prepair Environment Manually

1. Prepair Package Tool (First you need to have the .NET 6 SDK to execute the following command)
```SHELL
dotnet tool install --global KitX.KXP.Tool
```

2. Prepair Template Generator Tool (You also need to have the .NET 6 SDK)
```SHELL
dotnet tool install --global KitX.Struct.Producer
```

## Start Packaging

```SHELL
mkdir plugin # Put all the files of your plugin in a folder, for example: `./plugin`
ksmaker -o ./plugin/ # Run the template generation tool, this command will generate `PluginStruct.json` and `LoaderStruct.json` files in `./plugin/`
vim ./plugin/PluginStruct.json # Edit generated plugin struct file, you can change `vim` command to other text editor
vim ./plugin/LoaderStruct.json # Edit generated loader struct file, you can change `vim` command to other text editor
kxpmaker -s ./plugin/ # Pack plugin, output to `plugin.kxp` file in current directory as default
```

More commands usage about `ksmaker` and `kxpmaker` please try `kxmaker --help` or `kxpmaker --help`

## Use KitX SDK

//TODO: KitX SDK

# Publish Plugin

//TODO: KitX plugin market
