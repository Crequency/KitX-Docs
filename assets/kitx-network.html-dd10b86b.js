import{_ as r,M as o,p as l,q as d,N as s,R as e,t,V as c}from"./framework-a7aa02af.js";const i={},_=e("h1",{id:"kitx-网络架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kitx-网络架构","aria-hidden":"true"},"#"),t(" KitX 网络架构")],-1),k=e("p",null,"如图所示，KitX 网络由主控、从控和插件组成。",-1),p=e("p",null,"主控从控均为 KitX 客户端，且主从控之间使用 KWC 报文协议进行通信。",-1),u=e("p",null,"客户与插件（主要是 Loader）之间也使用 KWC 报文协议进行通信。",-1),h=e("blockquote",null,[e("p",null,"其中: Dashboard <-> Loaders 之间的通信使用 WebSocket 信道"),e("p",null,"而, Dashboard <-> Dashboard 之间的通信使用 Http 信道")],-1);function m(f,x){const n=o("Mermaid"),a=o("RouterLink");return l(),d("div",null,[_,s(n,{id:"mermaid-3",code:"eJzT1dXlKsksyUm1UvDOLIlQeL534vPdc57N2/ZsXsvT2fu4QPLpRYkFGQohTlwKCo4aT3bsfta3XMFRU8FGV9dOocY73LlGwUnjye4+kLCTJkgRspQzTMpZkwso54Qs56rxrH/Sk93bFJz0DEEaUSTdEJJGIElnZEl3mKQzRCeKpAdCEqgT4SAXDT09PZBqFwjfE43vBeEDAN9/V5E="}),k,p,u,h,e("p",null,[t("详细内容请看"),s(a,{to:"/rules/network/"},{default:c(()=>[t("网络")]),_:1}),t("部分")])])}const T=r(i,[["render",m],["__file","kitx-network.html.vue"]]);export{T as default};