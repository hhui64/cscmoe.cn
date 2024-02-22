# 常见问题与解决

这里收集了一些你在游玩过程中可能遇到的问题与相应的解决办法。

如果尚未在这里找到问题，你可以在[QQ 群](https://qm.qq.com/q/2Ly0obalpu)中寻求帮助。

## 安装整合包

### 安装失败 No subject alternative DNS name matching download.mcbbs.net found.

![](/images/troubles-modpack-install-error-1.jpg)

启动器的 mcbbs 镜像源（下载源）故障，要解决此问题请查看[修改下载源](#修改下载源)。

## 启动游戏

### 启动失败 未能下载文件：xxxxxx

![](/images/troubles-start-error-1.jpg)

你的网络可能暂时有问题，请尝试 `清除缓存` 和 `重启光猫及路由器`。

## 进入服务器

### 验证用户名失败

你尚未登录账户，请参阅[开始游玩#登录账户](/guide/getting-started#登录账户)。

### 身份验证服务器可能宕机或正在维护

账户过期或 LittleSkin 网站可能暂时出现故障，请尝试关闭游戏和启动器并重新打开。

## 修改下载源

::: tip
由于 mcbbs 关停，其被大多数第三方 Minecraft 启动器所使用的 `mcbbs下载源` 也随之关停。必须将下载源修改至 `BMCLAPI` 或 `官方`，否则在安装游戏时将会出现下载失败的问题！
:::

### 修改 Hello Minecraft! Launcher 启动器的下载源

在启动器首页点击右下方的 `设置` 按钮。

![](/images/change-download-source-step-1.jpg)

点击右侧的 `下载` 按钮。

![](/images/change-download-source-step-2.jpg)

取消勾选 `自动选择下载源` 选择框。

然后点击 `下载源` 下拉框，找到并修改为 `BMCLAPI` 。

![](/images/change-download-source-step-3.jpg)

修改完成后，重新安装整合包即可。
