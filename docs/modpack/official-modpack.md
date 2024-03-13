# 官方整合包

## 什么是官方整合包？

官方整合包（CSCMOE MODPACK）是 CSCMOE 出品的，基于 [我的世界中文论坛整合包标准](#) 打包的 Minecraft 整合包。它用于快速地开始游玩 CSCMOE 服务器，省去了手动安装文件的繁琐步骤。只需下载，一键安装，即可开始游玩 CSCMOE 服务器！

同时，官方整合包支持自动更新功能^[自动更新功能目前仅支持 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net) 启动器。]。每当服务器更新时，整合包也会自动更新。

官方整合包还添加了实用的辅助模组，如小地图、物品管理器、一键整理等，也内置了几个常用的光影包以及资源包。

::: tip
官方整合包只是单纯地将模组和其他文件打包到一起，不包含 Minecraft 游戏本体，也没有对 Minecraft 本体进行魔改。它是完全遵守 [Minecraft EULA](https://www.minecraft.net/zh-hans/eula)^[即：MINECRAFT 最终用户许可协议 (“EULA”)。] 协议的，同时官方整合包内附带的模组、资源包、光影包也遵守其对应的分发协议，你可以放心使用。
:::

## 兼容性

官方整合包使用 [我的世界中文论坛整合包标准](#) 打包，只要支持导入该标准的整合包的 Minecraft 启动器都可以安装。

### 自动更新功能的兼容性问题

需要注意的是，如果你需要自动更新功能，你必须使用 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net) 启动器。

由于其他的 Minecraft 启动器不支持该功能，所以在下载时需要注意分发版本。

### 分发版本区别

在分发时，不同的分发版本用来给不同 Minecraft 启动器的用户使用：

- `cscmoe-modpack-v[版本号].zip`：

  带自动更新功能的官方整合包分发版本，仅支持 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net) 启动器导入。

- `cscmoe-modpack-v[版本号]-common.zip`：

  通用的官方整合包分发版本，支持所有能够导入使用 [我的世界中文论坛整合包标准](#) 打包的整合包的 Minecraft 启动器。例如 [Plain Craft Launcher](https://afdian.net/a/LTCat) 启动器等。

  注意：该分发版本的官方整合包**不支持自动更新功能**，如果你需要这个功能，请下载带自动更新功能的官方整合包。

### 操作系统兼容性

理论上，官方整合包支持市面上所有主流的操作系统，只要能将游戏启动起来都可以游玩。

所以问题就变成了：你的 Minecraft 启动器是否支持这些操作系统？（很滑稽吧）

因此，你需要选择一个支持你正在使用的操作系统的 Minecraft 启动器。

## 下载及安装官方整合包

::: info
以下操作步骤均使用 Windows 11 操作系统及 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net) 启动器进行演示。其他操作系统以及启动器的操作步骤大同小异。
:::

### 下载

你可以从 [更新日志](/server-info/changelog) 页面找到对应版本的官方整合包下载链接，也可以在我们的 [QQ 群](#) 的群文件内找到最新版本的官方整合包。

通常来说，选择与服务器最新版本对应的官方整合包下载即可。

以服务器版本 [v3.0.0](/server-info/changelog#v3-0-0) 对应的官方整合包为例，你可以在更新日志的文末找到 [官方整合包下载](/server-info/changelog.html#官方整合包下载) 部分，然后选择一个下载链接下载它。

下载完成后，你将得到一个文件名为 `cscmoe-modpack-v3.0.0.zip` 的 zip 压缩包。

::: warning
你需要注意一下不同的分发版本区别，以免无法导入。详见 [分发版本区别](#分发版本区别)。

最直观的表现就是无法导入到 Minecraft 启动器中，出现诸如“无法识别该整合包！”的提示。
:::

### 安装

打开 Hello Minecraft! Launcher 启动器，使用鼠标将 `cscmoe-modpack-v3.0.0.zip` 拖入启动器中。

![](/images/modpack-install-step-1.jpg)

点击 `安装` 按钮并等待安装完成。

![](/images/modpack-install-step-2.jpg)
![](/images/modpack-install-step-3.jpg)
![](/images/modpack-install-step-4.jpg)

此时，返回启动器首页，在左侧的 `游戏` 一栏出现了 `CSCMOE MODPACK` 即表示整合包安装成功。

![](/images/modpack-install-step-5.jpg)

::: info
在整合包安装过程中，可能会出现诸如“安装失败”等问题，请参阅 [常见问题与解决](/guide/troubles#安装整合包) 以获取解决方案。这将有助于你解决可能出现的安装问题。如果你在安装过程中遇到其他问题，请在 QQ 群内联系我们以获取技术支持。
:::

## 性能优化

### 启用整合包内置的资源包

::: tip
在**初次**启动 Minecraft 时，这些资源包是**默认禁用**的，你需要手动启用这些资源包。
:::

为了完善游戏体验，我们在整合包中内置了一些资源包以供玩家们使用，详情如下：

- `Minecraft-Mod-Language-Modpack-Converted-1.20.1` 是由 CFPAOrg^[一个致力于提供我的世界模组和整合包翻译的团队。] 及汉化贡献者制作的多模组汉化补丁资源包。

- `Midnighttiggers-CTM-Default_1.20_V2` 这个资源包添加了玻璃缝的连接纹理和生物群系的边界过渡。

从左侧的 `可用` 一栏点击需要启用的资源包的图标即可启用。启用完成后，点击下方的 `完成` 按钮即可。

启用这些资源包可以更好地体验 Minecraft，手动启用的顺序如图所示：

![资源包顺序列表](/images/res-list.jpg)

### 视频设置

_正在编写……_

### 光影设置

_正在编写……_
