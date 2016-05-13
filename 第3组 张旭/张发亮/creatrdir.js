/**
 * Created by Administrator on 2016/5/8.
 */
var fs = require("fs")
var path=require("path");
fs.mkdirP = function (scr, callback) {
    if(Object.prototype.toString.call(scr)=="[object String]")new  TypeError("scr类型错误")
    if(callback?Object.prototype.toString.call(callback)=="[object Function]":null)new  TypeError("callback类型错误")
    var arr = scr.split(/\//);
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

        str += "/";

    })


}
//fs.mkdirP("./v/r/t/u")
// fs.forTwo=function (rood) {
//     var fileConLeft={};// key对应数组
//     var result=[];
//     var roodL=rood;
//     var stat=null,statValue=null;
//     var str=path.sep;
//      stat=fs.statSync(rood);
//     while (stat.isDirectory()){
//         // 得到左边 所有文件名
//         fileConLeft[roodL]=fs.readdirSync(roodL)[0]
//         roodL+=path.sep+fs.readdirSync(roodL)[0];
//         stat=fs.statSync(roodL)
//         if(!stat.isDirectory()){
//             var arr=roodL.split(str);
//             var strPath=arr.join(str)
//             while(rood!==strPath) {
//                 // 遍历左边右边的文件
//                 arr.pop()
//                  strPath=arr.join(str)
//                 var strPath1=strPath;
//                 statValue=fs.statSync(strPath1)
//                 var  i=0;
//                if (statValue.isDirectory()){
//                     fs.readdirSync(strPath1).forEach(function (file) {
//                      if(fs.statSync(strPath1+path.sep+file).isFile()){
//                          result.push(strPath1+"\\"+file+":"+fs.readFileSync(strPath1+path.sep+file,"utf-8"))
//
//                      }
//                     })
//                 }
//                 strPath1=strPath1+path.sep+fs.readdirSync(strPath)[1]
//
//                 }
//
//         }
//     }
//      fileConLeft={};// key对应数组
//      roodL=rood;
//      stat=null,statValue=null;
//      str=path.sep;
//     stat=fs.statSync(rood);
//     var  flag=0;
//     // while (stat.isDirectory()) {
//     //     // 得到左边 所有文件名
//     //     var resuArray=fs.readdirSync(roodL);
//     //     if(!resuArray.length)return [];// 空的返回
//     //         fileConLeft[roodL]=fs.readdirSync(roodL)[1];
//     //         roodL+=path.sep+(fs.readdirSync(roodL)[1]==undefined?fs.readdirSync(roodL)[0]:fs.readdirSync(roodL)[1]);
//     //         stat=fs.statSync(roodL);
//     //         if(!stat.isDirectory()){
//     //             var arr=roodL.split(str);
//     //             var strPath=arr.join(str)
//     //             while(rood!==strPath) {
//     //                 // 遍历左边右边的文件
//     //                 arr.pop()
//     //                 strPath=arr.join(str)
//     //                 var strPath1=strPath;
//     //                 statValue=fs.statSync(strPath1)
//     //                 var  i=0;
//     //                 if (statValue.isDirectory()){
//     //                     fs.readdirSync(strPath1).forEach(function (file) {
//     //                         if(fs.statSync(strPath1+path.sep+file).isFile()){
//     //                             result.push(strPath1+"\\"+file+":"+fs.readFileSync(strPath1+path.sep+file,"utf-8"))
//     //                         }
//     //                     })
//     //                 }
//     //                 strPath1=strPath1+path.sep+fs.readdirSync(strPath)[1]
//     //             }
//     //
//     //         }
//     //     flag++;
//     //     }
//     console.log(result)
// }
var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}
console.log(tree)
//levelOrderTraversal(tree)

var preOrder = function (node) {
    if (node) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}
// preOrder(tree)