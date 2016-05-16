
var http = require("http");
var fs = require("fs");
var Promise = require('bluebird');

function request1(){
    return new Promise(function(resolve,reject){
        var request1 =  http.request({
            host: 'www.nodejs.net',
            port: 80,
            path: '/category/quick-start',
            method: 'get'
        },function(response){
            var str = "";
            response.on('data',function(data){
                str += data;
            });
            response.on('end',function(data){
                var reg = /<h3><a href=".+?" *title=".+?">.+?<\/a><\/h3>([\w\W]*?)<p>([\w\W]*?)<\/p>([\w\W]*?)<p class="meta">([\w\W]*?)<\/p>/g;
                var result = str.match(reg);
                var content = '<ul>';
                for(var i=0;i<result.length;i++){
                    content+= '<li>'+result[i]+'</li>';
                }
                content += '</ul>';
                resolve(content);
            });
        });
        request1.end();//直接发送请求
    });
}

function request2(){
    return new Promise(function(resolve,reject){
        var request1 =  http.request({
            host: 'www.nodejs.net',
            port: 80,
            path: '/category/learn-nodejs',
            method: 'get'
        },function(response){
            var str = "";
            response.on('data',function(data){
                str += data;
            });
            response.on('end',function(data){
                var reg = /<h3><a href=".+?" *title=".+?">.+?<\/a><\/h3>([\w\W]*?)<p>([\w\W]*?)<\/p>([\w\W]*?)<p class="meta">([\w\W]*?)<\/p>/g;
                var result = str.match(reg);
                var content = '<ul>';
                for(var i=0;i<result.length;i++){
                    content+= '<li>'+result[i]+'</li>';
                }
                content += '</ul>';
                resolve(content);
            });
        });
        request1.end();//直接发送请求
    });
}

http.createServer(function(req,res){
    Promise.all([request1(),request2()]).then(function(data) {
        var html = fs.readFileSync('./index.html','utf8');
        html = html.replace('{{quick_start}}',data[0]);
        html = html.replace('{{learn_nodejs}}',data[1]);
        res.end(html);
    });

}).listen(9900,"localhost",function(){
   console.log("The programme is running.");
});