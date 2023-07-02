import{_ as l,M as o,p as s,q as n,R as e,t,N as d,V as r,a1 as i}from"./framework-a7aa02af.js";const c={},h=i(`<h1 id="加载器概述" tabindex="-1"><a class="header-anchor" href="#加载器概述" aria-hidden="true">#</a> 加载器概述</h1><p>首先, 我们需要知道加载器在 KitX 中的作用.</p><p>由于我们不可能将多种语言的插件交互逻辑都写入主程序, 于是我们设想, 是否能够通过中间程序负责具体交互, 并统一主程序与中间程序的通讯协议 ?</p><p>于是我们设计了 KitX 的三层架构:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KitX 仪表板 &lt;-&gt; 加载器 &lt;-&gt; 插件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加载器的目的是提供一个标准化的插件接口，方便使用多种编程语言开发 KitX 插件。</p><h2 id="加载器的分类" tabindex="-1"><a class="header-anchor" href="#加载器的分类" aria-hidden="true">#</a> 加载器的分类</h2>`,7),u=e("code",null,"主动加载器",-1),_=e("code",null,"被动加载器",-1),p=e("h2",{id:"加载器的执行流程-包括通信规则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#加载器的执行流程-包括通信规则","aria-hidden":"true"},"#"),t(" 加载器的执行流程 (包括通信规则)")],-1);function m(f,x){const a=o("RouterLink");return s(),n("div",null,[h,e("p",null,[t("加载器主要分为 "),d(a,{to:"/rules/loader/loader/active-loader.html"},{default:r(()=>[u]),_:1}),t(" 和 "),d(a,{to:"/rules/loader/loader/self-loader.html"},{default:r(()=>[_]),_:1})]),p,e("p",null,[d(a,{to:"/rules/loader/loader/process.html"},{default:r(()=>[t("点此查看")]),_:1})])])}const b=l(c,[["render",m],["__file","index.html.vue"]]);export{b as default};
