# 个人博客网站

本博客是由**VuePress**构建的静态网站，同时使用了基于**Vue**，**VueRouter**，**webpack**，**sass**自行开发的一套自定义主题

实现了PC端、手机端、平板电脑的适配



# 启动网站
## 项目来源git@github.com:eddievandeer/eddievandeer.github.io.git
## 我已经将带包后后的工具库给放进来来了，就docs/utils目录
## build 后生成的文件在.vuepress下的dist 下，我自己拷贝到下面去了
##### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 需要 6.0 以上版本

~~~bash
# 安装依赖
npm install

# 开发模式下启动项目
npm run docs:dev

# 打包项目，生成静态文件
npm run docs:build

# 使用deploy.sh中的脚本发布网站
npm run deploy
~~~

