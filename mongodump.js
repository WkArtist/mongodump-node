
const path = require('path');
const fs = require('fs');
const {cmdPromise} = require('./util');
const {DUMPPROXY_PORT} = require('./config')

const DUMP_DIR = path.join(__dirname, './dump'); // 数据库备份地址

let fun = {};

/**
 *
 * @param {*} dirname 目录名称
 * @param {*} dbname 对应数据库名
 */
fun.backup = async function (dirname, dbname) {
    try {

        // 判断问卷夹
        const saveDir = `${DUMP_DIR}${path.sep}${dirname}`;
        if (!fs.existsSync(DUMP_DIR)) {
            fs.mkdirSync(DUMP_DIR);
        }
        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir);
        }

        const line = `mongodump --port ${DUMPPROXY_PORT} -d ${dbname} -o ${saveDir}`;
        console.log('执行命令：'+line)
        // 进行备份
        await cmdPromise(line);

        return dbname+'数据库备份完成'+dirname;

    } catch (error) {
        return `备份失败-${error.message}`;
    }
};



module.exports = fun;
