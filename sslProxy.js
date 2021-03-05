const cmd = require('node-cmd');
const {DUMPPROXY_PORT,REMOTE_MONGOD_PORT,REMOTE_HOST,REMOTE_PORT,REMOTE_USER} = require('./config')

let fun = {}

fun.startProxy = async function () {
    try{
        console.log(`ssh -L :localhost:${DUMPPROXY_PORT}:${REMOTE_MONGOD_PORT} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT}`)

        const line = `ssh -L :${DUMPPROXY_PORT}:localhost:${REMOTE_MONGOD_PORT} ${REMOTE_USER}@${REMOTE_HOST} -p ${REMOTE_PORT}`;
        console.log('开始ssh正向代理'+line)
        cmd.get(line, (err, data) => {
            if (!err){
                console.log('代理成功--------------------------')
            }else {
                throw new Error('代理失败')
            }
        })
        
    } catch(error) {
        console.log('代理失败+++++++++++++++++++++++++++'+error.msg)
    }
    
}

module.exports = fun