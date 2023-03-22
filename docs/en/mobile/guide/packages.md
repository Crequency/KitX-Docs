---
lang: zh-CN
title: Packages Lists
description: This page lists the Dart Packages used by KitX Mobile
---

<script setup>
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
                // props.v,
                // h("br"),
                h("a", {href: pub_url + props.n}, h("img", {src: icon_url + props.n + "?label=", alt: props.v}))
            ]
        ),
        h('td', props.u),
        h('td', props.m ? props.m : "No not yet"),
    ]
)
</script>

# Packages Lists

## Packages for using

<table style="width: 100%; display: table;">
    <thead>
        <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Use</th>
            <th>Remark</th>
        </tr>
    </thead>
    <tbody>
        <L n="get" v="^4.6.5" u="Better internationalization, route,..." />
        <L n="network_info_plus" v="^3.0.2" u="Get network information" />
        <L n="device_info_plus" v="^8.0.0" u="Get equipment information" />
        <L n="flutter_logs" v="^2.1.7" u="Log" m="Abandon" />
        <L n="sms_receiver" v="^0.4.1" u="SMS receiving" m="Not Enabled" />
        <L n="permission_handler" v="^10.2.0" u="authority management" m="Unused" />
        <L n="mac_address" v="^1.0.0" u="Get the MAC address" m="Do not support iOS platform" />
        <L n="community_material_icon" v="^5.9.55" u="Material Design icon contributed by the community" />
        <L n="flutter_blue_plus" v="^1.4.0" u="Bluetooth support" />
        <L n="sensors_plus" v="^2.0.1" u="Sensor support" />
        <L n="vibration" v="^1.7.6" u="Mobile phone vibration support" m="Unused" />
        <L n="battery_plus" v="^3.0.2" u="Get battery data" m="Not Enabled" />
        <L n="built_value" v="^8.4.3" u="JSON serialization support" />
        <L n="built_collection" v="^5.1.1" u="JSON serialization support" />
        <L n="package_info_plus" v="^3.0.3" u="Get package information" />
        <L n="url_launcher" v="^6.1.10" u="Links such as starting links and other links" />
        <L n="f_logs" v="^2.0.1" u="Log support" />
        <L n="shared_preferences" v="^2.0.18" u="Provide support for Shared Preferences access" />
        <!-- <L n="" v="" u="" /> -->
    </tbody>
</table>

## Packages for development

<table style="width: 100%; display: table;">
    <thead>
        <tr>
            <th>name</th>
            <th>Version</th>
            <th>use</th>
            <th>Remark</th>
        </tr>
    </thead>
    <tbody>
        <L n="build_runner" v="^2.3.3" u="BUILD tool" m="built_value dependencies" />
        <L n="flutter_gen" v="^5.1.0" u="Generation tool" m="Build_runner dependencies" />
        <L n="built_value_generator" v="^8.4.2" u="Generation tool" m="built_value dependencies" />
    </tbody>
</table>
