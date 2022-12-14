# 项目架构

- **.github**   :   GitHub 相关配置文件
  - **ISSUE_TEMPLATE**  :   issue 模板
    - ---bug-report.md  :   bug 的 issue 模板
    - ---feature-request.md :   feature 请求的 issue 模板
  - **workflows**   :   GitHub CI 工作流
    - build-loaders.yml :   构建所有加载器
    - build-plugins.yml :   构建所有官方插件
    - build-publish-packages.yml    :   构建并发布所有包, 需在 commit 中包含 `[Publish Packages]` 关键词, 同时使用 `[All]` 发布所有包或者使用 `[项目名称]` 指定发布某个包
    - build.yml :   构建主线项目
  - FUNDING.yml :   关于捐献的 GitHub 配置文件
  - pull_request_template.md    :   PR 模板
- **.gitlab**   :   GitLab 相关配置文件
  - **issue_templates** :   issue 模板
    - bug-report.md :   bug 的 issue 模板
    - feature-request.md    :   feature 请求的 issue 模板
  - **merge_request_templates** :   合并请求的模板
    - default.md    :   默认的合并请求的模板
- **KitX Build**    :   KitX 生成目录
- **KitX Contracts**    :   KitX 协议
  - **KitX.Contract.CSharp**    :   适用于 C# 的 KitX 协议
    - IController.cs    :   控制器接口
    - IIdentifyInterface.cs :   识别接口
    - IMarketPluginContract.cs  :   市场接口
    - KitX-Background-ani.png   :   用于 NuGet 包图标
    - KitX.Contract.CSharp.csproj   :   项目文件
- **KitX Dashboard**    :   KitX 仪表盘
  - **Assets**  :   资源文件
    - **Fonts** :   字体文件
  - **Commands**    :   命令相关
    - DelegateCommand.cs    :   基础命令基类
  - **Converters**  :   转换器
    - OperatingSystem2Enum.cs   :   操作系统类别相关 [获取当前系统类别]
    - Selection2VisibleConverter.cs :   选择 index 与可见性的相互转化
    - WindowAttributesConverter.cs  :   窗体属性转换器 [坐标回正]
  - **Data**    :   数据相关
    - Config.cs :   总配置文件模型类
    - ErrorCodes.cs :   错误代码定义类
    - GlobalInfo.cs :   全局信息类
    - MarketConfig.cs   :   市场配置文件模型类
    - PluginsList.cs    :   插件列表配置文件模型类
  - **Languages**   :   语言文件
    - en-us.axaml   :   英语 (美国) 语言文件
    - ja-jp.axaml   :   日本语 语言文件
    - zh-cn.axaml   :   简体中文 (大陆) 语言文件
    - zh-cnt.axaml  :   繁体中文 (港澳台) 语言文件
  - **Models**  :   模型相关
    - EventHandlers.cs  :   事件委托托管类 (事实上这个类应该归于 Services)
    - GreetingTextGenerator.cs  :   招呼语生成器 (事实上这个类应该归于 Services)
    - Plugin.cs :   插件模型
    - SurpportLanguages.cs  :   受支持语言模型
  - **Properties**  :   项目属性相关
    - **PublishProfiles**   :   发布配置文件, 用于在 VS 中一键发布
      - linux-arm-single-cut.pubxml :   适用于 Linux 发行版, arm 架构, 带运行环境, 有裁剪
      - linux-arm-single.pubxml :   适用于 Linux 发行版, arm 架构, 带运行环境
      - linux-x64-single-cut.pubxml :   适用于 Linux 发行版, x86 架构 64 位, 带运行环境, 有裁剪
      - linux-x64-single.pubxml :   适用于 Linux 发行版, x86 架构 64 位, 带运行环境
      - osx-x64-single-cut.pubxml   :   适用于 OSX , x86 架构 64 位, 带运行环境, 有裁剪
      - osx-x64-single.pubxml   :   适用于 OSX , x86 架构 64 位, 带运行环境
      - win-x64-single-cut.pubxml   :   适用于 Window , x86 架构 64 位, 带运行环境, 有裁剪
      - win-x64-single.pubxml   :   适用于 Window , x86 架构 64 位, 带运行环境
      - win-x64.pubxml  :   适用于 Window , x86 架构 64 位
      - win-x86-single-cut.pubxml   :   适用于 Window , x86 架构 32 位, 带运行环境, 有裁剪
      - win-x86-single.pubxml   :   适用于 Window , x86 架构 32 位, 带运行环境
      - win-x86.pubxml  :   适用于 Window , x86 架构 32 位
    - launchSettings.json   :   启动设置配置文件
  - **Services**    :   服务相关
    - AnouncementManager.cs :   公告管理器
    - DevicesManager.cs :   设备管理器
    - LoadersManager.cs :   加载器管理器
    - PluginsManager.cs :   插件管理器
    - WebServer.cs  :   网络服务器
  - **ViewModels**  :   视图模型转换
    - **Pages** :   页面
      - **Controls**    :   控件
        - 建设中, 有点多
      - 建设中, 有点多
    - AnouncementsWindowViewModel.cs  :   公告窗口视图转换器
    - MainWindowViewModel.cs    :   主窗口视图转换器
    - ViewModelBase.cs  :   视图转换器基类
  - **Views**   :   视图相关
    - **Pages** :   页面
      - **Controls**    :   控件
        - 建设中, 有点多
      - 建设中, 有点多
    - AnouncementsWindow.axaml + .axaml.cs  :   公告窗口视图
    - MainWindow.axaml + .axaml.cs  :   主窗口视图
  - App.axaml + .axaml.cs   :   应用视图
  - Helper.cs   :   全局帮助类
  - KitX Dashboard.csproj   :   项目文件
  - Program.cs  :   程序入口
  - ViewLocator.cs  :   视图定位器
