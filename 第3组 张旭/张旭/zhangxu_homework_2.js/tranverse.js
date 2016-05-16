//利用二叉树，读取文件

//1.深度优先
var fs = require("fs");
var path = require("path");

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

 tranverse("a");

//2.广度优先
var node = "./a";
var preOrder = function(node){
	fs.exists(node,function(exists){
		if(exists){
			fs.stat(node,function(err,stats){
				fs.readdir(node,function(err,data){
					if(data && data.length !== 0){
						left = node + "/" + data[0];
						right = node + "/" + data[1] ;
						console.log(left);
						console.log(right);
						preOrder(left);
						preOrder(right);
					}
				});
			});
		}
	});
};

preOrder(node);
