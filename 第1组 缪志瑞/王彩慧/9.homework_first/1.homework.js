/**
 * Created by Administrator on 16-5-11.
 */
var fs=require("fs");
var path=require("path");

/*
fs.mkdir("a/b/c/d",function(err){
    console.log(err);
})*/

fs.mkdirp=function(str,callback){
    var arr=str.split("/");
    var dirs="";
    try{
        arr.forEach(function(dir){
            dirs+=dir;
            if(fs.existsSync(dirs)){
                dirs+="/";
                return dirs;
            }else{
                fs.mkdir(dirs,function(err){
                    console.log(err);
                });
                dirs+="/";
                return dirs;
            }
        });
    }catch(ex){
        callback(ex);
    }



};

fs.mkdirp("./a/b/c/f",function(err){
    console.log(err);
});