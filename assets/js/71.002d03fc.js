(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{381:function(_,v,r){"use strict";r.r(v);var t=r(0),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey},scopedSlots:_._u([{key:"abstract",fn:function(){return[v("blockquote",[v("p",[_._v("说一说从浏览器地址栏输入 url 按下回车，到页面完整的展示出来，都经历了哪些步骤？")])]),_._v(" "),v("p",[_._v("这个问题可谓是面试题里的常客，我自己在面试的时候都碰见过好几次。由于它属于开放式的题目，可以有很多种回答，但要如何答出让面试官觉得你很有水平的答案是一个很大的难题")]),_._v(" "),v("p",[_._v("仔细想想，这么一个看起来好像很简单的一个过程，其实涉及了非常多的知识点，可以说是非常适合考验一个 Web 工程师的综合水平。简单总结下，涉及的知识点大致有如下几种：")]),_._v(" "),v("ul",[v("li",[_._v("DNS 解析")]),_._v(" "),v("li",[_._v("TCP 连接")]),_._v(" "),v("li",[_._v("HTTP 请求")]),_._v(" "),v("li",[_._v("浏览器运行原理")])])]},proxy:!0}])},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),v("blockquote",[v("p",[_._v("说一说从浏览器地址栏输入 url 按下回车，到页面完整的展示出来，都经历了哪些步骤？")])]),_._v(" "),v("p",[_._v("这个问题可谓是面试题里的常客，我自己在面试的时候都碰见过好几次。由于它属于开放式的题目，可以有很多种回答，但要如何答出让面试官觉得你很有水平的答案是一个很大的难题")]),_._v(" "),v("p",[_._v("仔细想想，这么一个看起来好像很简单的一个过程，其实涉及了非常多的知识点，可以说是非常适合考验一个 Web 工程师的综合水平、简单总结下，涉及的知识点大致有如下几种：")]),_._v(" "),v("ul",[v("li",[_._v("DNS 解析")]),_._v(" "),v("li",[_._v("TCP 连接/断开")]),_._v(" "),v("li",[_._v("HTTP 请求")]),_._v(" "),v("li",[_._v("浏览器运行原理")])]),_._v(" "),v("p",[_._v("在这里我对自己心目中的 “满分” 答案稍微进行了一下总结，不一定全面，欢迎补充")]),_._v(" "),v("h2",{attrs:{id:"dns-解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[_._v("#")]),_._v(" DNS 解析")]),_._v(" "),v("p",[_._v("当我们在浏览器的地址栏里输入 url 时，浏览器进程的 "),v("strong",[_._v("UI线程")]),_._v(" 会捕捉用户的输入内容，如果输入的是一个网址，那么 "),v("strong",[_._v("UI线程")]),_._v(" 会启动一个 "),v("strong",[_._v("网络线程")]),_._v(" 请求 DNS 来进行域名解析获取 IP 地址")]),_._v(" "),v("p",[_._v("需要域名解析这一步是因为：域名只是用于方便人们记忆的，但计算机它不认识啊，它只认 “202.96.134.133” 之类的 IP 地址")]),_._v(" "),v("p",[_._v("解析的过程其实也并不是直接就向 DNS 服务器发起请求，按优先级大致分为如下五种情况：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("浏览器缓存")]),_._v(" ：浏览器会按照一定的频率缓存 DNS 记录，因此浏览器优先查找自身缓存")]),_._v(" "),v("li",[v("strong",[_._v("操作系统缓存")]),_._v(" ：若浏览器缓存中没有目标 DNS 的记录 ( 称为没有命中 ) ，则查找操作系统中的缓存。在本地的 "),v("strong",[_._v("hosts")]),_._v(" 文件中可以指定域名及其对应的ip地址，浏览器会首先使用这个ip地址")]),_._v(" "),v("li",[v("strong",[_._v("路由器缓存")]),_._v(" ：在路由器也会有 DNS 的缓存")]),_._v(" "),v("li",[v("strong",[_._v("本地域名服务器 (LDNS)")]),_._v(" ：上述几种情况都未命中，才会真正发起请求，这个请求的目标被称为 "),v("strong",[_._v("LDNS")]),_._v(" ，一般是一台距离你不远、性能很好、会缓存域名解析结果的服务器，到这一步就能完成 80% 左右的域名解析了")]),_._v(" "),v("li",[v("strong",[_._v("根域名服务器")]),_._v(" ：如果 LDNS 都没有命中的话，就会比较麻烦了\n"),v("ul",[v("li",[_._v("首先直接跳到 "),v("strong",[_._v("Root Server")]),_._v(" 根域名服务器请求解析，返回给 LDNS 一个所查询域的主域名服务器 ( "),v("strong",[_._v("gTLD Server")]),_._v(" ，国际顶尖域名服务器，如 .com .cn .org 等 ) 的地址")]),_._v(" "),v("li",[_._v("LDNS 向上一步返回的 gTLD 再次发送请求，接受请求的 gTLD 查找并返回这个域名对应的 Name Server 的地址，这个 Name Server 就是网站注册的域名服务器")]),_._v(" "),v("li",[_._v("Name Server 根据映射关系表找到目标 ip ，返回给 LDNS")]),_._v(" "),v("li",[_._v("LDNS 缓存这个域名和对应的 ip ，并把解析结果返回给用户，用户通过 TLL 值缓存至本地")])])])]),_._v(" "),v("h2",{attrs:{id:"tcp连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[_._v("#")]),_._v(" TCP连接")]),_._v(" "),v("p",[_._v("获得了服务器的 IP 地址后，就可以向其发起请求获取页面信息了")]),_._v(" "),v("p",[_._v("由于 HTTP 是建立在 TCP 之上的，需要先建立起 TCP 连接。建立 TCP 需要经历 "),v("strong",[_._v("三次握手")]),_._v(" ，对此我个人的理解是：")]),_._v(" "),v("blockquote",[v("p",[_._v("三次握手的目的是确认客户端和服务端各自都有接收和发送消息的能力并建立连接")])]),_._v(" "),v("p",[_._v("三次握手的过程按照我上面的理解，分别是：")]),_._v(" "),v("ul",[v("li",[_._v("客户端向服务器发送一个带 "),v("code",[_._v("SYN")]),_._v(" 标志的消息，让服务器知道该客户端具有发送消息的能力")]),_._v(" "),v("li",[_._v("服务器收到客户端消息，向客户端发送一个带有 "),v("code",[_._v("SYN/ACK")]),_._v(" 标志的消息，让客户端知道服务器具有接收和发送消息的能力")]),_._v(" "),v("li",[_._v("客户端收到服务器端，再传回服务器一个带有 "),v("code",[_._v("ACK")]),_._v(" 标志的消息，告诉服务器客户端具有接收消息的能力")])]),_._v(" "),v("p",[_._v("这里再提一下 "),v("strong",[_._v("四次挥手")]),_._v(" 的过程，同样也是个人理解仅供参考：")]),_._v(" "),v("ul",[v("li",[_._v("由客户端发起关闭请求，请求的消息带有 "),v("code",[_._v("FIN")]),_._v(" 标记，同时客户端进入 "),v("code",[_._v("FIN-WAIT-1")]),_._v(" 状态，即等待服务器确认关闭请求")]),_._v(" "),v("li",[_._v("服务器收到关闭请求后发出带有 "),v("code",[_._v("ACK")]),_._v(" 标记的消息给客户端，表示确认关闭，使客户端进入 "),v("code",[_._v("FIN-WAIT-2")]),_._v(" 状态，同时使服务器进入 "),v("code",[_._v("CLOSE-WAIT")]),_._v(" 阶段")]),_._v(" "),v("li",[_._v("服务器进入 "),v("code",[_._v("CLOSE-WAIT")]),_._v(" 阶段后，会继续发送没发完的报文，等到所有报文发送完毕会进入 "),v("code",[_._v("LAST-ACK")]),_._v(" 状态，并给客户端发送一个带 "),v("code",[_._v("FIN")]),_._v(" 标记的消息")]),_._v(" "),v("li",[_._v("客户端收到消息后进入 "),v("code",[_._v("TIME_WAIT")]),_._v(" 状态，并发送标记位为 "),v("code",[_._v("ACK")]),_._v(" 的报文，等到服务器收到该报文后就可以关闭连接了。在此之前客户端需要等待 "),v("code",[_._v("2MSL")]),_._v(" ，为了避免标记位为 "),v("code",[_._v("ACK")]),_._v(" 的报文丢失")])]),_._v(" "),v("h2",{attrs:{id:"发起http请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发起http请求"}},[_._v("#")]),_._v(" 发起HTTP请求")]),_._v(" "),v("p",[_._v("建立 TCP 连接后，就轮到 HTTP 协议登场了")]),_._v(" "),v("p",[_._v("HTTP 协议规定了浏览器和服务器之间的请求和响应的格式和规则，在请求过程中它的职责是： "),v("strong",[_._v("生成针对目标 Web 服务器的 HTTP 请求报文")]),_._v(" ，该请求报文由请求行、请求头、请求体三个部分组成，然后交由 TCP 进行传输。 TCP 为了方便通信，会将 HTTP 报文按序号分割成多个报文段，把每个报文段可靠的传给对方")]),_._v(" "),v("p",[_._v("服务器端收到请求报文并对其做出响应，响应的消息按照和上面一样的过程传输给浏览器。假设我们访问的是某网站的首页，那么返回的就是一个 HTML ，在浏览器接收到响应文本 HTML 后就开始了页面的渲染")]),_._v(" "),v("h2",{attrs:{id:"浏览器解析渲染页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析渲染页面"}},[_._v("#")]),_._v(" 浏览器解析渲染页面")]),_._v(" "),v("p",[_._v("在浏览器网络线程接收到数据后，一般会进行一次安全检测来检查站点是否是恶意站点，如果是会展示一个警告页面，并且浏览器会阻止访问。这里的浏览器以谷歌 Chrome 为例，进行检测的是谷歌内部的一套站点安全系统 "),v("strong",[_._v("SafeBrowsing")])]),_._v(" "),v("p",[_._v("前面我们提到了在浏览器的地址栏里输入 url 时，是在 "),v("strong",[_._v("浏览器进程")]),_._v(" 中去完成网络请求的。当返回数据准备完毕，且通过了安全校验时， "),v("strong",[_._v("网络线程")]),_._v(" 会向 "),v("strong",[_._v("UI线程")]),_._v(" 发送通知告诉它数据准备好了，然后 "),v("strong",[_._v("UI线程")]),_._v(" 会创建一个 "),v("strong",[_._v("渲染器进程")]),_._v(" ，然后 "),v("strong",[_._v("浏览器进程")]),_._v(" 将 HTML 数据通过 "),v("strong",[_._v("IPC")]),_._v(" 管道传递给 "),v("strong",[_._v("渲染器进程")]),_._v(" ，正式进入渲染流程")]),_._v(" "),v("p",[_._v("浏览器渲染引擎的基本流程：")]),_._v(" "),v("ul",[v("li",[_._v("解析 HTML 以构造 "),v("strong",[_._v("DOM")]),_._v(" 树")]),_._v(" "),v("li",[_._v("解析 CSS ，并确定每个DOM节点的计算样式，构建 "),v("strong",[_._v("CSSOM")])]),_._v(" "),v("li",[_._v("将 DOM 和 CSSOM 合并为 "),v("strong",[_._v("渲染树")]),_._v(" ( "),v("strong",[_._v("Render Tree")]),_._v(" )，这一渲染树上包含着多个带有颜色、尺寸等视觉属性的矩形，这些矩形与最后展示在屏幕上的节点是一一对应的，同时 "),v("code",[_._v("display:none")]),_._v(" 的元素不在该树中，而在伪元素 "),v("code",[_._v("::before")]),_._v(" ， "),v("code",[_._v("::after")]),_._v(" 中添加了 "),v("code",[_._v("content")]),_._v(" 值的元素会被添加在该树")]),_._v(" "),v("li",[_._v("构建完渲染树后，进入 "),v("strong",[_._v("Layout")]),_._v(" 布局阶段，也就是为每个节点计算并分配一个它应出现在屏幕上的确切坐标和大小")]),_._v(" "),v("li",[_._v("下一阶段被称为 "),v("strong",[_._v("Painting")]),_._v(" 绘制阶段，这一步会遍历渲染树，然后使用 "),v("code",[_._v("UI backend")]),_._v(" 层将每个节点绘制出来 ( "),v("code",[_._v("UI backend")]),_._v(" 用于绘制基本的浏览器窗口内控件 )")])]),_._v(" "),v("p",[_._v("下面是一张来自 "),v("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",target:"_blank",rel:"noopener noreferrer"}},[_._v("How Browsers Work"),v("OutboundLink")],1),_._v(" 这篇文章的一幅图，描述的是 "),v("strong",[_._v("WebKit 主流程")]),_._v(" ：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png",alt:"img"}})]),_._v(" "),v("p",[_._v("在这一过程中又衍生出了两个比较有名的概念：回流和重绘，这个我们后面还会在提到")]),_._v(" "),v("blockquote",[v("p",[_._v("接下来要讲的内容算是比较深入了的，一般来说面试的时候讲上面的基本就够了，下面这些要是记得住，能理解的话，面试时加进去也算是一个加分项")])]),_._v(" "),v("p",[_._v("在渲染树创建完毕，每个元素的具体位置信息也都计算出来的之后，其实也还没到绘制页面的时候呢。因为页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-index 做 z 轴排序等，为了更加方便地实现这些效果， "),v("strong",[_._v("渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树 ( Layer Tree )")]),_._v(" 。有了这一 "),v("strong",[_._v("Layer Tree")]),_._v(" 还是不够，为了保证在屏幕上展示正确的层级，主线程遍历 "),v("strong",[_._v("Layout Tree")]),_._v(" 创建一个绘制记录表 ( "),v("strong",[_._v("Paint Record")]),_._v(" ) ，该表记录了绘制的顺序")]),_._v(" "),v("p",[_._v("上面这些流程是在渲染器进程中的 "),v("strong",[_._v("主线程")]),_._v(" 里完成的，这里还有另一个很关键的线程："),v("strong",[_._v("合成器线程")]),_._v(" ，接下来的部分都是在这个线程上进行的。在 Layer Tree 生产完毕和绘制顺序确定后，主线程将两者的信息传递给合成器线程，由合成器线程负责将每个图层栅格化。由于一层的内容可能很大很长，因此合成器线程将它们切分为许多 "),v("strong",[_._v("图块 ( tiles )")]),_._v(" ，然后将每个图块发送给 "),v("strong",[_._v("栅格化线程 ( Raster Thread )")]),_._v(" ，栅格线程将每个图块栅格化，并将它们存储在 GPU 的内存中。当图块栅格化完成后，合成器线程将会收集称为 "),v("strong",[_._v("“draw quads”")]),_._v(" 的图块信息，这些信息记录了图块在 GPU 内存中的位置和在页面的哪个位置绘制图块的信息，根据这些信息合成器线程生成了一个合成气帧，然后将其通过 IPC 传送给浏览器进程，接着浏览器进程将合成器帧传到 GPU ，然后 GPU 渲染展示到屏幕上，到这里才算真正完成了页面的渲染。当页面发生变化时，如滚动页面，都会产生一个新的合成器帧， GPU 再根据这个合成器帧渲染页面")]),_._v(" "),v("blockquote",[v("p",[_._v("关于栅格化的小扩展：")]),_._v(" "),v("p",[_._v("Chrome 最早使用了一个很简单的方式，只栅格化用户可视区 ( Viewport ) 的内容，当用户滚动页面时再栅格化更多的内容填补空缺，这样带来的问题是会导致展示的延迟")]),_._v(" "),v("p",[_._v("现在的 Chrome 使用了一种更为复杂的栅格化流程，叫做合成，合成是将页面的所有元素按照按照某种规则进行分图层，并把图层都栅格化好了，只需要把可视区的内容组合成一帧展示给用户即可")])]),_._v(" "),v("h2",{attrs:{id:"回流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[_._v("#")]),_._v(" 回流")]),_._v(" "),v("p",[_._v("回流这个称呼来源于 "),v("strong",[_._v("Gecko")]),_._v(" 所使用的术语："),v("code",[_._v("Reflow")]),_._v(" ，也叫重排，在 "),v("strong",[_._v("WebKit")]),_._v(" 中这个步骤被称为 "),v("code",[_._v("Layout")]),_._v(" ，译为布局。之所以使用回流这个称呼，主要是因为这个叫法之前见的比较多，就叫习惯了，这里只要知道它指的是渲染过程中的哪一个步骤就行了")]),_._v(" "),v("p",[_._v("当页面第一次渲染或者元素的尺寸、位置属性被改变时，会重新进行样式计算，遍历渲染树，为每个节点计算确切的坐标和大小的过程，同时布局、绘制及后续的所有流程也要重新过一遍，因此回流的代价是比较昂贵的，在开发中需要尽量避免造成回流")]),_._v(" "),v("p",[_._v("会导致回流的主要有以下几种情况：")]),_._v(" "),v("ul",[v("li",[_._v("添加或删除可见的 DOM")]),_._v(" "),v("li",[_._v("元素产生了会影响页面布局的变化，如尺寸、位置变化")]),_._v(" "),v("li",[_._v("浏览器窗口尺寸发生变化")]),_._v(" "),v("li",[_._v("页面第一次渲染")])]),_._v(" "),v("h2",{attrs:{id:"重绘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[_._v("#")]),_._v(" 重绘")]),_._v(" "),v("p",[_._v("重绘，顾名思义就是重新进行绘制。当我们改变元素的颜色属性 ( 或是其他不会影响页面布局的属性 ) 时，不会触发回流，但还是会触发样式计算和绘制")]),_._v(" "),v("p",[_._v("相对于回流，重绘要复出的代价较小，因此对于一些动画的实现，最好是使用 "),v("code",[_._v("transform")]),_._v(" ， "),v("code",[_._v("opacity")]),_._v(" ， "),v("code",[_._v("filter")]),_._v(" 等不会触发回流的 CSS 属性，而 "),v("code",[_._v("height")]),_._v(" ， "),v("code",[_._v("width")]),_._v(" ， "),v("code",[_._v("padding")]),_._v(" 等会影响布局的属性同时也会导致回流的产生，可以不用的情况下就尽量不使用它们吧")]),_._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/m0_37812513/article/details/78775629",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解DNS域名解析全过程"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000017184701",target:"_blank",rel:"noopener noreferrer"}},[_._v("从 URL 输入到页面展现到底发生什么？"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[_._v("《图解HTTP》"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/162722524",target:"_blank",rel:"noopener noreferrer"}},[_._v("浏览器渲染流程"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://www.bilibili.com/video/BV1x54y1B7RE",target:"_blank",rel:"noopener noreferrer"}},[_._v("【干货】浏览器是如何运作的？( 视频 )"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",target:"_blank",rel:"noopener noreferrer"}},[_._v("How Browsers Work: Behind the scenes of modern web browsers"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);