// node 搭建http服务器

// 1. 导入http模块
let http = require("http");

// 2. 使用http, 建立服务器
http.createServer(function (request, response) {

    // response 响应头（状态码 响应头对象）
    response.writeHead(200, {"Content-Type":"text/html"});
    // 响应体
    response.write("<h1>666</h1>");
    // 结束响应过程
    response.end();
}).listen(9000, "127.0.0.1", function () {
    console.log("start:9000");
})