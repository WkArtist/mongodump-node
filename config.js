module.exports = {
    APP_PORT: 7003, //本应用端口

    DUMPPROXY_PORT: 9876, //mongo本机代理端口
    REMOTE_MONGOD_PORT: 27017, //数据库所在的服务器mongod服务端口
    REMOTE_HOST: '*.*.*.*',//数据库所在的服务器地址
    REMOTE_PORT: 22, //数据库所在的服务器ssh登录端口
    REMOTE_USER: 'root', //数据库所在的服务器登录用户名
    REMOTE_DB_NAME: 'my-db', //所需备份的数据库名

    CRON_RULE: '* * */6 * * *', //指定cron规则，按此规则进行定时备份
}
