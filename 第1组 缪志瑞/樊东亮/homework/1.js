var http = require('http');
var fs = require('fs');
var Promise = require('bluebird');
console.log(Promise);
function request1() {
    return new Promise(function (res, reject) {
        var request1 = http.request({
            host: 'localhost',
            port: 8888,
            path: '/',
            method: 'get'
        }, function (response) {
            var str = '';
            response.on('data', function (data) {
                str += data;
            });
            response.on('end', function () {

                var reg = /<a>.+?<\/a>/g;
                var result = str.match(reg);

                var content = '<ul>';
                for (var i = 0; i < result.length; i++) {
                    content += '<li>' + result[i] + '</li>';
                }
                content += '</ul>';
                var html = fs.readFileSync('./index.html', 'utf8');
                html = html.replace('{{baidunews}}', content);
                console.log(html);


            });
        });
        request1.end();
    })
}
function request2() {
    return new Promise(function (res, reject) {

        var request2 = http.request({
            host: 'localhost',
            port: 8899,
            path: '/',
            method: 'get'
        }, function (response) {
            var str = '';
            response.on('data', function (data) {
                str += data;
            });
            response.on('end', function () {

                var reg = /<a>.+?<\/a>/g;
                var result = str.match(reg);
                var content = '<ul>';
                for (var i = 0; i < result.length; i++) {
                    content += '<li>' + result[i] + '</li>';
                }
                content += '</ul>';
                var html = fs.readFileSync('./index.html', 'utf8');
                html = html.replace('{{wangyinews}}', content);
                console.log(html);

            })
        });

        request2.end();
    })
}

http.createServer(function (req, res) {

    Promise.all([request1(), request2()]).then(function (data) {
        var html = fs.readFileSync('./index.html', 'utf8');
        html = html.replace('{{baidunews}}', data[0]);
        html = html.replace('{{wangyinews}}', data[1]);

        res.end(html);
    });

}).listen(9119,"localhost",function(){
    console.log("Done_++_running");
});
