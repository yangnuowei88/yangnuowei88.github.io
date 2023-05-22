(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{358:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),s("h2",{attrs:{id:"减少首屏加载时间的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少首屏加载时间的方式"}},[t._v("#")]),t._v(" 减少首屏加载时间的方式")]),t._v(" "),s("ol",[s("li",[t._v("图像格式的选择（GIF 提供的颜色较少，可用在一些对颜色要求不高的地方）")]),t._v(" "),s("li",[t._v("优化 CSS ，如压缩合并 CSS")]),t._v(" "),s("li",[t._v("使用雪碧图，减少 http 请求")]),t._v(" "),s("li",[t._v("启用 GZIP 压缩 css 、 js 文件，可使用 "),s("code",[t._v("CompressionWebpackPlugin")]),t._v(" 插件")]),t._v(" "),s("li",[t._v("图片懒加载")]),t._v(" "),s("li",[t._v("路由懒加载")])]),t._v(" "),s("h2",{attrs:{id:"vue-router-的模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-的模式"}},[t._v("#")]),t._v(" Vue Router 的模式")]),t._v(" "),s("h3",{attrs:{id:"hash-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" hash 模式")]),t._v(" "),s("p",[t._v("通过监听 "),s("code",[t._v("hashchange")]),t._v(" 事件来实现前端路由，利用 url 中的 hash 值来模拟一个 hash ，以保证 url 改变时，页面不会重新加载")]),t._v(" "),s("h3",{attrs:{id:"history-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" history 模式")]),t._v(" "),s("p",[t._v("利用 "),s("code",[t._v("history")]),t._v(" 对象上的 "),s("code",[t._v("pushstate")]),t._v(" 和 "),s("code",[t._v("replacestate")]),t._v(" 方法来替换 url 且不刷新页面，同时可以通过 "),s("code",[t._v("history.state")]),t._v(" 进行路由传参")]),t._v(" "),s("p",[t._v("但该方式有一个致命的缺点，一旦点击浏览器的刷新按钮，就可能会出现 404 ，这是因为通过该方式修改的 url 并没有真实路径，要解决这一问题需要后端配合，将不存在的路径重定向到入口文件")]),t._v(" "),s("h2",{attrs:{id:"虚拟-dom-的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的优缺点"}},[t._v("#")]),t._v(" 虚拟 DOM 的优缺点")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("减少了 DOM 操作，从而减少回流")]),t._v(" "),s("li",[t._v("具备局部更新的能力")]),t._v(" "),s("li",[t._v("保证了性能的下限")])]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 "),s("code",[t._v("innerHTML")]),t._v(" 插入慢")]),t._v(" "),s("h2",{attrs:{id:"讲一讲vue的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讲一讲vue的生命周期"}},[t._v("#")]),t._v(" 讲一讲Vue的生命周期")]),t._v(" "),s("h3",{attrs:{id:"beforecreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),s("p",[t._v("此时刚刚初始化一个空的 Vue 实例对象，在这个对象上只有一些默认的生命周期函数和默认的事件，其他的均未创建")]),t._v(" "),s("h3",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("p",[t._v("创建完 Vue 的实例对象，并完成了 "),s("code",[t._v("data")]),t._v(" 和 "),s("code",[t._v("methods")]),t._v(" 等的初始化")]),t._v(" "),s("h3",{attrs:{id:"beforemount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforemount"}},[t._v("#")]),t._v(" beforeMount")]),t._v(" "),s("p",[t._v("此时已完成模板编译，但还未将编译好的 HTML 挂载到相应位置，只是开始挂载的一个标记")]),t._v(" "),s("h3",{attrs:{id:"mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),s("p",[t._v("完成将编译好的 HTML 替换掉 el 属性所指向的 DOM 元素或替换对应 HTML 标签里面的内容")]),t._v(" "),s("h3",{attrs:{id:"beforeupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate"}},[t._v("#")]),t._v(" beforeUpdate")]),t._v(" "),s("p",[t._v("挂载完毕后会实时监控 data 里面的数据变化，若修改了 data 中的数据，则先触发该钩子函数")]),t._v(" "),s("h3",{attrs:{id:"updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),s("p",[t._v("触发 "),s("code",[t._v("beforeUpdate")]),t._v(" 后会进行虚拟 DOM 重新渲染并更新应用，完成后触发该钩子，此时页面和 data 中的数据已经保持同步")]),t._v(" "),s("h3",{attrs:{id:"beforedestroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy"}},[t._v("#")]),t._v(" beforeDestroy")]),t._v(" "),s("p",[t._v("此时 Vue 实例对象已经从运行阶段进入销毁阶段，组件中的所有 data 、 methods 以及过滤器、指令等，都处于可用状态，还未真正执行销毁过程")]),t._v(" "),s("h3",{attrs:{id:"destroyed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroyed"}},[t._v("#")]),t._v(" destroyed")]),t._v(" "),s("p",[t._v("此时已经完成了 Vue 实例的销毁，组件中的所有 data 、 methods 以及过滤器、指令等，都不可用了")]),t._v(" "),s("h2",{attrs:{id:"watch-和-计算属性有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-计算属性有什么区别"}},[t._v("#")]),t._v(" watch 和 计算属性有什么区别")]),t._v(" "),s("p",[t._v("计算属性，即 "),s("code",[t._v("computed")]),t._v(" 拥有缓存的功能，能够将上一次计算的结果暂时存储起来，后续如果所依赖的值没有发生变化，则返回缓存的数据，若是所依赖值改变了，就会重新进行计算")]),t._v(" "),s("p",[s("code",[t._v("watch")]),t._v(" 的话则是监听已经在 "),s("code",[t._v("data")]),t._v(" 中定义的变量，当变量变化时，则会触发 "),s("code",[t._v("watch")]),t._v(" 中的方法")]),t._v(" "),s("h2",{attrs:{id:"vue-双向绑定原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-双向绑定原理"}},[t._v("#")]),t._v(" Vue 双向绑定原理")]),t._v(" "),s("p",[t._v("Vue 的数据双向绑定是通过 "),s("strong",[t._v("数据劫持")]),t._v(" 结合 "),s("strong",[t._v("发布-订阅模式")]),t._v(" 的方式来实现的，利用了 "),s("code",[t._v("Object.defineProperty()")]),t._v(" 方法，劫持了对象获取属性 "),s("code",[t._v("get")]),t._v(" 和设置属性 "),s("code",[t._v("set")]),t._v(" ，分别在 "),s("code",[t._v("get")]),t._v(" 中进行依赖收集，在 "),s("code",[t._v("set")]),t._v(" 中通知依赖进行更新（调用 "),s("code",[t._v("Watcher")]),t._v(" 上的 "),s("code",[t._v("update")]),t._v(" 方法）")]),t._v(" "),s("p",[t._v("这里贴上部分 Vue 中的源码：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enumerable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configurable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveGetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" val\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依赖收集")]),t._v("\n            dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childOb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                childOb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveSetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" val\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-self-compare */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-enable no-self-compare */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" customSetter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("customSetter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #7981: for accessor properties without setter")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        childOb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("shallow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通知更新")]),t._v("\n        dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br")])]),s("h2",{attrs:{id:"vue-在-created-和-mounted-中请求数据有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-在-created-和-mounted-中请求数据有什么区别"}},[t._v("#")]),t._v(" Vue 在 created 和 mounted 中请求数据有什么区别")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("created")]),t._v(" 阶段时，Vue 的实例已经完成了初始化，可以访问 "),s("code",[t._v("data")]),t._v(" 和 "),s("code",[t._v("props")]),t._v(" 等属性了，所以在这一阶段可以发送请求并修改状态。但是在这个阶段中，由于模板编译还未完成，更不用说 DOM 的渲染了，因此无法访问和操作 DOM")]),t._v(" "),s("p",[t._v("而在 "),s("code",[t._v("mounted")]),t._v(" 阶段时，不仅可以访问 "),s("code",[t._v("data")]),t._v(" 和 "),s("code",[t._v("props")]),t._v(" 等属性，还因为此时已经完成渲染编译出来的 HTML 的工作，是可以访问和操作 DOM 的")])])}),[],!1,null,null,null);s.default=e.exports}}]);