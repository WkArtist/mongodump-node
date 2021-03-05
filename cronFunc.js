const cron = require('node-cron');
const {backup} = require('./mongodump');
const path = require('path')
const {REMOTE_DB_NAME, CRON_RULE} = require('./config')

let option = { scheduled: true, timezone: 'Asia/Shanghai' };

cron.schedule(CRON_RULE, async () => {
    console.log('开始备份----------------------------')
    const dirname = new Date().getTime().toString();
    const backupResult = await backup(dirname, REMOTE_DB_NAME);
    console.log(backupResult);
}, option);