let net = require("net");

var count = 0; // 在线
var user = {};  // 存储当前聊天室的用户

// 创建一个tcp的服务器
var server = net.createServer(function (socket) {

    socket.write("welcome to node chat, now "+ count +" at this time, your name\r\n");

    count ++;

    var nickname;

    // 公共的广播方法
    function broadcast(msg) {
        for (var i in user){
            if (i != nickname){
                user[i].write(msg);
            }
        }
    }

    var temp;
    socket.on("data", function (data) {
        temp += data;

        if (temp.indexOf("\n")===-1){
            return;
        }

        data = temp.replace(/\r|\n/g, "");

        if(!nickname){
            // 用户名重复存在
            if (user[data]){
                socket.write("nickname alerady in use, try \r\n");
                temp = "";
                return;
            }
            else {
                nickname = data;
                user[nickname] = socket;
                broadcast(nickname + "join the room")
            }
        }else{
            broadcast(nickname + "say:"+data+"\r\n");
        }
        temp = "";
    })

    socket.on("close", function () {
        count--;
        delete user[nickname];
        broadcast(nickname + "leave");
    })
})

server.listen(9000, function () {
    console.log("server listening on 9000");
})