## WeChat Web Devtools
WeChat Web Devtools 是微信开发者工具的 Linux 的移植版本，希望在官方正式发布 Linux 版本前为广大开发者提供方便。

## 微信开发者工具
微信开发者工具是腾讯官方推出的开发者工具，集成了开发调试、代码编辑及程序发布等功能，让开发者简单的开发和调试小程序和微信网页开发。

## 可选依赖
Wine -- 被微信小程序调试器 wcc.exe 和 wcsc.exe 依赖

## 下载和安装

<b>欢迎有能力或者感兴趣的朋友们对更多的发行版进行打包</b>

### Arch Linux
<a href="https://aur.archlinux.org/packages/wechat-web-devtools-git/" target="_blank">https://aur.archlinux.org/packages/wechat-web-devtools-git/</a>    

#### <a href="https://wiki.archlinux.org/index.php/Multilib_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)" target="_blank">启用 Multilib</a>     
#### 安装 yaourt 或 pacaur    
#### 安装 wechat-web-devtools-git    
```  
$ yaourt/pacaur -S wechat-web-devtools-git
```  

### Other Distro

#### 从 Realse 页下载最新版本源码
<a target="_blank" href="https://github.com/BruceZhang1993/wechat_web_devtools/releases/latest">前往 Lastest Release</a>

#### 解压缩源码包

#### 一键安装
```
cd /path/to/wechat_web_devtools
./install.sh <install_path>
```
执行 `./install.sh` 命令时请不要使用 root 用户或 sudo 提权
`<install_path>` 为安装路径，默认为 `/opt/tencent` 

#### 桌面快捷启动图标
```
cp /opt/tencent/wechat_web_devtools/wechat_web_devtools.desktop $HOME/.local/share/applications/
```

#### 终端启动
```
sudo ln -s /opt/tencent/wechat_web_devtools/nw /usr/bin/wechat_web_devtools
wechat_web_devtools &
```

## Contributors  
<a href="https://github.com/BruceZhang1993/wechat_web_devtools/graphs/contributors">Contributors</a>

## 免责声明
微信开发者工具源代码及图标素材归属腾讯公司所有，具体使用协议和授权请访问腾讯开发者平台。
WeChat Web Devtools 项目中的其他源代码采用 MIT License 开源授权。

## License
Copyright 2017 BruceZhang1993

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

