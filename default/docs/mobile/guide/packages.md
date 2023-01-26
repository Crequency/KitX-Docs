---
lang: zh-CN
title: Packages 列表
description: 本页列出了 KitX Mobile 所使用的 Dart Packages
---

<script setup>
// 用于生成 Packages 列表
import { h } from 'vue'

var icon_url = "https://shields.io/pub/v/";
var pub_url = "https://pub.flutter-io.cn/packages/";

const L = (props, _) => h(
    'tr',
    [
        h('td', props.n),
        h(
            'td',
            [
                props.v,
                h("br"),
                h("a", {href: pub_url + props.n}, h("img", {src: icon_url+props.n + "?label="}))
            ]
        ),
        h('td', props.u),
        h('td', props.m ? props.m : "暂无"),
    ]
)
</script>

# Packages 列表

## 通用 Packages 列表

<table>
<thead><tr><th>名称</th><th>版本</th><th>用途</th><th>备注</th></tr></thead>
<tbody>
<L n="get" v="^4.6.5" u="更好的国际化, 路由, ..." />
<L n="network_info_plus" v="^1.3.0" u="获取网络信息" m="由于新版 targetSDK 限制, 最高 2.1.4+1" />
<L n="device_info_plus" v="^5.0.1" u="获取设备信息" />
<L n="flutter_logs" v="^2.1.7" u="日志" />
<L n="sms_receiver" v="^0.4.1" u="短信接收" />
<L n="permission_handler" v="^8.1.4+2" u="权限管理" />
<L n="mac_address" v="^1.0.0" u="获取 MAC" />
<L n="community_material_icon" v="^5.9.55" u="由社区贡献的 Material Design 图标" />
<L n="flutter_blue_plus" v="^1.3.1" u="蓝牙支持" />
<L n="sensors_plus" v="^1.2.2" u="传感器支持" />
<L n="vibration" v="^1.7.6" u="手机震动支持" />
<L n="built_value" v="^8.4.2" u="JSON 序列化支持" />
<L n="built_collection" v="^5.1.1" u="JSON 序列化支持" />
</tbody>
</table>

## 开发 Packages 列表

<table>
<thead><tr><th>名称</th><th>版本</th><th>用途</th><th>备注</th></tr></thead>
<tbody>
<L n="build_runner" v="^2.3.3" u="Build 工具" m="built_value 依赖" />
<L n="flutter_gen" v="^5.1.0" u="生成工具" m="build_runner 依赖" />
<L n="built_value_generator" v="^8.4.2" u="生成工具" m="built_value 依赖" />
</tbody>
</table>
