//递归创建文件夹

var fs = require('fs');
var path = require('path');

//方法1：
fs.mkdirp = function(dir){
	//先把路径转换成数组形势
	var args = dir.split(path.sep);
	//循环数组
	for (var i = 0; i < args.length; i++) {
		//得到当前路径
		var pathname = args.slice(0,i+1).join(path.sep);
		//判断当前路径是否存在
		var exists = fs.existsSync(pathname);
		if(exists){
			var stat = fs.statSync(pathname);
			if(stat.isDirectory()){
				continue;
			}else{
				throw Error("父目录不能是文件");
			}
		}else{
			//如果当前目录不存在的话则创建当前目录
			fs.mkdirSync(pathname);
		}
	}
};

fs.mkdirp(path.join("a","b","c"));

//方法2：
var mkdirs = module.exports.mkdirs = function(dirpath,mode,callback){
	fs.exists(dirpath,function(exists){
		if(exists){
			callback(dirpath);
		}else{
			//尝试创建父目录。然后再创建当前目录
			mkdirs(path.dirname(dirpath),mode,function(){
				fs.mkdir(dirpath,mode,callback);
			});
		}
	});
};

mkdirs(path.join("e","b","c","d"),"0777",function(err){
	if(err){
		console.err("目录创建失败。");
	}else{
		console.log("目录创建成功。");
	}
});
