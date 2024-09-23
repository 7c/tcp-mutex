"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function start() {
    try {
        await (0, index_1.tryLock)(31337);
        console.log(`Port 31337 is locked`);
    }
    catch (err) {
        console.log(err);
    }
}
start();
//# sourceMappingURL=demo.js.map