- **KitX Docs** :   KitX 文档
- **KitX File Format Helper**   :   KitX 文件格式助手
  - **KitX.KXP.Helper** :   .kxp 格式文件编码解码器
- **KitX Installer**    :   KitX 安装包
  - **Installer for Windows**   :   适用于 Windows 平台的 KitX 安装包
    - **KitX Installer for Windows in .NET Framework**  :   使用 .NET Framework 框架的适用于 Windows 平台的安装包
    - **KitX Installer for Windows in Win32**   :   使用 Win32 框架的适用于 Windows 平台的安装包
- **KitX Loaders**  :   KitX 加载器
  - **KitX.Loader.MSVC.Windows**    :   适用于 Windows MSVC 的 C++ 的加载器
  - **KitX.Loader.Winform.Core**    :   适用于 .NET Core Winform 的 C# 的加载器
  - **KitX.Loader.Winform.Framework**   :   适用于 .NET Framework Winform 的 C# 的加载器
  - **KitX.Loader.WPF.Core**    :   适用于 .NET Core WPF 的 C# 的加载器
  - **KitX.Loader.WPF.Framework**   :   适用于 .NET Framework WPF 的 C# 的加载器
- **KitX Official Plugins** :   KitX 官方插件
- **KitX Official Website** :   KitX 官方网站
- **KitX Publish**  :   KitX 发布目录
- **KitX Rules**    :   KitX 规则
  - **KitX.Web.Rules**  :   KitX 网络传输的规则
- **KitX Test** :   KitX 测试项目
- **KitX Tools**    :   KitX 开发工具
- .dockerignore :   docker 容器忽略文件
- .editorconfig :   VS 的编辑器配置文件
- .gitignore    :   git 忽略文件
- .gitlab-ci.yml    :   GitLab 的 CI 配置文件
- branch.descr.py   :   运行后打印每个分支描述的 python 程序
- BUSINESS-LICENSE  :   商业许可证
- ChangeLog.md  :   变更日志(更新日志)
- clear.sh  :   清理脚本
- CODE_OF_CONDUCT.md    :   贡献者契约行为准则
- contributing.md   :   贡献攻略
- Directory.Build.props :   ...
- ErrorCodes.md :   错误代码解释文档
- KitX.sln  :   适用于 VS (或 Rider) 的解决方案文件
- LICENSE   :   AGPLv3.0 开源许可
- nuget.config  :   nuget 配置文件
- push-repos.json   :   推送仓库配置
- README.md :   README
- SECURITY.md   :   安全政策






