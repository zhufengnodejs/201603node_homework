/**
 * Created by Administrator on 2016/5/16.
 */
var  http=require("http");
var fs=require("fs");
var Promise=require("bluebird")
http.createServer(function (req,res) {
function request1() {
    return   new Promise(function (reslove, reject) {
        var request1=http.request({
            host:"news.163.com",
            path:'/index.html',
            method:'get'

        },function (response) {
            var str="";
            response.on("data",function (data) {
                str+=data;
            })
            response.on("end",function () {

                var reg=/<a href=".+">.+<\/a>/g
                var arr=str.match(reg)
                var content="<ul>";
                //for(var i=0;i<10;i++){
                    content+="<li>arr</li>"
                //}
                 content+="</ul>";
                reslove(str.match(reg));
            })
        })
        request1.end();

    })
}
    Promise.all(request1()).then(function (data) {
        console.log(data)
    })
}).listen(8087)
