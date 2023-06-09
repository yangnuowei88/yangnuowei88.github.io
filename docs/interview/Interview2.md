---
title: 秋招补录-1
postTime: 2021-12-31
categories: 面试
tags: 
- 面试
- 前端
not: true
---
::: slot abstract

因为在西山居的实习离职得比较晚，算是错过了秋招的高峰期，后面投了几次简历，只有中通和字节面试了，字节发挥不好挂了（其实是菜），中通一路很顺利的来到了 HR 面，没想到却倒在了最后一步。。

没办法的我想着只能好好准备春招了，但在一个偶然的机会，我看到了网易的秋招补录，于是投了一次简历，还有了面试的机会

:::



## 秋招补录

### 百度 一面

在开写这一篇前就已经面完好几天了，题目基本都忘了，因为是突然打电话说要面，所以很多都来不及准备，直接挂了。不过这次面试也让我知道了秋招补录这件事，为此我也是稍微留意了一下其他公司的补录情况。在之后面试官给我发了面试没通过的通知邮件，但邮件上面还说，觉得我的基础还行，但是他们的秋招补录名额很少，要求会比较高，而且我有些题目确实没答好，所以挂了，让我加他微信春招找他内推，感觉应该是还有机会

这里因为时间太久了都忘了，就记几个当时没答好而印象深刻的吧

1. 说一下 vue-router 两个模式的区别

   当时只知道 `hash` 模式会多一个 `#` ， `history` 模式不会，但其实这两个模式的实现可以说是前端路由的关键原理，这里简要概括一下：

   - `hash` 模式是通过监听 `hashchange` 事件来做到监听 url 的改变，同时因为改变的是 url 的 `hash` 值，不会导致页面的刷新

   -  `history` 模式则是通过 `window` 上的 `history` 对象来实现的，通过 `history.pushState` 和 `history.replacestate` 方法来替换 url 且不刷新页面，同时可以通过 `history.state` 进行路由传参。但这个模式最大的缺点在于刷新页面会导致 404 错误，这是因为该 url 并不是真实存在的，可以将路径重定向到入口文件来解决

2. 讲一下 Vue.$nextTick() 的作用和原理

   这里就讲了用处：在页面 DOM 发生改变时，执行回调函数

   原理我就一窍不通了，后来百度了解了一下，又看了一下它的源码，下面是我的一个个人理解：

   为什么要有 `Vue.$nextTick()` ？因为 Vue 的 DOM 更新操作是异步执行的，会在 **同一事件循环中** 的所有数据完成变化之后，再统一进行视图的更新，所以在修改完数据后不能马上体现在 DOM 上，也就是说无法获取改变后的 DOM

    `Vue.$nextTick()` 的实现原理？通过创建异步任务，实现在同一事件循环中的数据变化完成后执行回调，优先创建微任务，如 `Promise.then` 、 `MutationObserver` ，若浏览器不支持再创建宏任务，如 `setImmediate` 、 `setTimeout` ，同时会维护一个回调的数组，等到事件循环到执行微任务的阶段时，执行并清空这个回调数组

3. 一道算法题

   ~~~
   在一个非常大的乱序数组中，所有数字都是不重复的，问如何以最快的时间找到第 n 大的数
   ~~~
   
   这道题在我的每日一题系列中有详解，可以点击 [这里](../daily-question/day-16) 查看，具体是使用了快排的原理，做到不需要全部排序即可获取目标数值

剩下的问题就想不起来了，总结一下就是没有准备，很多基础讲不清楚，给人一种一知半解的感觉，事后需要加强基础复习，至少背一下八股



### 网易有道 一面

今天是 2021 的倒数第二天，月初投的网易秋招补录初筛通过了，约的今天面试，这里记一下

1. 自我介绍

2. Vue 跟 React 哪个用的更多？

   那自然是初恋 Vue 了~

3. 对自己前端三剑客掌握情况的评价

   CSS 和 JS 五五开吧，HTML 论外

   然后面试官就掏出几张图片来，照着图片一张一张的问我问题，我甚至怀疑是所有人都问同一套题目，莫名的觉得这面试官好懒~

