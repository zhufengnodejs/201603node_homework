var path = require("path");
var fs = require('fs');
// 创建所有目录
var mkdirs = module.exports.mkdirs = function(dirpath, mode, callback) {
    fs.exists(dirpath, function(exists) {
        if(exists) {
            callback(dirpath);
        } else {
                //尝试创建父目录，然后再创建当前目录
                mkdirs(path.dirname(dirpath), mode, function(){
                    fs.mkdir(dirpath, mode, callback);
                });
        }
    });
};

mkdirs("./a/b/c/d","0777",function(err){
	if(err){
		console.log("目录创建失败。");
	}else{
		console.log("目录创建成功。");
	}
});

var node = "./app/b/";
var preOrder = function(node){
    fs.exists(node,function(exist){
        if(exist){
            fs.stat(node,function(err,stat){
                if(stat.isDirectory()){
                    fs.readdir(node,function(err,data){
                        if(data.length !==0) {
                            left = node + data[0] + "/";
                            right = node + data[1] + "/";
                            console.log(left);
                            console.log(right);
                            preOrder(left);
                            preOrder(right);
                        }
                    })
                }
            });
        }
    });
};

preOrder(node);