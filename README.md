#基于 jQuery 的聊天机器人

##1. 使用

1. 因为连接的是真实的图灵机器人接口， 因为发生跨域
   所以，需要网络代理， 写在 server.js 文件里

2. node server.js 启动服务

3. 打开 HTML 用 liveserver 的方式打开

##2. 项目总结

1. 整个项目基于 jQuery 完成

2. 实现了自己和机器人图图的对话

3. 监听发送按钮，和回车按键，两个事件
   把自己当话作为参数，以 ajax 请求发送给图灵机器人，
   然后图灵机器人给你返回一个他说的话。

4. 就是实时保持最新的对话，就需要
   scrollTop = scrollHeight - clientHeight
