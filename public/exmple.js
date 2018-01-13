let http = require("http");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");

http.createServer(function (request, response) {
    let urlobj = url.parse(request, url);
    console.log(urlobj);

    if (urlobj.pathname=="/public.html"){
        fs.readFile("test.html", function (error, data) {
            response.writeHead(200, {"Content-Type":"text/html"})
            // 将缓存的data，响应给浏览器
            response.end(data);
        })

        fs.createFileStream("test.html").pipe(response);// 两种方式
    }

}).listen(9000,"127.0.0.1", function () {
    console.log("node server running on port : 9000")
})