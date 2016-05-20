/**
 * Created by FanDongLiang on 2016/5/20.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.end('<a>新闻1</a><a>新闻2</a><a>新闻3</a>');
}).listen(8888);