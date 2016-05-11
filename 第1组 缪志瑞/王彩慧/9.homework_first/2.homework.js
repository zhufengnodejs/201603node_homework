/**
 * Created by Administrator on 2016/5/11.
 */
var fs=require("fs");
var path=require("path");

fs.two=function(str,callback){
    var arr=[];
    var strs="";//根元素
    arr.push(str);
    strs+=str;
    function so(strs){
        var arr1=fs.readdirSync(strs);

      arr1.forEach(function(dir){
          strs+="/"+dir;
          var stat=fs.lstatSync(strs);
               if(stat.isFile()){
                   arr.push(dir);
               }else{
                   so(strs);
               }

            });
        }

    so(strs);
   /* var arr1=fs.readdirSync(str);
    arr1.forEach(function(dir){
        fs.stat(dir,function(err,stat){
            if(stat.isFile()){
                arr.push(dir);
            }else{
                strs=dir;
            }
        })
    });*/

    return arr;
};

console.log(fs.two("./a",function(){}));