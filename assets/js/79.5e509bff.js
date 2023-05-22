(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{387:function(t,s,a){"use strict";a.r(s);var v=a(0),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"abstract",fn:function(){return[s("p",[t._v("秋招补录的面试次数比我春招的时候还多，这里考虑到篇幅的限制，还是分成两部分，前面那一篇写网易的，这里写腾讯的")]),t._v(" "),s("p",[t._v("在获得了网易的面试机会后，学院的就业信息发布群里又看到了腾讯云智研发的秋招补录，想着这是最后一次机会了，拼一把试试！抱着这样的心态投递了简历，然后在收到网易一面通过的消息后，又接着收到了腾讯的面试邀请邮件，为了这难得的面试机会，我开始各种复习查缺补漏，希望这次能拿下两家随便一家的 offer 吧！")])]},proxy:!0}])},[s("h2",{attrs:{id:"秋招补录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#秋招补录"}},[t._v("#")]),t._v(" 秋招补录")]),t._v(" "),s("h3",{attrs:{id:"腾讯-csig-一面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯-csig-一面"}},[t._v("#")]),t._v(" 腾讯 CSIG 一面")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("自我介绍")])]),t._v(" "),s("li",[s("p",[t._v("HTML 标签属性中的 src 和 href 有什么区别")]),t._v(" "),s("p",[t._v("这题没答好，当时只说了 HTML 不同标签用的属性不一样，有的用 "),s("code",[t._v("src")]),t._v(" 有的用 "),s("code",[t._v("href")])]),t._v(" "),s("p",[t._v("经面试官提醒，想到了 "),s("code",[t._v("src")]),t._v(" 是能够执行脚本的，用于跨域的 JSONP 就是利用的这一原理")])]),t._v(" "),s("li",[s("p",[t._v("script 标签中 defer 和 async 的区别")]),t._v(" "),s("p",[t._v("这里因为忘了，就说了一个浏览器解析 HTML 构建 DOM 的时候，如果遇到 JS 会阻塞 DOM 的构建，优先加载和执行 JS ，然后使用了 "),s("code",[t._v("defer")]),t._v(" 和 "),s("code",[t._v("async")]),t._v(" 可以避免这一现象")]),t._v(" "),s("p",[t._v("后来面试完自己去百度了下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("async")]),t._v(" ：解析 DOM 和 JS 的加载与执行并行进行，谁先加载完就先执行谁")]),t._v(" "),s("li",[s("code",[t._v("defer")]),t._v(" ：解析 DOM 和 JS 的加载并行进行，但 JS 的执行需要等到 DOM 解析完成，且会按照加载的顺序进行执行")])]),t._v(" "),s("p",[t._v("显然 "),s("code",[t._v("defer")]),t._v(" 更符合最接近我们对于应用脚本加载和执行的要求，而 "),s("code",[t._v("async")]),t._v(" 则适合那些不依赖其他脚本，同时不被其他脚本依赖的内容")])]),t._v(" "),s("li",[s("p",[t._v("Cookie 的作用")]),t._v(" "),s("p",[t._v("因为 HTTP 请求是无状态的，所以需要一种机制让 HTTP 请求能够记住用户的状态，如登录状态等，而 Cookie 就是为此诞生的。 Cookie 中的数据会在每次发送请求的时候带上，并且是有大小限制的")])]),t._v(" "),s("li",[s("p",[t._v("除 Cookie 外，前端有哪几种储存数据的方式")]),t._v(" "),s("p",[t._v("当时回答了 localStorage 和 sessionStorage ，以及在看《JavaScript高级程序设计》时看到的，浏览器是有一个小型数据库的（虽然没用过）")])]),t._v(" "),s("li",[s("p",[t._v("CSS 有哪几种定位")]),t._v(" "),s("p",[t._v("static、relative、absolute、fixed、sticky")])]),t._v(" "),s("li",[s("p",[t._v("ES6 模块与 CommonJS 模块有什么区别")]),t._v(" "),s("p",[t._v("ES6 的模块使用 "),s("code",[t._v("export")]),t._v(" 进行导出， "),s("code",[t._v("import")]),t._v(" 进行导入")]),t._v(" "),s("p",[t._v("CommonJS 也是 NodeJS 所使用的模式，其使用 "),s("code",[t._v("module.exports")]),t._v(" 导出，  "),s("code",[t._v("require()")]),t._v(" 进行导入")])]),t._v(" "),s("li",[s("p",[t._v("HTTP 有哪些方法")]),t._v(" "),s("p",[t._v("GET、POST、PUT、DELETE、HEAD、OPTIONS、TRACE、CONNECT")])]),t._v(" "),s("li",[s("p",[t._v("GET 和 POST 有什么区别")]),t._v(" "),s("p",[t._v("当时是回答的是：")]),t._v(" "),s("ul",[s("li",[t._v("参数的位置不同，GET 请求传输的参数是在 url 上的，而 POST 请求参数是在请求体中")]),t._v(" "),s("li",[t._v("因为上面的原因，所以 POST 会更安全，不会像 GET 那样可以直接在浏览器地址栏里或者历史记录里看到传输的参数，如账号密码等")]),t._v(" "),s("li",[t._v("GET 传输的是简单的数据，POST 可以传递文件等复杂数据")])]),t._v(" "),s("p",[t._v("最后这一点回答错了，他们传输的数据确实有差别，但差别是在于他们的编码类型， GET 只允许 "),s("code",[t._v("ASCII")]),t._v(" 字符，而 POST 则没有这个限制，也可以是二进制数据")])]),t._v(" "),s("li",[s("p",[t._v("PUT 和 POST 都是给服务器发送新增资源，有什么区别")]),t._v(" "),s("p",[t._v("这题不会。。。")])]),t._v(" "),s("li",[s("p",[t._v("DOM 的事件流是什么")]),t._v(" "),s("p",[t._v("事件捕获和事件冒泡，先捕获再冒泡")])]),t._v(" "),s("li",[s("p",[t._v("什么是事件委托")]),t._v(" "),s("p",[t._v("见网易二面")])]),t._v(" "),s("li",[s("p",[t._v("浏览器是如何渲染 UI 的")]),t._v(" "),s("p",[t._v("这题的答案在我的一篇文章 "),s("a",{attrs:{href:"https://juejin.cn/post/7043749406901796878",target:"_blank",rel:"noopener noreferrer"}},[t._v("细说从输入url到页面展示的历程"),s("OutboundLink")],1),t._v(" 里有提及，这里不赘述")])]),t._v(" "),s("li",[s("p",[t._v("bable 的原理是什么")]),t._v(" "),s("p",[t._v("不了解原理。。不过讲了下 bable 的作用")]),t._v(" "),s("p",[t._v("用于编译 JS 文件中属于新规范中的内容，以适用于旧版的浏览器，但其本身不具备这样的能力，需要搭配各种插件来实现")])]),t._v(" "),s("li",[s("p",[t._v("实现一个防抖函数（debounce）")]),t._v(" "),s("p",[t._v("这个我也写过一篇文章 "),s("a",{attrs:{href:"https://juejin.cn/post/7042674659996745764",target:"_blank",rel:"noopener noreferrer"}},[t._v("手写一下防抖与节流"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("computed 和 watch 有什么区别")]),t._v(" "),s("p",[t._v("计算属性 "),s("code",[t._v("computed")]),t._v(" 本质上和 data 中的数据类似，都有一个 "),s("code",[t._v("getter")]),t._v(" 和 "),s("code",[t._v("setter")]),t._v(" 劫持了获取和修改的动作。计算属性能够缓存计算的结果，只有在所依赖的值发生改变才会重新进行计算")]),t._v(" "),s("p",[s("code",[t._v("watch")]),t._v(" 则是监听 data 中数据的变化，当发生改变时执行对应的回调")]),t._v(" "),s("p",[t._v("两者最大的区别在于：计算属性能够缓存计算结果")])]),t._v(" "),s("li",[s("p",[t._v("在你自己的 Vue 项目中你是怎么做优化的")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用 "),s("code",[t._v("webpack-compress-plugin")]),t._v(" 插件开启 gzip 压缩减小编译后文件的体积")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("HappyPack")]),t._v(" 插件开启多进程 Loader 加快构建速度")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("webpack-parallel-uglify-plugin")]),t._v(" 插件增强代码压缩")])])]),t._v(" "),s("p",[t._v("实际上我只用过第一个。。不过其他的知道总得说一下，显得自己懂！")])]),t._v(" "),s("li",[s("p",[t._v("有什么想问的")])])]),t._v(" "),s("p",[t._v("这次面试是我有史以来通过的最快的一次，刚面完准备写面经，就接到了 hr 的电话，通知我面试通过了，而且同一天里，还收到了网易二面通过的消息，双喜临门了属于是")]),t._v(" "),s("h3",{attrs:{id:"腾讯-csig-二面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯-csig-二面"}},[t._v("#")]),t._v(" 腾讯 CSIG 二面")]),t._v(" "),s("p",[t._v("之前 hr 跟我约二面时间的时候，最开始问我七点有空不，我因为不太方便，就问她能不能早一点或者第二天？然后 hr 就换成了八点，但这个时间看起来就不太好的样子，我问了下这个时间面试官方便吗？她回答她去问一下，可以的话发邮件，然后我就收到了面试邀请的邮件，时间是八点")]),t._v(" "),s("p",[t._v("到了面试这天晚上八点，我七点半就进来等了，等到八点半都没人来。。我居然被面试官鸽了，打电话也没人接，估计下班了，等到第二天再打电话看看")]),t._v(" "),s("p",[t._v("第二天 hr 回复我重新安排了，定在 11 号两点半，这一次总算没被鸽了")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("依旧是自我介绍")]),t._v(" "),s("p",[t._v("中途被打断了一下，问我学校在河南，怎么跑到广东珠海去了？我回答当时是西山居来我们学校做宣讲，投了简历面试过了就去了，然后家是福建的，离广东也近")])]),t._v(" "),s("li",[s("p",[t._v("为什么学前端")])]),t._v(" "),s("li",[s("p",[t._v("聊一下你做过的项目吧")]),t._v(" "),s("p",[t._v("面试官让我讲一下在公司做的项目，这里有个需要注意的点：")]),t._v(" "),s("p",[t._v("先讲清楚这个项目是干什么的，再去说这个项目是什么技术栈做的，然后是你在项目中的角色定位")]),t._v(" "),s("p",[t._v("这算是我自己总结的一个步骤")])]),t._v(" "),s("li",[s("p",[t._v("你在项目中做过哪些关于性能优化的问题")]),t._v(" "),s("p",[t._v("由于我在实习的时候对这方面涉及较少，说的是自己的项目。然后在讲的时候也脑抽了，明明自己了解的还挺多的，结果一到面试就只答了没几个，这里稍作记录和补充：")]),t._v(" "),s("ul",[s("li",[t._v("使用 "),s("code",[t._v("Webpack-Compress-Plugin")]),t._v(" 插件开启 gzip 压缩减小文件体积")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("webpack-parallel-uglify-plugin")]),t._v(" 插件减小代码体积")]),t._v(" "),s("li",[t._v("使用 CDN 加速资源文件的获取速度")])]),t._v(" "),s("p",[t._v("以上是我面试时回答的，事后回顾发现自己有好多知道的但没回答出来的：")]),t._v(" "),s("ul",[s("li",[t._v("结合 HTTP 缓存文件")]),t._v(" "),s("li",[t._v("减少使用会导致页面布局发生变化的操作，如增删可见的 DOM 或使用 "),s("code",[t._v("height")]),t._v(" 等属性做动画")]),t._v(" "),s("li",[t._v("对于较为频繁的 DOM 操作，创建一个 "),s("code",[t._v("documentFragment")]),t._v(" ，执行完所有 DOM 操作后再将其添加到文档中")]),t._v(" "),s("li",[t._v("CSS 选择器减少使用标签选择器，如："),s("code",[t._v(".something div")]),t._v(" ，因为标签选择器会导致查找整个页面的所有该标签的元素")]),t._v(" "),s("li",[t._v("使用图片懒加载避免首屏一次性加载过多图片造成请求阻塞")]),t._v(" "),s("li",[t._v("使用事件委托减少事件的绑定，将各种事件的监听移交给父元素处理")]),t._v(" "),s("li",[t._v("使用节流和防抖函数优化交互性能")]),t._v(" "),s("li",[t._v("利用服务端渲染加快首屏加载")])])]),t._v(" "),s("li",[s("p",[t._v("了解缓存吗")]),t._v(" "),s("p",[t._v("阿西吧这题不会，不过又找到一个需要补的地方了，也算是赚到了")])]),t._v(" "),s("li",[s("p",[t._v("说下如何让下面这段代码打印出 123")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fnc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("答案：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fnc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("因为 "),s("code",[t._v("fnc")]),t._v(" 返回的是一个函数，而这个函数接收一个参数 "),s("code",[t._v("b")]),t._v(" ，通过这个 "),s("code",[t._v("b")]),t._v(" 我们可以控制打印的内容")])]),t._v(" "),s("li",[s("p",[t._v("如何判断一个字符串是否为另一个字符串循环移动的结果")]),t._v(" "),s("p",[t._v("面试官让我先和他沟通一下方法可不可行再写代码。这里先设输入的参数为： "),s("code",[t._v("origin, target")]),t._v(" ，思路是：把 "),s("code",[t._v("origin")]),t._v(" 的第一个字符放到它的最后一位，然后和 "),s("code",[t._v("target")]),t._v(" 对比，不同则重复进行上述操作，以字符串的长度为循环的终止条件")]),t._v(" "),s("p",[t._v("上代码：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" copy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" origin\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("copy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" temp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        copy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" copy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" temp\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("等通知")])])]),t._v(" "),s("p",[t._v("这一面短到让我有点吃惊。。然后也是在同一天出了结果，后面三面依然是技术面")]),t._v(" "),s("h3",{attrs:{id:"腾讯-csig-三面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#腾讯-csig-三面"}},[t._v("#")]),t._v(" 腾讯 CSIG 三面")]),t._v(" "),s("p",[t._v("这次面试面试官迟到了半个多小时，害我以为又被鸽了。。。这次面试官迟到有好好说明理由，是因为面试的人太多了，一个接一个的 delay 到我这就晚了好多，突然感觉竞争压力好像还蛮大的")]),t._v(" "),s("ol",[s("li",[t._v("自我介绍下，有做过的什么项目也可以顺带讲讲")]),t._v(" "),s("li",[t._v("为什么选择做前端开发")]),t._v(" "),s("li",[t._v("介绍一下自己在西山居的实习经历")]),t._v(" "),s("li",[t._v("西山居的实习项目跟你在学校自己做项目有哪些不同")]),t._v(" "),s("li",[t._v("实习时身边有没有什么大牛，给你带来什么样的影响")]),t._v(" "),s("li",[t._v("在做项目时遇到过哪些比较有技术含量的困难，是如何解决的")]),t._v(" "),s("li",[t._v("如果让你挑选一个产品做你的搭档，你会有哪些要求")]),t._v(" "),s("li",[t._v("为何选择我们公司的这个岗位，有什么考量吗")]),t._v(" "),s("li",[t._v("聊一下接下来的打算")]),t._v(" "),s("li",[t._v("有什么要问我的吗")])]),t._v(" "),s("p",[t._v("整体面下来感觉面试官很亲和，就像在聊天一样，不过由于面试官的迟到，中间半小时我以为被鸽了就去看会儿视频，然后面试官突然就加进来了，结果本来面试前的状态到这会儿都衰减到接近于 0 ，导致我有些紧张了，项目难点这一块明明我是有准备的，但面试的时候就卡壳了")]),t._v(" "),s("p",[t._v("结果出来了，暂不匹配，唉。感觉有点心灰意冷了，甚至在想要不随便找个公司混两年得了")])])}),[],!1,null,null,null);s.default=_.exports}}]);