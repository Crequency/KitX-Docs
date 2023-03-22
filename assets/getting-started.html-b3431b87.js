import{_ as r,M as s,p as c,q as u,N as a,V as t,R as e,t as o,a1 as n}from"./framework-a7aa02af.js";const p={},h=n(`<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h1><h2 id="get-source-code" tabindex="-1"><a class="header-anchor" href="#get-source-code" aria-hidden="true">#</a> Get Source Code</h2><h3 id="clone-main-repository" tabindex="-1"><a class="header-anchor" href="#clone-main-repository" aria-hidden="true">#</a> Clone Main Repository</h3><p>KitX Project use Git to manage version, you can get source code by following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:Crequency/KitX.git
<span class="token builtin class-name">cd</span> KitX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you haven&#39;t set SSH key, you can use HTTPS to get source code:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Crequency/KitX.git
<span class="token builtin class-name">cd</span> KitX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="init-submodules" tabindex="-1"><a class="header-anchor" href="#init-submodules" aria-hidden="true">#</a> Init Submodules</h3><blockquote><p>And you can add <code>--recurse-submodules</code> to the command above to get submodules at the same time.</p></blockquote><p>KitX Project use submodules to split the repository, you need to execute following command to init submodules:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then use KitX init tool to select which submodules you want to get:</p>`,13),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[o("./ToolKits/start.sh "),e("span",{class:"token operator"},"<"),o("type"),e("span",{class:"token operator"},">"),o(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-pwsh line-numbers-mode","data-ext":"pwsh"},[e("pre",{class:"language-pwsh"},[e("code",null,`./ToolKits/start.ps1 <type>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=n('<p>You can select value of <code>&lt;type&gt;</code> to get different submodules:</p><p><code>dashboard</code> | <code>mobile</code> | <code>loader</code> | <code>plugin</code> | <code>installer</code> | <code>reference</code></p><p>If you want to develop KitX Dashboard PC Client, please start <code>dashboard</code> and <code>reference</code></p><p>If you want to develop KitX Mobile Client, please start <code>mobile</code></p><p>If you want to develop KitX Loader, please start <code>loader</code></p><p>If you want to develop KitX Plugins, please start <code>loader</code> and <code>plugin</code></p><p>If you want to develop KitX Installer, please start <code>installer</code></p><hr><h2 id="build-project" tabindex="-1"><a class="header-anchor" href="#build-project" aria-hidden="true">#</a> Build Project</h2><h3 id="preparations-before-build" tabindex="-1"><a class="header-anchor" href="#preparations-before-build" aria-hidden="true">#</a> Preparations before build</h3>',10),f={href:"https://dotnet.microsoft.com/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),y=e("code",null,"dotnet --list-sdks",-1),_=n(`<hr><h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> Compile</h3><p>You only need to <code>cd</code> to the project directory (contains <code>.csproj</code> file) you want to compile, and then run the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you run the command <code>dotnet run</code>, the project will be compiled and run automatically</p><details class="hint-container details"><summary>Compile for publish</summary><p>You may notice that there are many files with <code>.pubxml</code> suffix in <code>KitX Dashboard/Properties/PublishProfiles/</code></p><p>These are the publish profiles, you can use the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">&quot;KitX Dashboard&quot;</span>
dotnet publish /p:Profile<span class="token operator">=</span>Properties/PublishProfiles/<span class="token operator">&lt;</span>xxx<span class="token operator">&gt;</span>.pubxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>to publish with these profiles, where <code>&lt;xxx&gt;</code> is the name of the profile file</p><p>The binary file will be generated in <code>KitX Publish/</code></p><p>And you can execute the following command to publish all profiles at once:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">&quot;ToolKits/KitX.ToolKits.Publisher&quot;</span>
dotnet run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><hr><h3 id="other-build-methods" tabindex="-1"><a class="header-anchor" href="#other-build-methods" aria-hidden="true">#</a> Other Build Methods</h3><p>You can also use some IDE to build the project<br> For example:</p><ul><li>Visual Studio (Recommended version: 2019 or above, currently recommended version: 2022)</li><li>Jetbrains Rider</li></ul><p>In Visual Studio, you can right-click the project in the solution explorer, and select <code>Publish</code>, then select the publish profile to publish<br> You can also use similar operations in Rider to publish</p><p>Or, you can also configure your editor to simplify the build process<br> For example:</p><ul><li>Visual Studio Code</li><li>Vim</li></ul><p>Here is the omitted steps to configure the editor, please search for related tutorials yourself</p>`,14);function x(w,k){const i=s("CodeGroupItem"),d=s("CodeGroup"),l=s("ExternalLinkIcon");return c(),u("div",null,[h,a(d,null,{default:t(()=>[a(i,{title:"Bash"},{default:t(()=>[m]),_:1}),a(i,{title:"PowerShell"},{default:t(()=>[b]),_:1})]),_:1}),g,e("ol",null,[e("li",null,[o("You need to install dotnet 6 SDK, please go to "),e("a",f,[o("dotnet official website"),a(l)]),o(" to download and install"),v,o(" The sign of successful installation is: successfully run command "),y,o(" and list dotnet 6 SDK version")])]),_])}const P=r(p,[["render",x],["__file","getting-started.html.vue"]]);export{P as default};