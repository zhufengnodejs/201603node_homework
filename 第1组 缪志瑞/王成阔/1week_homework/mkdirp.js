var fs = require('fs');
var path = require('path');

fs.mkdirp = function (dirs) {
	if (typeof  dirs != 'string') throw new Error('dirs must be a string');
	var pathArr = path.normalize(dirs).split(path.sep);
	var pathtmp;
	pathArr.forEach(function (dirname) {
		if (pathtmp) {
			pathtmp = path.join(pathtmp, dirname)
		} else {
			pathtmp = dirname;
		}
		if (!fs.existsSync(pathtmp)) {
			fs.mkdirSync(pathtmp);
		}
	});
};
//fs.mkdirp('n\\d');
//fs.mkdirp('j/s');
// 1.拆分路径 2.拼接路径 3.判断是否存在 4.不存在创建 5.存在 判断是否是没有拓展名的文件
fs.mkdirp2 = function (dir) {
	var args = path.normalize(dir).split(path.sep);
	for (var i = 0; i < args.length; i++) {
		var pathname = args.slice(0, i + 1).join(path.sep);
		var exists = fs.existsSync(pathname);
		if (exists) {
			var stat = fs.statSync(pathname);
			if (stat.isDirectory()) {
				continue;
			} else {
				console.error('是没有拓展名的同名文件')
			}
		} else {
			fs.mkdirSync(pathname);
		}
	}
};
//fs.mkdirp2(path.join('c','b','a'));