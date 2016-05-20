/**
 * Created by FanDongLiang on 2016/5/20.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.end('<a>新闻65</a><a>新闻56</a><a>新闻6556</a>');
}).listen(8899);
