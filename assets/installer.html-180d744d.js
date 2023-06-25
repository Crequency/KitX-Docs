import{_ as i,p as e,q as l,a1 as a}from"./framework-a7aa02af.js";const r={},n=a(`<h1 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包" aria-hidden="true">#</a> 安装包</h1><p>KitX Installer 中的安装包项目主要负责 KitX Dashboard 的安装.</p><p>移动端 (KitX Mobile) 的安装将交给分发渠道 (应用市场) 来完成, 故不单独制作安装程序.</p><h2 id="服务器端安装文件存储结构" tabindex="-1"><a class="header-anchor" href="#服务器端安装文件存储结构" aria-hidden="true">#</a> 服务器端安装文件存储结构</h2><p>按照各个编译目标 profile 存储</p><p>常见组合是 平台 + 架构 + 限定选项</p><p>平台包括: win, linux, osx 架构包括: x86, x64, arm, arm64 限定选项有: -single, -cut, -runtime-relied</p><p>组合值例如:</p><ul><li>kitx-win-x86</li><li>kitx-win-x64-single</li><li>kitx-win-x64-single-cut</li><li>kitx-linux-arm-single</li><li>kitx-linux-arm64-single</li><li>kitx-linux-arm64-single-cut</li><li>kitx-osx-arm64-single</li></ul><p>URL 前缀 (设想): https://source.catrol.cn/kitx/dashboard/%version%/%profile%.zip</p><p>其中, <code>%version%</code> 是版本, <code>%profile%</code> 是目标架构</p><p>Installer 在下载时拼接 URL, 并下载 zip 格式安装文件, 下载完成后解压并完成后续安装操作</p><h2 id="服务器端安装包下载与存储" tabindex="-1"><a class="header-anchor" href="#服务器端安装包下载与存储" aria-hidden="true">#</a> 服务器端安装包下载与存储</h2><p>服务器端将对应各个编译目标 profile 存放对应的安装包, 存放格式如下 (设想):</p><p>https://source.catrol.cn/kitx/installer/%version%/%profile%</p><p>其中, <code>%version%</code> 是版本, <code>%profile%</code> 是目标架构</p><p>且将根据 %profile% 的平台决定后缀名是 .exe 还是无后缀名</p><h3 id="q-安装包如何知道自己应该下载哪一个-version-和哪一个-profile" tabindex="-1"><a class="header-anchor" href="#q-安装包如何知道自己应该下载哪一个-version-和哪一个-profile" aria-hidden="true">#</a> Q: 安装包如何知道自己应该下载哪一个 version 和哪一个 profile</h3><p>新的安装包使用 Rust + Egui 的方式编写</p><p>我们在程序内编写了两个常量字符串 version 和 profile 其中, version 和 profile 字符串的长度均为 60 默认值分别为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;$$_!_%Version%_@_$$&lt;spaces&gt;#&quot;
profile: &quot;$$_!_%Profile%_@_$$&lt;spaces&gt;#&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>&lt;spaces&gt;</code> 是补齐长度的空格, 共计 40 个</p><p>程序运行时根据这两个字符串拼接 URL</p><h3 id="q-如何处理使得我们可以通过源安装包生成一系列安装包" tabindex="-1"><a class="header-anchor" href="#q-如何处理使得我们可以通过源安装包生成一系列安装包" aria-hidden="true">#</a> Q: 如何处理使得我们可以通过源安装包生成一系列安装包</h3><p>编译出原版安装包之后, 我们将使用 <code>KitX Installer Patcher</code> 这个工具对安装包进行修补 将 version 和 profile 常量字符串的默认值替换成目标值, 并重命名文件</p><h2 id="安装包在本地的工作流程" tabindex="-1"><a class="header-anchor" href="#安装包在本地的工作流程" aria-hidden="true">#</a> 安装包在本地的工作流程</h2><p>新版安装包使用 Rust + Egui 的方式编写, 天然具有跨平台运行的能力, 且同时支持 GUI 界面安装与 CLI 命令行安装</p><p>共有安装流程:</p><ol><li>创建临时目录</li><li>根据 version, profile, 拼接 URL 并下载安装文件到临时目录</li><li>解压安装文件</li></ol><p>核心安装流程:</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li>获取基础信息 (桌面路径, 开始菜单路径)</li><li>使用 GUI 界面询问基础安装信息</li><li>创建目标路径文件夹</li><li>执行 <code>共有安装流程</code></li><li>移动解压后的安装文件到目标路径文件夹</li><li>更新注册表信息 (如果不是 Portable 安装模式的话)</li><li>创建桌面快捷方式 (如果勾选)</li><li>创建开始菜单快捷方式 (如果勾选)</li><li>复制本程序到 Windows Installer 目录作为卸载程序</li></ol><h3 id="gnu-linux" tabindex="-1"><a class="header-anchor" href="#gnu-linux" aria-hidden="true">#</a> GNU/Linux</h3><p>building ...</p><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h3><p>building ...</p>`,36),o=[n];function s(t,d){return e(),l("div",null,o)}const c=i(r,[["render",s],["__file","installer.html.vue"]]);export{c as default};
