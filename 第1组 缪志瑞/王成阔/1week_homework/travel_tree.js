var fs=require('fs');
var path=require('path');

function travel_tree(tree_node){
	if(tree_node !== null)
		console.log(tree_node);
		travel_tree(tree_node.left);
		travel_tree(tree_node.right);
}
//travel_tree();

//1.找目标文件下第一层文件 2.判读是否是文件夹 不是输出路径 是的话递归调用
function travel_tree2(dir) {
	var exists=fs.existsSync(dir);
	if(exists){
		var files=fs.readdirSync(dir);
		files.forEach(function (file) {
			var pathname=path.join(dir,file);
			var stat=fs.statSync(pathname);
			//console.log(stat.isDirectory());
			if(stat.isDirectory()){
				travel_tree2(pathname);
			}else {
				console.log(pathname);
			}
		});
	}else {
		console.error('输入的文件不存在!')
	}

}
//travel_tree2('c');