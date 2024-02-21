# 开始游玩

## 准备游戏环境

::: tip
此章节是为新手准备的，如果你已准备好游戏所需的环境，请跳过此章节并转至[下载整合包](#下载整合包)。
:::

Minecraft: Java Edition 需要 Java ^[Java 是一种计算机编程语言，但在此处指运行环境。]^[Minecraft: Java Edition 是一款使用 [Java](https://www.java.com/) 语言开发的游戏，必须在计算机中安装 [Java](https://www.java.com/) 。]和一个 Minecraft 启动器（Launcher）^[指将 Minecraft 游戏本体启动起来的软件。]才可以运行。

### 安装 Java (JDK)

::: tip 为什么是 JDK 17？
我们服务器的游戏版本为 Minecraft 1.20.1，根据**官方要求**，需要使用 **JDK 17 及以上**才可正常运行。
:::

::: warning 警告：选择 JDK 时的注意事项！
我们并不要求使用某个特定厂商的 JDK，其他厂商的 JDK 可能会带有一定的性能优化（降低 CPU 或内存占用、提高帧率等），你可以选择不同厂商的 JDK。但在选择 JDK 时，需要注意其是否为 HotSpot 虚拟机，如果为非 HotSpot 虚拟机（例如 IBM Semeru 为 OpenJ9 虚拟机）则会与我们服务器发布的整合包中的部分模组产生兼容性问题进而崩溃无法启动游戏！因此，选择我们推荐的 Oracle JDK 是最保险的。
:::

我们推荐使用 Oracle JDK（原因详见上方注意事项）。下面列出了常见操作系统的 Oracle JDK 17 下载链接。

| 操作系统 | JDK 版本 | 下载链接                                                                                                 |
| -------- | :------: | -------------------------------------------------------------------------------------------------------- |
| Windows  | 17.0.10  | [Windows x64 MSI Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_windows-x64_bin.msi) |
| Mac | 17.0.10 | [macOS x64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-x64_bin.dmg) |
| Mac ARM | 17.0.10 | [macOS Arm 64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-aarch64_bin.dmg) |
| Linux | 17.0.10 | [Linux x64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz) |
| Linux ARM | 17.0.10 | [Linux Arm 64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-aarch64_bin.tar.gz) |

下载完成后，打开安装程序，按照安装程序的指示操作即可。

### 下载 Minecraft 启动器

::: tip
我们并不要求使用某个特定的 Minecraft 启动器，通常来说，在市面上选择一个你喜欢的第三方^[除了官方的 Minecraft Launcher™ 以外的启动器均称之为“第三方 Minecraft 启动器”。] Minecraft 启动器即可。但需要注意的是，该 Minecraft 启动器必须支持[外置登录](https://github.com/yushijinhun/authlib-injector)^[用于给非正版玩家提供与正版登录流程一致的服务。]以及导入[我的世界中文论坛整合包标准](#)的整合包^[整合包（Modpack）是一个不包含 Minecraft 游戏本体的，将模组（Mod）、资源包（Resource Pack）、光影（Shader）等文件打包到一起的压缩包。]。
:::

我们推荐使用以下第三方 Minecraft 启动器。

|        启动器名称         |    支持的操作系统     |                官方网站                 |
| :-----------------------: | :-------------------: | :-------------------------------------: |
| Hello Minecraft! Launcher | Windows、Linux、macOS | [点击打开](https://hmcl.huangyuhui.net) |
|   Plain Craft Launcher    |        Windows        | [点击打开](https://afdian.net/a/LTCat)  |

## 下载并安装客户端整合包

当然，为了方便玩家游玩，我们服务器也制作了相应的客户端整合包以供玩家们使用。

只需导入至 Minecraft 启动器即可一键开始游戏，省去了手动安装文件的繁琐步骤。

### 下载客户端整合包

### 安装客户端整合包

## 登录账户

::: tip
我们服务器使用由 [LittleSkin](https://littleskin.cn/) 提供的外置登录服务登录，这是一个 Minecraft 皮肤站，支持上传自定义皮肤、披风，以及更换其他玩家分享的皮肤、披风。详细的使用方法和教程请阅读[LittleSkin 用户使用手册](https://manual.littlesk.in/)。
:::

### 在 Hello Minecraft! Launcher 启动器中登录

::: tip
在登录之前，请先确保你已在 [LittleSkin](https://littleskin.cn/) 注册了账号。如果尚未注册账号，请先[注册](https://littleskin.cn/auth/register)。
:::

#### 1.打开启动器，并点击左上角的「账户」

![登录步骤1](/images/hmcl-login-step-1.jpg)

#### 2.在左侧「添加账户」中选择「LittleSkin」

![登录步骤2](/images/hmcl-login-step-2.jpg)

#### 3.输入 LittleSkin 的用户名和密码并登录

![登录步骤3](/images/hmcl-login-step-3.jpg)

#### 4.登录成功后则出现角色

![登录步骤4](/images/hmcl-login-step-4.jpg)

## 启动游戏
