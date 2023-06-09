---
title: 春招-1
postTime: 2021-02-18
categories: 面试
tags: 
- 面试
- 前端
not: true
---



::: slot abstract

秋招补录的腾讯和网易都倒在了三面，春招是我仅剩的机会了，必须要在今年的三四月份确定下来我接下来要去的公司

相较于秋招和秋招补录的时候，只知道 BAT 、网易、美团等等的那么几个大厂，这次的我了解了好多中上游的互联网公司，并且投递了简历，有：多益网络、完美世界、富途、Shopee、微众银行、SHEIN、AfterShip、微策略、北森云计算等等

目前已经有面试机会的有：宇视科技、多益网络、微众银行，已投递简历的公司中最心仪的是：AfterShip、微策略、微众银行，其中微策略是一家外企，工作氛围轻松；AfterShip是一家港资企业， 小而精的感觉，而且也不 996 ；而微众银行是腾讯投资的，主要是因为做的 React Native 开发比较吸引我

:::



## 春招

### 多益网络 一面

多益比较奇怪，第一面居然是先 hr 面，正常来说应该先技术面不是吗？

1. 自我介绍，一般第一点都是先自我介绍，后面的面经里我就不再写自我介绍了
2. 大学专业都学了哪些课程
3. 最擅长的科目
4. 学校是否有开设前端相关的课程
5. 让你学习一个新的知识，你会通过什么方式
6. 聊一聊在学校期间你参与度最高的一个项目
7. 讲一下在西山居的实习经历
8. 为什么离开西山居
9. 选择一个企业你会更注重哪些要素
10. 有女朋友吗
11. 有打算考研吗
12. 能接受996吗
13. 有兄弟姐妹吗
14. 期望的薪资
15. 有什么要问的吗



### 多益网络 二面

这一次的面试是技术面了，面试过程还可以，面试官也很友善，甚至还会和我开玩笑

1. 聊聊项目

   讲了两个项目，一个是西山居实习的项目，一个是课设

2. 项目中遇到的难点

   这里同样讲了两个项目遇到的难点，不过实习的项目比较简单的，就换成博客网站主题的 bug 了，这个我写过一篇文章来讲，这里不再赘述

   课设的难点我当时一下子没想好，就胡乱答了个跨域请求，说是当时刚接触前后端分离开发，不熟悉这个点，而后先后使用了 CORS 和 Nginx 代理。这里重新复盘，应该说自己写组件的那回事，因为 vue3 刚出正式版，没有对应的组件库参考，参照 vue3 官方文档和社区维护的 vue3 版本 element-ui 的源码开发自己的一套组件库

3. 为什么安卓端的请求不需要处理跨域

4. 讲一下使用过的前端框架

5. 几个框架间的区别

6. Vue2 和 Vue3 的比较

7. HTTPS 的优缺点

   优点我答的安全，缺点说实话不是很清楚，回答了会慢一些和麻烦，因为需要额外的去进行两层加密、证书验证，会比较耗时

8. 你知道哪些前端方面的安全问题

   答了 XSS 和 CSRF

9. 用过哪些技术论坛

10. 你对加班是什么看法

11. 有什么想问的吗

感觉面试的还可以啊，过了几天去官网一看居然显示未录用。。。不知道问题出在哪里了



### 宇视科技 一面

这个就是常规的技术面了，不过面试的过程有些。。。让我觉得这家公司的技术应该不是很好，面试都不考察基础技能，全程在问框架使用方面的问题。其实这家是主动来找我的，看他公司规模还挺大，就想先拿来练练手

1. 说一下你对 MVVM 的一个理解
2. 讲讲 Vue 和 React 的区别
3. Vue 和 React 各自的应用场景
4. 都用过哪些组件库
5. 说一下 vue-router

然后就这么结束了。。。说实话，感觉虽然没有从面试中获得太多有用的信息，不过至少让我知道我在框架方面还有一些内容讲得不好的



### 宇视科技 二面

这二面被叫做素质面试，大概就是 HR 面那种，感觉也没什么需要记录的，就略了吧



### 宇视科技 三面

这一面好像是主管面，面试我的面试官看起来年纪很大的样子。。问了我几个问题，然后给我介绍了他们的岗位职责、公司情况，不太符合预期，被我给拒绝了



### AfterShip 一面

这一面说实话刚面完我就慌了，开头几个都问题答不上来。。虽然后面恢复过来了，找回了一点场子，但整体表现我是很不满意的。。希望能过吧

1. 说一下哈希表的哈希算法怎么实现

2. 进程间的通讯有哪些方式

   这个明明我记得在学浏览器运行原理的时候，有看到过一个 IPC 管道，结果就是死活想不起来

3. 数据库的三大范式

   这前三个我是真的直接就被问懵了，脑子一片空白。。。我是真的没想到面试前端的岗位会被问到这些，属于是没认真学好学校的课程被 gank 了

4. redux 的实现原理

   这个明明我之前写过一篇文章总结的啊啊啊！这怎么就忘了

   当时脑子一片空白的我只回答了：一个全局的对象，供所有组件访问状态，只能使用 `reducer` 进行状态的更改

5. typescript中的泛型

   这里脑子还是空白状态。。明明很简单的概念，就是想不起来怎么讲，沉默了好一会

6. 简历上写了对CSS3D和动画有了解，说一下

   这里逐渐缓过来了，前面问到我知识盲区带来的的冲击实在太大了

   这里讲了写过一个可拖拽旋转的、观察者处于内部的天空盒子，讲了浏览器运行原理层面的一个动画性能问题，就是太紧张了，应该讲得不好

