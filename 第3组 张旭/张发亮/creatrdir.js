/**
 * Created by Administrator on 2016/5/8.
 */
var fs = require("fs")
var path=require("path");
fs.mkdirP = function (scr, callback) {
    if(Object.prototype.toString.call(scr)=="[object String]")new  TypeError("scr类型错误")
    if(callback?Object.prototype.toString.call(callback)=="[object Function]":null)new  TypeError("callback类型错误")
    var arr = scr.split(path.sep);
    str = "";
    var flag = false;
    var length = arr.length;
    arr.forEach(function (item, index) {
        str += item.toString();
        flag = fs.existsSync(str)
        if (!flag) {
            try {
                fs.mkdirSync(str);
                if(index==length-1){
                    console.log("success dir");
                    callback();
                }
            } catch (e) {
                console.log(e);
            }
        }

        str +=path.sep;

    })


}
mkdirP(path.join("k","m"))
var fs  = require('fs');
var path  = require('path');
function tranverse(dir){
    console.log(dir);
    var files = fs.readdirSync(dir);
    files.forEach(function(file){
        var pathname = path.join(dir,file);
        var stat = fs.statSync(pathname);
        if(stat.isDirectory()){
            tranverse(pathname);
        }else{
            console.log(pathname);
        }
    });
}

tranverse('a');