import{_ as r,M as n,p as a,q as c,R as t,N as o,t as e,a1 as i}from"./framework-a7aa02af.js";const s={},h=i('<h1 id="什么是-kwc" tabindex="-1"><a class="header-anchor" href="#什么是-kwc" aria-hidden="true">#</a> 什么是 KWC</h1><p>KWC 是 KitX Web Command 的缩写, 即 <code>KitX 网络命令系统</code>, 是一种通讯协议, 适用于 KitX 网络中的通讯.</p><h1 id="kwc-协议" tabindex="-1"><a class="header-anchor" href="#kwc-协议" aria-hidden="true">#</a> KWC 协议</h1><p>KWC 是一种通讯规范, 规范了 KitX 网络中的通讯格式, 使得不同的设备可以通过 KWC 协议进行通讯. 本质是 Json 序列化/反序列化文本, 但使用 KitX 网络特定属性.</p><h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2><p>KWC 主要包含两部分:</p><ul><li><a href="#request">Request</a></li><li><a href="#command">Command</a></li></ul><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>Type</td><td>String</td><td>消息类型</td><td>&quot;Command&quot;</td></tr><tr><td>Version</td><td>String</td><td>协议版本</td><td></td></tr><tr><td>Sender</td><td><code>DeviceLocator</code></td><td>发送设备定位器</td><td></td></tr><tr><td>Target</td><td><code>DeviceLocator</code></td><td>目标设备定位器</td><td></td></tr><tr><td>EncryptionInfo</td><td><code>EncryptionInfo</code></td><td>加密信息</td><td></td></tr><tr><td>CompressionInfo</td><td><code>CompressionInfo</code></td><td>压缩信息</td><td></td></tr><tr><td>Content</td><td>String</td><td>内容</td><td></td></tr></tbody></table>',9),l={href:"https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/Device/DeviceLocator.cs",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"DeviceLocator",-1),u={href:"https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/WebCommand/Infos/EncryptionInfo.cs",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"EncryptionInfo",-1),f={href:"https://github.com/Crequency/KitX-Standard/blob/main/KitX.Shared/WebCommand/Infos/CompressionInfo.cs",target:"_blank",rel:"noopener noreferrer"},p=t("code",null,"CompressionInfo",-1),b=t("h3",{id:"command",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#command","aria-hidden":"true"},"#"),e(" Command")],-1);function C(K,k){const d=n("ExternalLinkIcon");return a(),c("div",null,[h,t("ul",null,[t("li",null,[t("a",l,[m,o(d)]),e(" 设备定位器, 用于定位设备, 具体成员列表参见外部链接.")]),t("li",null,[t("a",u,[_,o(d)]),e(" 加密信息")]),t("li",null,[t("a",f,[p,o(d)]),e(" 压缩信息")])]),b])}const I=r(s,[["render",C],["__file","kitx-web-command.html.vue"]]);export{I as default};
