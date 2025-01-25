---
lang: en-US
title: Error Codes
description: This page briefly introduces the error codes and their definitions of KitX Dashboard
createTime: 2025/01/25 11:25:05
permalink: /en/article/ngd1h6yd/
---

# Error Codes

## 1001 - StartUp Arguments Error
Normally caused by missing necessary parameters, such as using the `--import-plugin` parameter, but you didn't pass the path of the .kxp file  
It is also possible that there is an internal logic error, you can check the dump.log in the root directory of the program to see the reason for the abnormal exit

## 1002 - Config file didn't found, and process is not in Init field
Normally caused by using the `--import-plugin` parameter to import plugins and never starting KitX Dashboard on this machine  
Because the configuration file will be generated when the program is started for the first time, at this time, importing plugins will cause pure errors, and I don't plan to prepare a fix plan for this error

