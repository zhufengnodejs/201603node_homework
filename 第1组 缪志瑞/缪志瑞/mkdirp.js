'use strict';

const fs = require('fs');

function mkdirp(path) {

    let dirs = path.split('/');
    let customPath = '';

    dirs.forEach((dir, index)=> {
        customPath += dir + '/';

        if (fs.existsSync(customPath)) return;

        !function (customPath) {

            fs.mkdir(customPath, function (err) {

                if (err) {
                    console.log(err);
                    return;
                }

            })

        }(customPath)

    })

}

mkdirp('a/b/c/d/e/f/g/h');