4. 实现垂直水平居中

   这里我只回答了用 `flex` 布局，配合 `justify-content: center` 和 `align-items: center` 实现居中，就被面试官打断了，后续本来还打算说说 `position + tranform` 、 `flex + margin: auto` ，面试官就让我详细讲解一下 `flex` 布局

5. flex布局

   问的很细，大概。首先上来先是给我一张图，照着这张图就开始问（面试官也是手画的）

   ![扫描全能王 2022-01-01 20.12](https://upyun.cavalheiro.cn/images/%E6%89%AB%E6%8F%8F%E5%85%A8%E8%83%BD%E7%8E%8B%202022-01-01%2020.12.jpg)

   ① 用 `flex` 实现这个布局，首先 A 是固定高度，B 是固定宽度，C 宽度自适应，三者加起来宽高正好占满整个屏幕

   - 首先为 ABC 套一个父元素，记为 `container` ，设置为 `flex` 布局，同时设置 `flex-direction: column`

   - 为 BC 套一个父元素，记为 `parent` ，也设置为 `flex` 布局

   - 为 A 设置高度，同时 `parent` 添加 `flex: 1` ，使其整体占据 `container` 的剩余空间

   - 为 B 设置宽度，同时 C 添加 `flex: 1` 使其占据 `parent` 的剩余空间

     最开始我回答时没有用到 `container` ，而是设置 `parent` 的高度为 `calc(100vh - A的高度)` ，面试官说应该尽量避免使用减法，问我如何优化？我犹豫了一下，回答了用负值，虽然事后尝试过确实可行，但不知道是不是面试官想要的答案
     
     这里还问了 `flex-direction` ，功能是设置主轴，也就是 `justify-content` 对应的轴

   ② 这个布局就简单了， `align-items: center` 垂直居中，然后 `justify-content: space-between` 就好了

   ③ 上面那题的进阶版，左右两边各有两个元素，且这两个元素的间距和它们与边界的距离比例是 `2:1` （如图）。一个简单的实现方式：把他分成两个 ② ，然后设置一样的宽高

   另一种是左右分开，当时我没答上来，面试官就直接略过了，并给了我个提示让我下去自己看看，说是可以设置间距的比例，但我在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) 上没找到相关的 `flex` 属性，后来仔细一想，好像也可以计算一下设置个 `margin` 来解决

6. 了解移动端适配吗？

   回答只了解一些，如：`@media` 、 `rem` 等。面试官问我自己的项目是怎么去适配不同尺寸的手机，回答多采用 `flex` 布局，对一些需要不同尺寸显示不同样式的，使用 `@media` 。然后面试官问我，在使用 `@media` 时有那么多种屏幕尺寸，我是怎么去设置宽度大小的？这里我的回答是用 Chrome 的开发者工具，开启设备工具栏，直接套用它的尺寸设定，具体如图：

   ![image-20220110084638969](C:\Users\mi\AppData\Roaming\Typora\typora-user-images\image-20220110084638969.png)

7. 分析以下代码的运行结果

   ~~~js
   (function(x, f = function() {return x}) {
       var x
       var y = x
       x = 2
       return [x, y, f()]
   })(1)
   ~~~

   这里我踩坑了，回答的是 `2, undefined, 1` ，但实际上答案应该是 `2, 1, 1` ，这里的坑出现在 `var x` 上： `var` 定义的变量会出现变量提升。JS 的函数形参其实只是为了方便使用而已，这里形参 x 的真实形式是这样的： `var x = arguments[0]` ，因此这段代码其实等价于：

   ~~~js
   var x = 1
   var x
   var y = x
   x = 2
   ~~~

   因为 `var` 的声明会被提升到最上面，所以后面出现的 `var x` 并不会覆盖前面的，值还是 1 ，所以 `y = 1` 

