---
outline: 2
---

# Java (JDK)

JDK 是“Java Development Kit”的缩写，即“Java 开发人员工具包”。JDK 包含了 JRE（Java Runtime Environment），即“[Java 运行时环境](https://www.oracle.com/java/technologies/downloads/#java17)”。

## 概览

### 为什么需要安装 JDK？

如你所见，Minecraft: Java Edition 是一款使用 [Java](https://www.java.com) 语言开发的游戏，所有使用 Java 语言开发的应用程序都必须在计算机中安装 [Java 运行时环境](https://www.oracle.com/java/technologies/downloads/#java17) 才可以运行。

### 如何选择合适的 JDK？

选择 JDK，首先要注意 Minecraft 的游戏版本，以及考虑你所安装的模组的兼容性问题。

虽然我们并不要求使用某个特定厂商的 JDK，部分厂商的 JDK 可能会带有一定的性能优化（例如降低 CPU 或内存占用、提高帧率等），你可以选择不同厂商的 JDK。

但是，在选择 JDK 时，需要注意其**是否为 HotSpot 虚拟机**^[HotSpot 的正式发布名称为“Java HotSpot Performance Engine”，是 Java 虚拟机的一个实现。]，如果为非 HotSpot 虚拟机（例如 IBM Semeru 为 OpenJ9 虚拟机）则会与我们服务器发布的整合包中的部分模组产生兼容性问题进而崩溃无法启动游戏！因此，如果你对此不太了解，我们建议选择我们推荐的 JDK。

#### Minecraft 的游戏版本与 Java 版本的兼容性：

这里有一份表格，列出了与 Minecraft 游戏版本对应的 Java 版本。

| Minecraft 版本  |   Java 版本    |
| :-------------: | :------------: |
|  1.7.2 及以下   |  Java 7 (1.7)  |
| 1.7.10 ~ 1.16.5 |  Java 8 (1.8)  |
|      1.17       | Java 16 及以上 |
|   1.18 及以上   | Java 17 及以上 |

当然，这仅是官方推荐的，实际情况还需要考虑模组的兼容性问题。

#### 我们推荐的 JDK：

我们推荐使用 [Oracle JDK](https://www.oracle.com/java/technologies/downloads/#java17)^[Oracle JDK 是 Oracle（甲骨文）公司出品的 JDK（Java 开发人员工具包）。]（原因详见上方注意事项）。

## Oracle JDK

Oracle（甲骨文公司）出品的 JDK。

### Java 21

| 操作系统  | JDK 版本 | 下载链接                                                                                                            |
| --------- | :------: | ------------------------------------------------------------------------------------------------------------------- |
| Windows   | 21.0.4  | [Windows x64 MSI Installer](https://download.oracle.com/java/21/archive/jdk-21.0.4_windows-x64_bin.msi)            |
| Mac       | 21.0.4  | [macOS x64 DMG Installer](https://download.oracle.com/java/21/archive/jdk-21.0.4_macos-x64_bin.dmg)                |
| Mac ARM   | 21.0.4  | [macOS Arm 64 DMG Installer](https://download.oracle.com/java/21/archive/jdk-21.0.4_macos-aarch64_bin.dmg)         |
| Linux     | 21.0.4  | [Linux x64 Compressed Archive](https://download.oracle.com/java/21/archive/jdk-21.0.4_linux-x64_bin.tar.gz)        |
| Linux ARM | 21.0.4  | [Linux Arm 64 Compressed Archive](https://download.oracle.com/java/21/archive/jdk-21.0.4_linux-aarch64_bin.tar.gz) |

### Java 17

| 操作系统  | JDK 版本 | 下载链接                                                                                                            |
| --------- | :------: | ------------------------------------------------------------------------------------------------------------------- |
| Windows   | 17.0.12  | [Windows x64 MSI Installer](https://download.oracle.com/java/17/archive/jdk-17.0.12_windows-x64_bin.msi)            |
| Mac       | 17.0.12  | [macOS x64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.12_macos-x64_bin.dmg)                |
| Mac ARM   | 17.0.12  | [macOS Arm 64 DMG Installer](https://download.oracle.com/java/17/archive/jdk-17.0.12_macos-aarch64_bin.dmg)         |
| Linux     | 17.0.12  | [Linux x64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.12_linux-x64_bin.tar.gz)        |
| Linux ARM | 17.0.12  | [Linux Arm 64 Compressed Archive](https://download.oracle.com/java/17/archive/jdk-17.0.12_linux-aarch64_bin.tar.gz) |

### Java 8

_暂无此版本的信息。_

## Microsoft JDK

Microsoft（微软公司）出品的 JDK。

### Java 17

详见 [官方页面](https://learn.microsoft.com/zh-cn/java/openjdk/download#openjdk-17)。

### Java 8

_暂无此版本的信息。_
