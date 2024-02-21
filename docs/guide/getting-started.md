# 开始游玩

## 准备游戏环境

::: tip
此章节是为新手准备的，如果你已准备好游戏所需的环境，请跳过此章节并转至[下载并安装游戏](#下载并安装游戏)。
:::

Minecraft: Java Edition 需要 [Java 运行时环境](https://www.oracle.com/java/technologies/downloads/#java17)^[Minecraft: Java Edition 是一款使用 [Java](https://www.java.com) 语言开发的游戏，必须在计算机中安装 [Java 运行时环境](https://www.oracle.com/java/technologies/downloads/#java17)。] 和一个 [Minecraft 启动器](https://zh.minecraft.wiki/w/Minecraft%E5%90%AF%E5%8A%A8%E5%99%A8?variant=zh-cn)^[Minecraft 启动器是一个将 Minecraft 游戏本体启动起来的软件。] 才可以运行。

### 安装 Java (JDK)

::: tip 为什么是 Java 17？
我们服务器的游戏版本为 Minecraft 1.20.1，根据**官方要求**，需要使用 **Java 17 及以上**才可正常运行。
:::

::: warning 警告：选择 Java（JDK） 时的注意事项！
我们并不要求使用某个特定厂商的 JDK，部分厂商的 JDK 可能会带有一定的性能优化（降低 CPU 或内存占用、提高帧率等），你可以选择不同厂商的 JDK。但在选择 JDK 时，需要注意其是否为 HotSpot 虚拟机，如果为非 HotSpot 虚拟机（例如 IBM Semeru 为 OpenJ9 虚拟机）则会与我们服务器发布的整合包中的部分模组产生兼容性问题进而崩溃无法启动游戏！因此，如果你不是非常了解这些的话，那么选择我们推荐的 JDK 就可以了。
:::

我们推荐使用 [Oracle JDK](https://www.oracle.com/java/technologies/downloads/#java17)^[JDK 是“Java Development Kit”的缩写，即“Java 开发人员工具包”。JDK 包含了 JRE（Java Runtime Environment），即“Java 运行时环境”。]^[Oracle JDK 是 Oracle（甲骨文）公司出品的 JDK（Java 开发人员工具包）。]（原因详见上方注意事项）。下面列出了常见操作系统的 Oracle JDK 17 下载链接。

| 操作系统  | JDK 版本 | 下载链接                                                                                                            |
| --------- | :------: | ------------------------------------------------------------------------------------------------------------------- |
| Windows   | 17.0.10  | [Windows x64 MSI Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_windows-x64_bin.msi)            |
| Mac       | 17.0.10  | [macOS x64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-x64_bin.dmg)                |
| Mac ARM   | 17.0.10  | [macOS Arm 64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-aarch64_bin.dmg)         |
| Linux     | 17.0.10  | [Linux x64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz)        |
| Linux ARM | 17.0.10  | [Linux Arm 64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-aarch64_bin.tar.gz) |

下载完成后，打开安装程序，按照安装程序的指示操作即可。

### 下载 Minecraft 启动器

::: tip
我们并不要求使用某个特定的 Minecraft 启动器，通常来说，在市面上选择一个你喜欢的第三方^[除了官方的 [Minecraft Launcher](https://www.minecraft.net/en-us/download) 以外的 Minecraft 启动器均称为“第三方 Minecraft 启动器”。] Minecraft 启动器即可。但需要注意的是，该 Minecraft 启动器必须支持[外置登录](https://github.com/yushijinhun/authlib-injector)^[用于给非正版玩家提供与正版登录流程一致的服务。]以及导入[我的世界中文论坛整合包标准](#)的整合包^[[整合包（Modpack）](https://zh.minecraft.wiki/w/%E5%8A%A0%E8%BD%BD%E5%99%A8Mod?variant=zh-cn#%E6%95%B4%E5%90%88%E5%8C%85)是一个不包含 Minecraft 游戏本体的，将多个[模组（Mod）](https://zh.minecraft.wiki/w/%E5%8A%A0%E8%BD%BD%E5%99%A8Mod?variant=zh-cn)、[资源包（Resource Pack）](https://zh.minecraft.wiki/w/%E8%B5%84%E6%BA%90%E5%8C%85)等文件打包到一起的压缩包，可以是客户端也可以是服务端。]。
:::

我们推荐使用以下第三方 Minecraft 启动器。

|        启动器名称         |    支持的操作系统     |                官方网站                 |
| :-----------------------: | :-------------------: | :-------------------------------------: |
| Hello Minecraft! Launcher | Windows、Linux、macOS | [点击打开](https://hmcl.huangyuhui.net) |
|   Plain Craft Launcher    |        Windows        | [点击打开](https://afdian.net/a/LTCat)  |

## 下载并安装游戏

为了方便玩家游玩，我们服务器制作了相应的整合包以供玩家们使用。只需导入至 Minecraft 启动器即可一键开始游戏，省去了手动安装文件的繁琐步骤。

::: tip
整合包支持自动更新^[该功能一般由第三方 Minecraft 启动器实现，每次更新时只需下载差异部分的文件，而不需要全部重新下载，节省了非常多的时间和流量。]，仅需一次下载安装，后续均可在启动游戏时自动更新。
:::

如果你需要自行制作整合包，请参阅[如何自制整合包](#)。

::: warning
我们强烈建议你使用我们提供的整合包进行游玩，除非你对客户端有深度的定制需求。一但你选择自制整合包，每次在服务器更新时你将不得不手动升级模组文件。
:::

### 下载整合包

请跳转至[整合包](/modpack/)页面下载。

以整合包 v2.2.0 版本为例，下载完成后，你将得到一个文件名为 `cscmoe-modpack-v2.2.0.zip` 的 zip 压缩包。

### 安装整合包

打开 Hello Minecraft! Launcher 启动器，使用鼠标将 `cscmoe-modpack-v2.2.0.zip` 拖入启动器中。

![安装整合包步骤1](/images/modpack-install-step-1.jpg)

点击 `安装` 按钮并等待安装完成。

![安装整合包步骤1](/images/modpack-install-step-2.jpg)
![安装整合包步骤1](/images/modpack-install-step-3.jpg)
![安装整合包步骤1](/images/modpack-install-step-4.jpg)
![安装整合包步骤1](/images/modpack-install-step-5.jpg)

## 登录账户

::: tip
我们服务器使用由 [LittleSkin](https://littleskin.cn/) 提供的外置登录服务登录，这是一个 Minecraft 皮肤站，支持上传自定义皮肤、披风，以及更换其他玩家分享的皮肤、披风。详细的使用方法和教程请阅读[LittleSkin 用户使用手册](https://manual.littlesk.in/)。
:::

服务器需要登录来验证每位玩家的身份，以免他人随意冒充。

在本章节中，我们将使用 [Hello Minecraft! Launcher](https://hmcl.huangyuhui.net) 启动器演示如何登录账户。

### 在 Hello Minecraft! Launcher 启动器中登录

::: tip
在登录之前，请先确保你已在 [LittleSkin](https://littleskin.cn/) 注册了账户。如果尚未注册账户，请先[注册](https://littleskin.cn/auth/register)。
:::

#### 打开启动器，并点击左上角的「账户」

![登录步骤1](/images/hmcl-login-step-1.jpg)

#### 在左侧「添加账户」中选择「LittleSkin」

![登录步骤2](/images/hmcl-login-step-2.jpg)

#### 输入 LittleSkin 的用户名和密码并登录

![登录步骤3](/images/hmcl-login-step-3.jpg)

#### 登录成功后则出现角色

![登录步骤4](/images/hmcl-login-step-4.jpg)

## 开始游戏

::: tip
由于网络原因，在启动游戏时可能会遇到问题，请参阅[常见问题解决](#)。
:::

### 启动 Minecraft

如果一切顺利，那么你可以启动 Minecraft 了！

#### 启动游戏

![启动 Minecraft 步骤1](/images/modpack-start-step-1.jpg)

#### 等待启动

如果此时检测到整合包有更新或是游戏资源不完整，则会自动从服务器下载更新文件以及游戏资源文件。

![启动 Minecraft 步骤2](/images/modpack-start-step-2.jpg)

#### 等待加载

由于模组数量较多，部分配置较低的电脑可能加载时间会比较长，请耐心等待加载完成。

![启动 Minecraft 步骤3](/images/modpack-start-step-3.jpg)

#### 加载完成

出现此界面即表示游戏加载完成！

![启动 Minecraft 步骤4](/images/modpack-start-step-4.jpg)

### 修改游戏语言

初次启动游戏时，游戏语言为英文，我们需要将其改为简体中文。

#### 点击 Language... 按钮

![修改游戏语言步骤1](/images/change-language-step-1.jpg)

#### 选择“简体中文（中国大陆）”

![修改游戏语言步骤2](/images/change-language-step-2.jpg)

#### 点击“继续”

![启动步骤1](/images/start-step-1.jpg)

#### 至此，游戏启动完成！

![启动步骤2](/images/start-step-2.jpg)

### 添加并进入服务器

要游玩服务器，首先要将我们服务器的 IP 地址添加至多人游戏列表中。

#### 添加服务器

点击 `多人游戏` 按钮。

![添加服务器步骤1](/images/add-server-step-1.jpg)

勾选 `不再显示此屏幕` 并点击 `继续` 按钮。

![添加服务器步骤2](/images/add-server-step-2.jpg)

点击右下方的 `添加服务器` 按钮。

![添加服务器步骤3](/images/add-server-step-3.jpg)

输入 `服务器名称` 以及 `服务器地址`，然后点击 `完成` 按钮。

![添加服务器步骤4](/images/add-server-step-4.jpg)

至此，服务器已成功添加。

![添加服务器步骤5](/images/add-server-step-5.jpg)

#### 进入服务器

在服务器列表中双击 `CSCMOE` 服务器。

![加入服务器步骤1](/images/join-server-step-1.jpg)

等待加载。

![加入服务器步骤2](/images/join-server-step-2.jpg)

成功进入服务器。

![加入服务器步骤3](/images/join-server-step-3.jpg)

## 下一步

恭喜！你现在已经可以进行游玩了！现在你可以：

- 调整客户端的各种设置，例如鼠标灵敏度、按键绑定、视频效果、音量大小等等设置，以达到你喜欢的效果。
- 启用整合包中内置的资源包，请参阅[启用整合包内置的资源包](#启用整合包内置的资源包)。

### 启用整合包内置的资源包

::: tip
在初次启动 Minecraft 时，不会启用整合包中内置的资源包，你需要手动启用这些内置的资源包。
:::

为了增加游戏体验，我们在整合包中内置了几种资源包以供玩家们使用，详情如下。

- `CSCMOE-MODPACK-Mod-Language-Patch-1.20.1` 是一个 MOD 汉化补丁资源包，这个资源包补全了部分尚未被汉化的模组内容。

- `Minecraft-Mod-Language-Modpack-Converted-1.20.1` 是由 CFPAOrg 及汉化贡献者制作的多 MOD 汉化补丁资源包。

- `Midnighttiggers-CTM-Default_1.20_V2` 这个资源包添加了玻璃缝的连接纹理和生物群系的边界过渡。

启用这些内置资源包可以更好地体验 Minecraft，手动启用的顺序如图所示：

::: warning
请始终确保 `CSCMOE-MODPACK-Mod-Language-Patch-1.20.1` 资源包位于最顶，否则它将无法生效！
:::

启用完成后，点击下方的 `完成` 按钮即可。

![资源包顺序列表](/images/res-list.jpg)