8. 下面这两种给数组添加元素的方式效果一样吗？

   ~~~js
   var arr = [1, 2, 3]
   
   // 方式一
   arr.push(4)
   // 方式二
   arr = [...arr, 4]
   ~~~

   不一样，虽然结果看起来一样，但使用展开符的方式其实是创建了一个新的数组，改变了 `arr` 的指向，已经不是同一个数组了

9. Vue 一般在哪个生命周期里发送请求？

   当时回答的是，我通常在 `created` 和 `mounted` 中发请求，更多的是在 `mounted` 里

10. 在 created 钩子中，能否访问 data 上的值？

   能，因为此时 Vue 实例已经创建，完成数据的初始化了

11. Vue 中在 data 里定义的对象动态添加的属性是否具有响应式？

    答：不具有。因为 Vue2 中的响应式是基于 `Object.defineProperty` 实现的， data 上定义的变量包括对象变量的属性，都是有一个 `getter` 和一个 `setter` 的，然后通过这两者去做依赖收集和发出更新视图的消息。而我们直接使用 `this.obj.a` 这样的形式为对象 `obj` 添加属性时，并没有对应 `getter` 和 `setter` 来实现视图的更新，因此不具有响应性

12. 那有没有办法让动态添加的属性具有响应式？

    这题没答好，稍微标记一下

    从已有的 `obj` 复制出一个新的对象，然后往这个新的对象添加属性，最后将 `obj` 赋值为这个新的对象。可以使用展开操作符： `obj = {...obj, c: 1}` ，或者可以使用 `asign` 方法： `obj = Object.assign({}, obj, {c: 1})` 来复制一个新对象

    还有一种方式是 Vue 提供的，在 Vue 构造函数和实例中都有的方法：`Vue.set(this.obj,'c',1)` 和 `this.$set(this.obj,'c',1)`

13. 在 v-for 生成的列表中，若引用的数组新增了一条数据，那么会重新渲染整个列表吗？

    答：不会。因为虚拟 DOM 的 diff 算法是先比较新旧虚拟 DOM 树的节点是否相同，不同则替换或修改属性，新增则创建并插入新的节点，而这里只是新增，只会多插入一个节点

    面试官又问：那 `key` 在在这一过程中有什么作用？

    这里我的回答勉强算是对一半吧，只是以前看过一点，就随口回答了复用元素节点，查了下，准确来说应该是 **为了更高效的更新虚拟 DOM**

14. 实现按钮每 2 秒只能触发一次点击事件

   看到题目想都没想就答了个可以用 **节流** 来解决，还写了代码，过程也还蛮流畅，然后面试官问我：能不能不用到闭包来实现这个功能？当时是给我问懵了，一下没反应过来。。

   然后面试官居然问我是不是对这道题有提前准备过，差不多是在问我是不是背题了，我当即否定，并说明只是之前学习过节流和防抖，所以看到这道题的第一反应就知道用节流

15. 讲一讲 Promise 的 all 和 race 的作用和不同

16. 有50个请求，同一时间最多发送六个，每有一个请求完成就由下一个请求进行补位，问如何实现

   这道题着实给我整懵逼了，要是六个六个发我还能用 `Promise.all` 来做，这要有一个发完才能进来一个，我是真的不会了。放出题目后，面试官直接说他去外边接杯水，我先自己琢磨着，然后几分钟后才回来，问我想出解决方案了吗？让我怀疑他给我这道题是为了去接水，而不是为了考察我。。。

   最后我给出了一个很呆的方案：维护一个数组，先将前六个请求放进去，用 `Promise.race` 执行，当有一个请求完成时，在 `.then()` 中将对应的请求抛出数组，并向数组放入新的请求，再次执行 `Promise.race` 。这个方法我是实在没办法了才讲的，因为会不停发重复的请求，就特别呆，但我总不能什么都不说吧。。。

17. 有什么想问的

   这里我心态是已经有点炸了，然后我就想着当一次考前测试吧，就当来查缺补漏了，问了一个不太好的问题：请问您看我刚才的表现，有哪些需要提高的？

   这个问题据说会让面试官回顾一下你犯的错，会降低好感度。。但我也不想那么多了，想知道接下来怎么复习，但面试官却跟我说，这个问题他回答不了，因为公司有规定，不可以评价面试者的表现，这就很尴尬了

