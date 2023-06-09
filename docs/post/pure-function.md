---
title: 何为纯函数？
postTime: 2022-10-20
categories: 
- 编程思想 
- 代码规范
tags:
- 代码规范
---



::: slot abstract

在一次 code review 的时候，导师指出我的一个函数不符合纯函数的概念，期望我将他改成纯函数的形式。但当时我很纳闷，我这个函数传入的参数都是初始值，没有引用值，不存在修改了参数值的情况，并且在函数内也没有去改变外部的全局变量或者上父级作用域内的变量，怎么就不符合纯函数了呢？

抛出这个疑问后，导师丢给我一个链接：[Pure functions, immutability and other software superpowers](https://medium.com/dailyjs/pure-functions-immutability-and-other-software-superpowers-dfe6039af8f6) (国内貌似裸连访问不了)，根据这篇文章所讲的，我写这个函数还真不能算纯函数。

> 本文将着重讲解何为纯函数，同时也将说明纯函数的好处都有哪些，内容不多，篇幅较短，适合地铁上看~

:::



## 前言

在一次 code review 的时候，导师指出我的一个函数不符合纯函数的概念，期望我将他改成纯函数的形式。但当时我很纳闷，我这个函数传入的参数都是初始值，没有引用值，不存在修改了参数值的情况，并且在函数内也没有去改变外部的全局变量或者父级作用域内的变量，怎么就不符合纯函数了呢？

抛出这个疑问后，导师丢给我一个链接：[Pure functions, immutability and other software superpowers](https://medium.com/dailyjs/pure-functions-immutability-and-other-software-superpowers-dfe6039af8f6) (国内貌似裸连访问不了)，根据这篇文章所讲的，我写这个函数还真不能算纯函数。



## 定义

纯函数的定义简单来说就一句话：

> 纯函数是一个只要输入相同的参数，就永远会得到相同输出的函数，同时不会带来任何的副作用

举一个简单的例子：

~~~js
function add(a, b) {
    return a + b
}
~~~

上面这个函数就是一个纯函数，不管我们调用多少次，什么时机调用，甚至是在多个线程中同步运行（当然，js 是没有），只要传入的两个参数是不变的，输出的结果就永远是一样的。

这里我们要清楚，**得到相同输出** 这句话的背后其实还隐含了不少信息，不只是每次输出一样的值就可以了，下面我将对其进行一一刨析。



### 始终返回相同值

下面是一个非纯函数的例子：

~~~js
function getCurrentTime() {
    return Date.now()
}
~~~

在这个函数中使用了 `Date.now()` 这一方法，导致每一次调用都会出现不同的值，因此这个函数就不是一个纯函数了，这是最简单，最容易理解的部分。

这里说一下，即使函数返回的是一个对象，只要每次返回的对象所有的属性都是相同的，那么这个函数也依然是一个纯函数，并不会因为每次返回的对象所处的引用地址不同，而被当成非纯函数。比如 `redux` 中的 `reducers`，他们就是一个每次调用返回一个新的 `sstate` 对象，但它们仍然是一个纯函数。



### 不能依赖外部变量

要想让输出保持不变，那一定不能使用函数外部的变量，不然如果外部变量的值在不知情的情况下发生了改变，那相应的函数输出值也会跟着改变，就比如下面这个例子：

~~~js
const externalDependence = {
    a: 10,
    b: 20
}

function notPure(param) {
    return externalDependence.a + param
}
~~~

假设在其他地方修改了 `externalDependence.a` 的值，那么函数的返回结果也会跟着改变，因此这个函数的输出就不相同了。

依赖外部变量还会带来一个问题，那就是难以测试，试想一下，如果这个外部依赖是一个很大的对象，然后你在函数中使用了其中的几个方法，这几个方法可能还依赖对象自身的数据，那么你在进行测试的时候，就必须重新构建出这么一个对象。

同时还有另一个问题，其他人要搞清楚这个函数是如何工作的，就还需要搞清楚他的这个外部依赖是如何工作的，增加了代码的理解成本，这样的代码是不利于在团队中共同维护的。



### 不能修改函数入参

有时候，我们会将一个引用值作为参数传给一个函数，这种情况下，其实我们很难去确定函数是否修改了引用值上的某个属性，这样的话即使传入同一个引用值进入函数，返回的数据也可能因为引用值的属性变化而发生改变，因此也就不能称之为纯函数了。

这一点也是我之前写的函数被导师说不是纯函数的原因。我当时写的函数只有两个原始值参数，并没有用到引用值，不过在函数中我将参数根据条件修改了，类似下面这样：

~~~js
function(param1, param2) {
    param1 = param2 ? param1 : 1
}
~~~

虽然这样做并没有修改函数之外的任何变量，但会给其他人在阅读函数时带来困惑：参数传进来时是这样一个值，为什么运行的时候变成另一个值了？特别是在调试函数的时候，这种困惑会导致各种麻烦。

同时，这样修改入参的方式也会导致不好扩展，就比如上面的函数，如果我需要新增一个使用了 `param1` 的功能，那我就只能在改变了 `param1` 的代码前面去做，限制了代码的执行时机。如果这个新功能同时依赖于修改前和修改后的 `param1`，那么就还需要一些额外操作来处理了。

根据在 [Pure functions, immutability and other software superpowers](https://medium.com/dailyjs/pure-functions-immutability-and-other-software-superpowers-dfe6039af8f6) 这篇文章的观点之一：

> 纯函数要便于阅读、易于理解、方便扩展

上述的这一写法明显是不符合这些要求的。可以根据如下的形式改造一下：

~~~js
function(param1, param2) {
    // 以一个新的变量来存储需要改变的函数参数，之后仅对该变量进行更改
    let paramCopy = param2 ? param1 : 1
}
~~~



## 总结

上面提到的非纯函数的缺陷，反过来其实就是纯函数的优点，总结如下：

- 在发布上线之前检测出潜藏的 bug
- 使程序更好调试，也更好理解
- 更容易为程序写单元测试
- 使代码的运行结果更加的可预测
- 增强代码的可扩展性，同时也使代码更容易组合
