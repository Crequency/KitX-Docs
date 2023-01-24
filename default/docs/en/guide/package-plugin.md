---
lang: en-US
title: Package and Publish Plugin
description: This page describes in detail how to package a plugin and publish the plugin to the KitX plugin market
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
1. Put all the files of your plugin in a folder
2. Run the template generation tool (`ksmake` command), and fill in the plugin directory to be packaged after selecting the template item from the menu
3. Edit the generated template
4. Run the packaging tool (`kxper` command), and fill in the plugin directory path (make sure that there is a `PluginStruct.json` and `LoaderStruct.json` file under the path, if you already have it, you can skip 2,3 steps)
5. Get the .kxp plugin package

## Use KitX SDK

//TODO: KitX SDK

# Publish Plugin

//TODO: KitX plugin market