面试到这里就结束了，当时在面的时候感觉好像都没问什么的样子，结果现在整理一下好像问的还是蛮多的，就是知识面比较窄一些，局限在了 CSS 和 JS 上，也没问一些网络和浏览器运行原理的题目

因为好几题答得不好，甚至有的直接给我干懵了，结果没想到居然过了，第二天就收到了二面预约时间的邮件，让我有种受宠若惊的感觉



### 网易有道 二面

个人感觉面的还行的一次面试，不过也不能说稳了吧，还是蛮危险的，一些题目没答好

1. 老传统，先自我介绍

2. 说一下你看的这几本 JS 的书对你的学习产生了什么样的影响

   这里的是说自己看过《JavaScript高级程序设计》、《你不知道的JavaScript》、《CSS世界》，然后 JS 的书籍自然指的是前两个，我的回答是：

   让我了解了很多之前只是知其然不知其所以然的东西，比如类、继承这一块的，以前刚接触 JS 的时候，就是从 ES6 开始的，所以先接触了 `class` 关键字创建的类和 `extends` 实现的继承。看完这两本书后，对原型这个概念有了深刻的认知，可以说是扩宽了我的认知

3. 讲一下 JS 的原型是什么东西

   原型本质就是一个对象，它的作用是让对象之间进行数据共享，是 JS 中类和继承的关键。每个函数都会有一个原型，通过这个函数创建的对象其内部的 `[[Prototype]]` 指针会指向函数的原型，而原型内部的 `[[Prototype]]` 指针也会指向它的原型，这样就形成了一条 **原型链** 。原型是通过 **委托机制** 来进行数据共享的，当我们访问一个对象的某个属性或方法时，若对象本身没有，则将访问这个属性的请求委托给它的原型，若原型上也没有，则会委托给原型的原型，直到遍历完这条原型链，找到则返回，未找到则返回 `undefined`

4. DOM 事件对象了解吗

   每个事件所产生的事件对象可能会不一样，然后说了下事件对象上常用的属性，如点击事件上的鼠标点击的坐标等

5. 了解事件委托吗

   这里举了很常见的例子：

   一个 `<ul>` 中多个 `<li>` ，为避免性能的损耗，不用给每个 `<li>` 都设置点击事件，只给 `<ul>` 设置点击事件，然后通过 `e.target` 来知道具体点击的是哪一个子元素

6. 已知 A 包含 B ，如何做到点击 A 中除 B 以外的区域才会执行函数 doSomething

   这里我说一个，面试官就问一次还有吗，到最后实在说不出来了。。。

   1. 通过 `e.target` 判断当前点击的是不是 B
   2. 在 B 上设置 CSS 属性 `pointer-events: none` 阻止所有点击事件
   3. 根据点击事件的事件对象来获取鼠标点击的坐标，再通过 B 的 `offsetTop` 和 `offsetLeft` 搭配 B 的 `clientHeight` 和 `clientWidth` 确定 B 所在的区域，若鼠标点击的坐标处于这个区域则不执行

7. 如果又有一个 C 和 B 同级，那么上面的方案需要更改吗

   当时回答的不需要，现在想想又不确定了。。真那么简单他为什么要问？

8. 若 C 包含于 B ，方案 1 还能适用吗

   答：不能。因为只是简单的通过 `e.target` 判断点击的是哪个元素，若点击的是 C ，则不会生效，但 C 是属于 B 的，就会运行出错误的结果

   改写方案：

   使用 DOM API 里的 `B.contains` 方法判断当前点击的节点是否包含于 B

9. 能自己实现一个 contains 方法吗

   直接上代码：

   ~~~js
   function contains(root, node) {
       let current = node
       
       // 当current等于body节点时，表示node不属于root
       while(current !== document.body) {
           // 若当前节点等于root则表示node包含于root
           if(current === root) return true
           
           current = current.parentNode
       }
       
       return false
   }
   ~~~

