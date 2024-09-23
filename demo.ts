import { tryLock } from './index'

async function start() {
    try {

        await tryLock(31337)
        console.log(`Port 31337 is locked`)

    
    } catch(err) {
        console.log(err)
    }
}

start()