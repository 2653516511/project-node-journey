## 1 什么是node.js?
    -node.js是一个 js运行环境 基于chrome V8引擎
    -node.js使用了一个 事件驱动、非阻塞式I/O的模型
## 2 不同之处：
    -node.js没有浏览器api，即window document等
    -加了node.js 的api
## 3 
    -chrome 中的js 控制浏览器
    -node.js控制整个计算机
## 4 
    -搜索引擎优化+首屏速度优化 = 服务端渲染
    -服务端渲染 + 前后端同构 = node.js
## 5 工作流构建工具
    -gulp：文件操作、文件预编译、构建
    -webpack：打包所有的资源。
## 6 使用node.js做js构建工具
## 7 应用：
    在已有网站的情况下需要新开发客户端应用。
    使用node.js客户端技术（electron）实现，最大限度复用现有工程。
## 8 commonjs模块规范
    -require()
    -export  module.export
## 9 npm:
    -npm 是node.js的 包(即别人写的node.js模块)管理工具
## 10 阻塞I/O 和 非阻塞I/O：
    -I/O，即Input/Output，输入输出
    -阻塞I/O 和 非阻塞I/O的区别：在输入到输出的过程中，是否还能接受其他输入
    -例子：食堂打饭的阿姨，只能上一个打完了，才能下一个；餐厅的服务生，可以一个顾客菜点完了之后，在上菜的这段时间，还可以给别的顾客点菜
    -要点：
        --首先确定好Input 和 Output
        --然后分析在这段时间内还能不能有其他的input
## 11 node.js的callback
    https://www.npmjs.com/package/async
    -例子：game-demo/callback/index.js


技术预研：项目的需求、技术难点
BFF(Backend for Fontend)层：对用户侧提供http服务、使用后端RPC服务