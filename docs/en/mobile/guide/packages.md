---
lang: zh-CN
title: Packages Lists
description: This page lists packages used by KitX Mobile
---

<script setup>
import { h } from 'vue'

var icon_url = "https://shields.io/pub/v/";
var pub_url = "https://pub.flutter-io.cn/packages/";

const L = (props, _) => h(
    'tr',
    [
        h(
            'td',
            [
                h("a", {href: pub_url + props.n}, props.n)
            ]
        ),
        h(
            'td',
            [
                props.v,
                // h("br"),
                // h("a", {href: pub_url + props.n}, h("img", {src: icon_url + props.n + "?label=", alt: props.v}))
            ]
        ),
        h('td', props.u),
    ]
)
</script>

# Packages List

<table style="width: 100%; display: table;">
    <thead>
        <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <!--Warn: Below contents are auto generated, don't touch it !-->
        <!--Begin PackagesTable-->
        <L n="badges" v="^3.1.1" u="A package for creating badges. Badges can be used for an additional marker for any widget, e.g. show a number of items in a shopping cart." />
        <L n="battery_plus" v="^4.0.1" u="Flutter plugin for accessing information about the battery state(full, charging, discharging)." />
        <L n="built_collection" v="^5.1.1" u="Immutable collections based on the SDK collections. Each SDK collection class is split into a new immutable collection class and a corresponding mutable builder class.
" />
        <L n="built_value" v="^8.5.0" u="Value types with builders, Dart classes as enums, and serialization. This library is the runtime dependency.
" />
        <L n="community_material_icon" v="^5.9.55" u="A community material design icon flutter packages based on https://materialdesignicons.com/" />
        <L n="concentric_transition" v="^1.0.3" u="Concentric Transition effect. Useful for onboarding, page transitions etc." />
        <L n="crypto" v="^3.0.3" u="Implementations of SHA, MD5, and HMAC cryptographic functions." />
        <L n="device_info_plus" v="^9.0.2" u="Flutter plugin providing detailed information about the device (make, model, etc.), and Android or iOS version the app is running on." />
        <L n="f_logs" v="^2.0.1" u="FLog provides quick &amp; simple logging solution. All logs are saved to the DB which can then be exported in files." />
        <L n="flutter" v="^3.0.0" u="Visit flutter.io to get started." />
        <L n="flutter_blue_plus" v="^1.12.8" u="Flutter plugin for connecting and communicationg with Bluetooth Low Energy devices, on Android, iOS, and MacOS." />
        <L n="flutter_chat_ui" v="^1.6.9" u="Actively maintained, community-driven chat UI implementation with an optional Firebase BaaS.
" />
        <L n="get" v="^4.6.5" u="Open screens/snackbars/dialogs without context, manage states and inject dependencies easily with GetX." />
        <L n="network_info_plus" v="^4.0.1" u="Flutter plugin for discovering information (e.g. WiFi details) of the network." />
        <L n="package_info_plus" v="^4.0.2" u="Flutter plugin for querying information about the application package, such as CFBundleVersion on iOS or versionCode on Android." />
        <L n="permission_handler" v="^10.4.1" u="Permission plugin for Flutter. This plugin provides a cross-platform (iOS, Android) API to request and check permissions." />
        <L n="sensors_plus" v="^3.0.2" u="Flutter plugin for accessing accelerometer, gyroscope, and magnetometer sensors." />
        <L n="shared_preferences" v="^2.2.0" u="Flutter plugin for reading and writing simple key-value pairs. Wraps NSUserDefaults on iOS and SharedPreferences on Android." />
        <L n="sliding_up_panel" v="^2.0.0+1" u="A draggable Flutter widget that makes implementing a SlidingUpPanel much easier!" />
        <L n="url_launcher" v="^6.1.12" u="Flutter plugin for launching a URL. Supports web, phone, SMS, and email schemes." />
        <L n="vibration" v="^1.8.1" u="A plugin for handling Vibration API on iOS, Android, and web." />
        <!--End PackagesTable-->
    </tbody>
</table>
