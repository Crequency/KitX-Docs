---
lang: zh-CN
title: 运行流程
description: 本页引导新人快速熟悉 KitX 是按照什么顺序执行的
---

# 运行流程

## 仪表盘启动流程

这个流程中的各种 `管理器` , `服务` , 源代码均在 `KitX Dashboard/Services/` 下

1. 初始化事件总线 (`EventHandlers`)
2. 处理启动参数 (即命令行参数)
3. 单进程检查 (防止多个实例同时运行)
4. 启动时检查
   1. 读取配置文件, 初始化配置信息 (存在则读取, 不存在则初始化默认配置)
   2. 初始化日志系统, 开始记录日志
   3. 初始化全局异常捕获
   4. 初始化相关环境 (存在则读取, 不存在则重新创建)
      1. Common.Algorithm
   5. 初始化数据库 (存在则读取, 不存在则重新创建)
   6. 初始化任务管理器 (`TasksManager`)
   7. 初始化网络管理器 (`WebManager`)
   8. 初始化数据记录管理器 (`StatisticsManager`)
   9. 初始化有关事件 (`EventHandlers`)
   10. 初始化文件监控管理器 (`FileWatcherManager`)
5. 进入应用生命周期, 启动图形化界面

## 网络初始化过程

- 在 `仪表盘启动流程` 的 4.7 步中, 实际执行的代码是:
  ```csharp
    #region 初始化 WebManager

    Program.TasksManager.SignalRun(nameof(SignalsNames.MainWindowInitSignal), () =>
    {
        new Thread(() =>
        {
            Thread.Sleep(Program.Config.Web.DelayStartSeconds * 1000);
            Program.WebManager = new WebManager().Start();
        }).Start();
    });

    #endregion
  ```
  这个任务将在 `MainWindow.xaml.cs` 中 `InitWindow()` 函数执行完毕时 `Raise`  
  并且休眠 `Program.Config.Web.DelayStartSeconds` 秒数后再开始启动网络相关服务  
- `WebManager.Start()` 方法将分别初始化 `DevicesManager` , `DevicesServer` , `PluginsManager` 和 `PluginsServer`
- `DevicesServer` 在调用 `Start()` 方法后开始向局域网多播本机的设备信息 udp 包, 表现形式为 `DeviceInfoStruct` 的 json 序列化字符串 (该结构定义于 `KitX.Web.Rules` 中)  
  同时也会监听来自局域网组播的 udp 包, 并将其解析为 `DeviceInfoStruct` 结构, 并通过 `DevicesManager.Update(DeviceInfoStruct)` 方法将其添加到界面中
- `PluginsServer` 在调用 `Start()` 方法后开始监听网络连接请求并同请求的插件建立 tcp 连接, 接收到以 `"PluginStruct: "` 打头的报文之后将剩余部分作为 json 字符串反序列化为 `PluginStruct` 结构, 并通过 `PluginsManager.Execute(string, IPEndPoint)` 方法将其添加到界面中

## 自组网流程

基于局域网中不断发送的 udp 设备报文, KitX Dashboard 可以很轻松地判断出局域网中运行着 KitX Dashboard 的设备

在 udp 设备报文中增加 tcp 服务器相关字段, 即可依据 udp 设备报文自动建立连接, 组成网络

具体流程: (以某个设备的视角观察)

```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```


