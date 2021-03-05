const cmd = require('node-cmd');

let fun = {}

// promise化 node-cmd
fun.cmdPromise = async (line) => {
    return new Promise((resolve, reject) => {
        cmd.get(line, (err, data, stderr) => {
            if (!err){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

module.exports = fun