var fs = require('fs');
/**
 * 逐级创建目录的方法
 * @param dir 目录
 */
function createFile(dir) {
    var arr = dir.split('/');
    var dirName = '';
    arr.forEach(function (val) {
        dirName += val + '/';
        if (!fs.existsSync(dirName)) {
            fs.mkdir(dirName, function (err) {
                if (err) {
                    console.log('创建失败！')
                } else {
                    console.log('创建成功！')
                }
            });
        }
    });
}
createFile('a/bbc/b/b/b/b/b/a');


/**
 * 遍历二叉树的方法
 */
var ary=[[[1,2],[3,4]],[[5,6],[7,8]]];
var str='';
function each(ary) {
    if(!ary)return str;
    ary.forEach(function (val) {
        str+=val+',';
        if(val.length>=1)each(val);
    });
}
each(ary);
console.log(str);



