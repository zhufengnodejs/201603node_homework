var fs=require('fs');
var path=require('path');

fs.mkdirp = function (dirs) {
	if (typeof  dirs != 'string') throw new Error('dirs must be a string');
	var pathArr = path.normalize(dirs).split(path.sep);
	var pathtmp;
	pathArr.forEach(function(dirname){
		if(pathtmp){
			pathtmp=path.join(pathtmp,dirname)
		}else{
			pathtmp=dirname;
		}
		if(!fs.existsSync(pathtmp)){
			fs.mkdirSync(pathtmp);
		}
	});
};
fs.mkdirp('n\\d');
fs.mkdirp('j/s');