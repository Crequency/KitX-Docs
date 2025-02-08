import{_ as r,c as d,a as i,b as t,e as o,d as c,w as s,r as m,o as l}from"./app-DZLWD7CX.js";const n={};function u(h,e){const a=m("RouteLink");return l(),d("div",null,[e[5]||(e[5]=i('<p>首先, 我们需要知道加载器在 KitX 中的作用.</p><p>由于我们不可能将多种语言的插件交互逻辑都写入主程序, 于是我们设想, 是否能够通过中间程序负责具体交互, 并统一主程序与中间程序的通讯协议 ?</p><p>于是我们设计了 KitX 的三层架构:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>KitX 仪表板 &lt;-&gt; 加载器 &lt;-&gt; 插件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>加载器的目的是提供一个标准化的插件接口，方便使用多种编程语言开发 KitX 插件。</p><h2 id="加载器的分类" tabindex="-1"><a class="header-anchor" href="#加载器的分类"><span>加载器的分类</span></a></h2>',6)),t("p",null,[e[2]||(e[2]=o("加载器主要分为 ")),c(a,{to:"/en/rules/loader/active-loader.html"},{default:s(()=>e[0]||(e[0]=[t("code",null,"主动加载器",-1)])),_:1}),e[3]||(e[3]=o(" 和 ")),c(a,{to:"/en/rules/loader/self-loader.html"},{default:s(()=>e[1]||(e[1]=[t("code",null,"被动加载器",-1)])),_:1})]),e[6]||(e[6]=t("h2",{id:"加载器的执行流程-包括通信规则",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#加载器的执行流程-包括通信规则"},[t("span",null,"加载器的执行流程 (包括通信规则)")])],-1)),t("p",null,[c(a,{to:"/en/rules/loader/process.html"},{default:s(()=>e[4]||(e[4]=[o("点此查看")])),_:1})])])}const b=r(n,[["render",u],["__file","index.html.vue"]]),f=JSON.parse(`{"path":"/en/rules/loader/","title":"加载器概述","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"加载器概述","description":"关于 KitX Project 中加载器的导读与概述","createTime":"2023/07/27 00:25:50","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://kitx.docs.catrol.cn/en/rules/loader/"}],["meta",{"property":"og:url","content":"https://kitx.docs.catrol.cn/en/rules/loader/"}],["meta",{"property":"og:site_name","content":"KitX Docs"}],["meta",{"property":"og:title","content":"加载器概述"}],["meta",{"property":"og:description","content":"关于 KitX Project 中加载器的导读与概述"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-07T05:38:37.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-07T05:38:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加载器概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-07T05:38:37.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.73,"words":218},"git":{"updatedTime":1738906717000,"contributors":[{"name":"调皮豆干","username":"调皮豆干","email":"catrol@qq.com","commits":8,"avatar":"https://avatars.githubusercontent.com/调皮豆干?v=4","url":"https://github.com/调皮豆干"},{"name":"ChenPi11","username":"ChenPi11","email":"wushengwuxi-msctinoulk@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ChenPi11?v=4","url":"https://github.com/ChenPi11"},{"name":"Dynesshely","username":"Dynesshely","email":"catrol@qq.com","commits":4,"avatar":"https://avatars.githubusercontent.com/Dynesshely?v=4","url":"https://github.com/Dynesshely"}],"changelog":[{"hash":"6049d6b9c83cde321810b477bce4cdaa412532f7","date":1687327132000,"email":"catrol@qq.com","author":"调皮豆干","message":"📄 Docs(Rules): Updated <code v-pre>loader.md</code>.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/6049d6b9c83cde321810b477bce4cdaa412532f7","tag":"v23.06.21.1","tagUrl":"https://github.com/Crequency/KitX-Docs//releases/tag/v23.06.21.1"},{"hash":"d036b9b7f216e11314ac19ea65c5fc9163565c92","date":1687329358000,"email":"catrol@qq.com","author":"调皮豆干","message":"🎇 Style(Rules): Updated <code v-pre>loader.md</code> for style.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/d036b9b7f216e11314ac19ea65c5fc9163565c92","tag":"v23.06.21.2","tagUrl":"https://github.com/Crequency/KitX-Docs//releases/tag/v23.06.21.2"},{"hash":"fde371e599b50fe2d1fdd2eff0fe5c980c26341b","date":1687336723000,"email":"catrol@qq.com","author":"调皮豆干","message":"📄 Docs(Rules): Updated <code v-pre>loader.md</code> for some guides.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/fde371e599b50fe2d1fdd2eff0fe5c980c26341b","tag":"v23.06.21.3","tagUrl":"https://github.com/Crequency/KitX-Docs//releases/tag/v23.06.21.3"},{"hash":"3d2ab1ba12df8d7332751e6434b62a2c3cd5c1ee","date":1687512315000,"email":"catrol@qq.com","author":"调皮豆干","message":"📄 Docs(Rules): Of <code v-pre>installer.md</code>, wrote part.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/3d2ab1ba12df8d7332751e6434b62a2c3cd5c1ee","tag":"v23.06.23.0","tagUrl":"https://github.com/Crequency/KitX-Docs//releases/tag/v23.06.23.0"},{"hash":"fa5ef91cf9010ef679f6a8229a75bfe4fdda1e9f","date":1688046109000,"email":"wushengwuxi-msctinoulk@outlook.com","author":"ChenPi11","message":"📄 📦 Docs, Struct(docs/rules): Improved Loader's documentation. \\t修改：     docs/.vuepress/configs/sidebar/zh.ts \\t删除：     docs/rules/loader.md \\t新文件：   docs/rules/loader/README.md \\t新文件：   docs/rules/loader/active_loader/README.md \\t新文件：   docs/rules/loader/rule.md \\t新文件：   docs/rules/loader/self_loader/README.md","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/fa5ef91cf9010ef679f6a8229a75bfe4fdda1e9f"},{"hash":"7f7553ceec2065d23f546eb24aa2747b2a30df1c","date":1688054254000,"email":"catrol@qq.com","author":"调皮豆干","message":"📦 Struct(Rules): Adjust.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/7f7553ceec2065d23f546eb24aa2747b2a30df1c"},{"hash":"1c3d865718bbc99044c24e05d44525b39984a007","date":1688111148000,"email":"catrol@qq.com","author":"调皮豆干","message":"📦 Struct(Loaders): Adjust.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/1c3d865718bbc99044c24e05d44525b39984a007"},{"hash":"34273641d53704a25ccde4ec0dece5d35cb74b02","date":1688294383000,"email":"catrol@qq.com","author":"调皮豆干","message":"📄 Docs(Rules): Fixed titles.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/34273641d53704a25ccde4ec0dece5d35cb74b02"},{"hash":"346e34ad5993b739116f42a2efc2975de2242034","date":1688531225000,"email":"catrol@qq.com","author":"调皮豆干","message":"📄 🔧 Docs, Fix(Loader): Fixed a link.","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/346e34ad5993b739116f42a2efc2975de2242034","tag":"v23.07.05.0","tagUrl":"https://github.com/Crequency/KitX-Docs//releases/tag/v23.07.05.0"},{"hash":"057024f141b705641af512e72678a8281448a4fd","date":1737775975000,"email":"catrol@qq.com","author":"Dynesshely","message":"📦 Struct: Move to <code v-pre>notes</code> folder to match theme's requirements","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/057024f141b705641af512e72678a8281448a4fd"},{"hash":"ea653ca4bff29fe24e77077471595fce7fdb672f","date":1737777012000,"email":"catrol@qq.com","author":"Dynesshely","message":"📝 Chore: Remove hard-coded permalink","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/ea653ca4bff29fe24e77077471595fce7fdb672f"},{"hash":"bd0ec611249aa8e8b3c6079818362214bf33adbf","date":1737778471000,"email":"catrol@qq.com","author":"Dynesshely","message":"💾 Feat(Plume-Theme): Migrated","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/bd0ec611249aa8e8b3c6079818362214bf33adbf"},{"hash":"d0f0a20342aeb93dbb1b4b64f3ec7b7178ee6c71","date":1738906717000,"email":"catrol@qq.com","author":"Dynesshely","message":"💾 Feat(Plume-Theme): Configured sidebar and locales settings","commitUrl":"https://github.com/Crequency/KitX-Docs//commit/d0f0a20342aeb93dbb1b4b64f3ec7b7178ee6c71"}]},"filePathRelative":"en/rules/loader/README.md","categoryList":[{"id":"a4f86f","sort":10000,"name":"rules"},{"id":"223e80","sort":10001,"name":"loader"}]}`);export{b as comp,f as data};
