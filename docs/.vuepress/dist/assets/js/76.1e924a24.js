(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{383:function(a,t,v){"use strict";v.r(t);var s=v(0),_=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey},scopedSlots:a._u([{key:"abstract",fn:function(){return[t("p",[a._v("组里的老大给我推荐了《编写可维护的JavaScript》这本书，直接用公司的学习基金在淘宝上原价购买，这还是第一次买书由公司报销哈哈哈")]),a._v(" "),t("p",[a._v("羊毛也不能白薅，看完书得要有些产出，这里就简单整理一下我的阅读笔记吧。不过由于本书出版时间较早，其中有很多内容现在不怎么适用了的，但思想是不分新旧的，书中依然有很多值得借鉴的地方")]),a._v(" "),t("blockquote",[t("p",[a._v("这里主要就是从书中摘出和总结我个人认为目前依然可借鉴的部分")])])]},proxy:!0}])},[t("h1",{attrs:{id:"编程风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程风格"}},[a._v("#")]),a._v(" 编程风格")]),a._v(" "),t("h2",{attrs:{id:"null-和-undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined"}},[a._v("#")]),a._v(" null 和 undefined")]),a._v(" "),t("p",[a._v("null == undefined 返回的结果是 true，但两者用途差别很大")]),a._v(" "),t("p",[a._v("undefined 应该避免被使用，它是用于标识一个变量没有被初始化或没有声明")]),a._v(" "),t("p",[a._v("null 主要用于：")]),a._v(" "),t("ul",[t("li",[a._v("变量可能被赋值为一个对象时，将其赋值为 null 初始化")]),a._v(" "),t("li",[a._v("当函数的参数期望是一个对象时，可传入 nul")]),a._v(" "),t("li",[a._v("当函数的返回值期望是一个对象时，可返回 nul")])]),a._v(" "),t("p",[a._v("不应当用 null 的场景：")]),a._v(" "),t("ul",[t("li",[a._v("检测函数是否传入了某个参数")]),a._v(" "),t("li",[a._v("检测一个未初始化的变量")])]),a._v(" "),t("h2",{attrs:{id:"变量声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[a._v("#")]),a._v(" 变量声明")]),a._v(" "),t("p",[a._v("使用 var 声明变量，或者声明函数时，会被 JavaScript 引擎提升至顶部，导致：")]),a._v(" "),t("ol",[t("li",[a._v("在声明变量的语句之前使用这个变量不会报错，且能获取到这个变量的值为 undefined")]),a._v(" "),t("li",[a._v("函数可以在声明的代码前面使用")])]),a._v(" "),t("p",[a._v("即使是 ES6 的 let、const 也是会有变量提升的，只不过声明前使用会报错，而不是取 undefined 为变量的值")]),a._v(" "),t("h2",{attrs:{id:"严格模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[a._v("#")]),a._v(" 严格模式")]),a._v(" "),t("p",[a._v('不要在全局作用域中使用 "use strict";，这会导致文件中的所有代码都以严格模式运行，特别是在将多个文件合并为一个文件时，若其中一个使用了严格模式，会导致其他所有文件也以严格模式运行，甚至可能会导致意料之外的报错')]),a._v(" "),t("h2",{attrs:{id:"eval-和-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eval-和-function"}},[a._v("#")]),a._v(" eval 和 Function")]),a._v(" "),t("p",[a._v("禁止使用 Function 来用字符串创建函数，并且只在别无他法的时候使用 eval")]),a._v(" "),t("p",[a._v("这两者一般用于一些库当中，平常开发最好不要用，同时严格模式下 eval 是被禁用的")]),a._v(" "),t("h2",{attrs:{id:"原始包装类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始包装类型"}},[a._v("#")]),a._v(" 原始包装类型")]),a._v(" "),t("p",[a._v("原始值类型的变量具有对象行为，可使用 . 符号获取并使用原始包装类型上的属性，这是因为 JavaScript 引擎在使用 . 符号时，创建了一个临时对象，调用完就被销毁了，流程如下：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 此时会创建一个临时的 String 实例")]),a._v("\nname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 使用完毕后销毁这个示例，在下一次使用时再重新创建一个临时实例")]),a._v("\nname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tolowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h1",{attrs:{id:"编程实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程实践"}},[a._v("#")]),a._v(" 编程实践")]),a._v(" "),t("h2",{attrs:{id:"ui-层的松耦合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-层的松耦合"}},[a._v("#")]),a._v(" UI 层的松耦合")]),a._v(" "),t("h3",{attrs:{id:"将-javascript-从-css-中抽离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-javascript-从-css-中抽离"}},[a._v("#")]),a._v(" 将 JavaScript 从 CSS 中抽离")]),a._v(" "),t("p",[a._v("很早以前的浏览器支持在 CSS 中使用 expression 执行 js 代码，会导致错误很难定位，应该避免这样的行为（了解即可，现在没有这用行为了）")]),a._v(" "),t("h3",{attrs:{id:"将-css-从-javascript-中抽离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-css-从-javascript-中抽离"}},[a._v("#")]),a._v(" 将 CSS 从 JavaScript 中抽离")]),a._v(" "),t("p",[a._v("应该避免在 js 中通过直接修改 DOM 的 style 属性来操作样式，最佳方法是：")]),a._v(" "),t("p",[a._v("样式信息都写在 CSS 文件里，js 只是操作 CSS 的 "),t("code",[a._v("className")]),a._v("，如添加、修改、删除 "),t("code",[a._v("className")]),a._v("，让 "),t("code",[a._v("className")]),a._v(" 成为 CSS 和 JavaScript 之间通信的桥梁，这样 CSS 中的样式代码可以随时修改而不需要改动 js 代码")]),a._v(" "),t("h3",{attrs:{id:"将-javascript-从-html-中抽离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-javascript-从-html-中抽离"}},[a._v("#")]),a._v(" 将 JavaScript 从 HTML 中抽离")]),a._v(" "),t("p",[a._v("主要是避免两种写法：")]),a._v(" "),t("ol",[t("li",[a._v("将事件监听直接写在 HTML 中")]),a._v(" "),t("li",[a._v("在 "),t("code",[a._v("<script>")]),a._v(" 标签中写内联的脚本代码")])]),a._v(" "),t("h3",{attrs:{id:"将-html-从-javascript-中抽离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-html-从-javascript-中抽离"}},[a._v("#")]),a._v(" 将 HTML 从 JavaScript 中抽离")]),a._v(" "),t("p",[a._v("在 JS 中使用 HTML 通常是给 "),t("code",[a._v("innerHTML")]),a._v(" 属性赋值一个 HTML 的字符串，有以下缺点：")]),a._v(" "),t("ul",[t("li",[a._v("增加了跟踪文本和结构性问题的复杂度")]),a._v(" "),t("li",[a._v("修改文本或标签时，需要到不止一个地方去修改代码")]),a._v(" "),t("li",[a._v("字符串需要转义")])]),a._v(" "),t("p",[a._v("低耦合的方法：")]),a._v(" "),t("ol",[t("li",[a._v("将模板放在服务器上，通过请求获取 HTML 并注入到页面")]),a._v(" "),t("li",[a._v("使用模板文件或注释，从中提取出模板文本并生成对应 DOM 节点添加至页面")]),a._v(" "),t("li",[a._v("使用诸如 "),t("code",[a._v("Handlebar")]),a._v(" 之类的模板引擎，可以实现复杂的模板")])]),a._v(" "),t("h2",{attrs:{id:"全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[a._v("#")]),a._v(" 全局变量")]),a._v(" "),t("h3",{attrs:{id:"全局变量带来的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局变量带来的问题"}},[a._v("#")]),a._v(" 全局变量带来的问题")]),a._v(" "),t("ol",[t("li",[a._v("容易导致命名冲突")]),a._v(" "),t("li",[a._v("代码脆弱，任何对全局变量的修改都可能导致某处报错")]),a._v(" "),t("li",[a._v("测试时若依赖了全局变量，会导致难以测试，需要为其创建完整的全局环境")])]),a._v(" "),t("h3",{attrs:{id:"避免意外的全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免意外的全局变量"}},[a._v("#")]),a._v(" 避免意外的全局变量")]),a._v(" "),t("p",[a._v("不小心省略了 "),t("code",[a._v("var")]),a._v(" 语句（"),t("code",[a._v("let")]),a._v("、"),t("code",[a._v("const")]),a._v(" 同理）可能在不知情的情况下，添加一个新的全局变量或者修改某个已存在的全局变量，通过 Lint 和 Hint 可以避免")]),a._v(" "),t("h3",{attrs:{id:"单全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单全局变量"}},[a._v("#")]),a._v(" 单全局变量")]),a._v(" "),t("p",[a._v("只创建一个新的全局对象，并将所有功能代码都挂载到这个全局对象上")]),a._v(" "),t("p",[a._v("即使只用一个对象也是需要命名空间的介入。通常会在这个全局对象上创建一个命名空间对象，在这个命名空间里去定义对应的变量")]),a._v(" "),t("h3",{attrs:{id:"零全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#零全局变量"}},[a._v("#")]),a._v(" 零全局变量")]),a._v(" "),t("p",[a._v("使用立即执行的函数调用，并在它的作用域中创建变量，来避免创建全局变量")]),a._v(" "),t("p",[a._v("适用于不被其他地方所依赖的代码")]),a._v(" "),t("h2",{attrs:{id:"事件处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[a._v("#")]),a._v(" 事件处理")]),a._v(" "),t("h3",{attrs:{id:"隔离应用逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隔离应用逻辑"}},[a._v("#")]),a._v(" 隔离应用逻辑")]),a._v(" "),t("p",[a._v("将注册事件的代码和应用逻辑的代码分开，这样同一段功能代码可以被其他事件触发，而不仅局限于他被用来注册的那一事件")]),a._v(" "),t("h3",{attrs:{id:"不要随意分发事件对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不要随意分发事件对象"}},[a._v("#")]),a._v(" 不要随意分发事件对象")]),a._v(" "),t("p",[a._v("不用将 event 对象随意分发，应用逻辑不应该依赖于 event 对象，这样不好写测试代码，因为我们没办法清楚的知道这个方法用到了哪些信息，而不得不为测试代码构建整个 event 对象")]),a._v(" "),t("p",[a._v("最好是只分发有需要的数据，如需要知道鼠标点击在哪个坐标来进行特定操作，就只需要将 "),t("code",[a._v("event.clientX")]),a._v(" 和 "),t("code",[a._v("event.clientY")]),a._v(" 传入方法即可")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("这个思想其实不适用于事件对象，任何函数其实都应该遵循这一规则：只传入函数用到的值")]),a._v(" "),t("p",[a._v("这样做不只是让一个函数更加可控、对开发者更加透明，也使得单元测试更好写")])]),a._v(" "),t("h2",{attrs:{id:"检测数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测数据类型"}},[a._v("#")]),a._v(" 检测数据类型")]),a._v(" "),t("h3",{attrs:{id:"检测原始值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测原始值"}},[a._v("#")]),a._v(" 检测原始值")]),a._v(" "),t("p",[a._v("只需要使用 "),t("code",[a._v("typeof")]),a._v(" 即可")]),a._v(" "),t("h3",{attrs:{id:"检测引用值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测引用值"}},[a._v("#")]),a._v(" 检测引用值")]),a._v(" "),t("p",[a._v("可以用 "),t("code",[a._v("instanceof")]),a._v(" 检测对象是否是某一个构造函数的实例，包括继承了这个类的实例")]),a._v(" "),t("p",[a._v("检测函数最好使用 "),t("code",[a._v("typeof")]),a._v(" ，返回的会是 "),t("code",[a._v("'funciton'")])]),a._v(" "),t("p",[a._v("检测数组可以使用 "),t("code",[a._v("Array.isArray()")]),a._v(" 方法")]),a._v(" "),t("p",[a._v("一个较为通用的方法："),t("code",[a._v("Object.prototype.toString.call(value)")]),a._v(" ，但不适用于自定义对象")])])}),[],!1,null,null,null);t.default=_.exports}}]);