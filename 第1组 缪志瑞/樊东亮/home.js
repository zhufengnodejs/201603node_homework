/**
 * Created by FanDongLiang on 2016/5/13.
 */
function maKep1(url) {
    var str="";
    var urlStr = url.split("/");
    for (var i = 0; i < urlStr.length; i++) {
        if(i==0){
            str += urlStr[i];
        }else{
            str += "/"+urlStr[i];
        }
        var haveDir = fs.existsSync(str);
        if(!haveDir){
            fs.mkdirSync(str, function (err) {
                console.log(err);
            });
        }
    }
}
maKep1('a/b/d/f/vgf/f/d/d/d/d/c/d');