10. 了解 CSS 的盒模型吗

   主要问了 `box-sizing` 的几个属性，然后看图说下对应的属性值下元素的宽高，这里略

11. 说一下什么是计算属性

    计算属性本质上和 data 中的数据类似，都有一个 `getter` 和 `setter` 劫持了获取和修改的动作。计算属性能够缓存计算的结果，只有在所依赖的值发生改变才会重新进行计算

12. 如果我在计算属性 A 中引用另一个计算属性 B 可以吗

    可以，因为计算属性本质上和 data 中的数据相似

13. 如果一个计算属性引用了 data 中的 a 和 b 的同时，还在里面修改了 c 的值，你认为这有何不妥

    当时回答的是：这样结构混乱，看起来很杂，不好维护。不清楚是否正确

14. 你会如何优化

    这里面试官提示：既然在计算属性里面去修改了 c 的值，那肯定有它的作用，有他的想法

    反应过来了，这应该是为了在 a 或 b 发生变化时同步更新 c 的值，因此可以使用 `watch` 来替代，将更新 c 的职责从中分离出来单独维护，这样就不会显得代码看起来很杂乱

15. 若计算属性 A 和计算属性 B 循环引用，可行吗

    这里脑抽了，居然答了个可以，因为当时想的是有缓存值可以返回缓存的值而不用计算，但是这样写连第一次计算都运行不了哪来的缓存值。访问计算属性的操作本质上就是执行 `getter` 函数， A 的 `getter` 会触发 B 的 `getter` ，然后 B 的 `getter` 又触发 A 的 `getter` ，这样一直死循环肯定会爆栈

16. 有什么想问的

    问了下技术栈，面试通过的话是做什么工作的，后续还有几次面试

这次面试没有一结束马上复盘，可能会有一些题目遗漏。面完这次我突然就信心爆棚了，因为觉得自己发挥的很好，也就计算属性循环引用那边脑子抽了，其他都能很好的回答上来，写代码的部分也写的很从容

面试结果出来了，果然没让我失望，顺利通过二面了，接下来是三面的总监面了，稍许有些紧张



### 网易有道 三面

1. 自我介绍

2. 问在西山居的实习做了什么

3. 问在项目中遇到什么困难

4. 第一道算法题

   ~~~js
   // 给一段字符串和一个数字 n
   // 问如何判断字符串中是否具有一个全为数字的子串长度刚好为n
   
   function getN(str, n) {
       let count = 0
       for(let i = 0; i < str.length; i++) {
           let ch = parseInt(str[i])
           if(isNaN(ch)) {
               if(count === n) return true
               count = 0
           } else {
               count++
               // 这段当时脑抽了没加上去，面试官说这样有问题想了好久才反应过来要这么写
               if(i === str.length - 1 && count === n) {
                   return true
               }
           }
       }
       
       return false
   }
   ~~~

   这个虽然当时刚开始脑抽写错了，但好歹最后改过来了

5. 第二道算法题

   ~~~js
   // 以二元组 (a, b) 的形式表示用户的上线时间和离线时间
   // 给定 n 个二元组，求同一时间最多能有多少个用户在线
   ~~~

   这个就不会做了。。。完全没有思路，在那干瞪眼，想到的方法都是行不通的，耗了好久最后跟面试官说做不出来就下一道题了

6. 一道数学题

   ~~~js
   // 一副扑克牌 54 张，分给 6 个人，每人 9 张
   // 问大小王在同一个人手里的概率
   ~~~

   前面那道题的时候我就已经心态崩了，这里更是崩，概率论的东西已经好久没用过，基本忘光了。事后去百度，找到一个分给三个人的版本，实际上是排列组合的知识点，稍微理解一下后套用到这道题里，最终答案我算出来的是 `8/53`

这次面试给我的感觉很不好，后面这三道做的题目我就会一道，还在最开始的时候写错了，感觉是要凉了，现在只能祈祷腾讯那里能捞一下我了

2022.1.17 唉，三面挂了，不过也还好，毕竟北京我其实不是很想去（吃不到葡萄），嘤嘤嘤