7. 在实习期间做的项目

   提到了优化其他实习生代码的事情

8. 你是如何优化其他实习生的代码的

   讲了导出导入 Excel 的问题，用到了一个库，因为不同页面有不同的导出需求，别的实习生是将同一段代码复制过去，然后修修改改来符合需求，这样的代码太过冗余，我就给封装到了 `util` 中，通过传入的第二个参数 `config` 配置对象来控制行为

   同时因为这个库要根据导出类型、后缀等配置项进行对象的创建，于是我使用了享元模式来减少重复对象的创建，享元模式的原理稍微讲了一下

9. 聊一下你自己项目中遇到过的困难

   这是个老生常谈的话题了，讲了自己在 Vuepress 主题开发过程中遇到的 bug ，如何解决，以及提到自己总结了一篇文章来讲这个（百度上找不到满意的答案）

10. 如果你遇到一个网站加载很慢或者卡顿，你会怎么排查问题

    这里回答先看看网络那里，如果是文件较大，会开启 gzip 进行压缩、使用 Webpack 的插件（这里忘记名字很尴尬）删除无用的注释、缩进，开启 CDN 加速

    本来还想说一个浏览器控制台的性能监测工具的，但没来得及就下一个了

11. 讲一下 CDN 的一个实现

    讲的有点乱，出现了漏讲然后跳回漏的地方重讲的情况

12. 缓存有了解吗

    讲了内存缓存、硬盘缓存，和强缓存、协商缓存（Cache-control）

13. 看你简历上写了网络安全，讲一讲

    讲了 SQL 注入、XSS 攻击以及我自己在某网站上的实操（已反馈 bug ）、CSRF 如何攻击，我本以为面试官会问我如何防范 CSRF，好歹这也是我在选修课网络安全上写过前端网络安全的论文的，能讲几句，但全说完了才想起来还有个防范 ，结果居然没问，没问我也没好意思提

14. 接下来会如何进行学习

15. 有什么现在正在进行或者打算写的项目吗

    讲了毕设，React Native 开发的即时通讯软件，实现文字表情聊天、图片传输、视频通话等功能，目前只实现了 API 层的封装和整体架构的搭建，同时也有完成了部分小模块的开发。还提到之前有在 Vue 开发的网页端应用上使用 WebRTC 和 WebSocket  实现过视频通话了，还没有移植过来

    本以为会问我 WebRTC 或者 WebSocket ，又或者是问我 API 层怎么封装的，结果都没问，早知道我就主动讲点了

16. 反问环节

三天后收到了 HR 的二面通知，感觉还蛮意外的，居然过了！下一面的面试官是他们的 CTO ，不知道会问些什么，有点小慌



### AfterShip 二面

面试官很和善，跟一面 “冷漠” 的面试官形成了鲜明的对比，233

1. 上来面试官对自己和公司做了个详细的介绍
2. 



### 微众银行 一面

这一面可以说是完全被吊打。。。只能说不愧是腾讯系的，技术这块真的太强了。面试官甚至安慰了我，让我感觉更委屈了

1. 了解微前端吗

1. 一道原型的题目

   ~~~js
   Function.prototype.__proto__ == ?
   ~~~

2. 程序运行结果题，和 this 有关

   ~~~js
   var f = function() {
       console.log(this.x)
   }
   
   var do = function(fn) {
       fn()
   }
   
   var x = 1
   var obj = {
       x: 2,
       f: f
   }
   
   f()
   obj.f()
   obj.f.call(this)
   f.call(obj)
   do(obj.f)
   ~~~

4. 异步运行顺序题

   ~~~js
   const p1 = () => new Promise(resolve => {
       console.log(1)
       resolve()
   })
   
   const p2 = () => new Promise(resolve => {
       resolve()
       console.log(2)
   }).then(() => {
       console.log(3)
   })
   
   setTimeout(() => {
       console.log(4)
   }, 0)
   
   p1()
   p2()
   console.log(5)
   ~~~

   这题我才刚说完答案，面试官就表示：答案对了，这题很简单也不用讲思路了，直接下一题吧

   我：？？？

4. 实现一个 merge 方法合并对象

   ~~~js
   const obj1 = {a: 1, b: 2, c: 3, d: {a: 1, b: 2}}
   const obj2 = {a: 2, b: {a: 1}, d: {a: 2}}
   
   merge(obj1, obj2)
   // 结果为：{a: 2, b: {a: 1}, c: 3, d: {a: 2, b: 2}}
   ~~~

   这里判断递归的条件没写好，面试官帮我指出来了，同时表示问题不大，后面的题目难度就开始剧增了。。

5. require 和 import 的区别

   回答了用法和出现的时间、使用的限制，比如 require 只能在 node 环境下使用

   面试官追问：还有吗？顺便给了提示。我照着他的提示推测了一下，require 导入的是一个复制，而 import 导入的是一个引用，后来查了下没猜错

6. 如何设计一个SDK用于监控页面加载时间

7. 怎样避免安装的npm包被恶意投毒

   到这心态是有些炸的，面试官还安慰了我，说我基础还可以，就是缺少应用，可以加强一下这方面的学习

8. api 请求超时处理

   这里恢复正常难度了。。说了用 Promise.race

9. 介绍了一下他们的情况

很意外，居然也通过了，上周五面完的，这周一就约了二面



### 微众银行 二面

这一面的面试官居然是在 BOSS 直聘上和我沟通过的那位，还是蛮意外的，面试过程很轻松愉快的感觉，和一面一样，心里再次为这个公司加分~

1. 了解情况，是否考研和为什么不考研
2. 实习期间负责那些工作
3. 
