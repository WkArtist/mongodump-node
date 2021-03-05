const {startProxy} = require('./sslProxy')

async function handler() {
    await startProxy()
    require('./cronFunc')
}

handler();