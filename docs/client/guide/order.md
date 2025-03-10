---
lang: zh-CN
title: 运行流程
description: 本页引导新人快速熟悉 KitX 是按照什么顺序执行的
createTime: 2025/01/25 11:24:47

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

```mermaid
graph TB
  A(仪表盘启动) --> |初始化网络相关服务| B(观察接收到的 udp 设备报文)
  B --> C{IsMainDevice<br>属性是否为真}
  C --> |True| D(连接该设备<br>通过 udp 设备报文中的<br>IPv4 和 DeviceServerPort 字段)
  C --> |False| E{是否是第 7 次<br>观察到没有主控设备}
  E --> |True| F(自行建立主控服务器)
  E --> |False| B
  D --> G(继续正常流程)
  F --> G
```

当然, 观察的过程不会在连接主控或是建立主控后结束

这个观察的过程会持续进行, 以免发生网络内多台设备同时建立主控的情况

如果观察到有其它的主控的 udp 设备报文中的 `DeviceServerBuildTime` 字段早于自己的主控服务建立时间, 则主动关闭服务器, 并重新开始观察流程


## 插件启动流程
1. 启动仪表盘
2. 用户选择启动插件A
3. 仪表盘根据插件A的 PluginStruct.json 中的 RootStartupFileName 字段以及 LoaderStruct.json 中的 LoaderName 字段拼凑启动命令
   根据 Config.json 中 Loaders.InstallPath 得到加载器安装路径, LoaderName 拼凑可执行文件名称来启动 Loader
   传入参数格式为: `--load {file} --connect {address}:{port}`
   其中,
   1. `{file}` 为插件根启动文件的绝对路径
   2. `{address}` 为当前仪表盘与插件连接的地址 (目前为内网 IPv4 地址)
   3. `{port}` 为当前仪表盘通讯服务器的服务端口
4. Loader 启动后与仪表盘建立 Socket 连接, 通过 --connect 参数后指定的地址与端口
   启动后 Loader 向仪表盘发送一个文本, 格式为: `PluginStruct: {ps}`, 其中 `{ps}` 为 json 序列化的 PluginStruct 对象
