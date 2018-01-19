var {tryLock} = require('./index.js');

tryLock(1337).then((success)=>{
    console.log("locked successfully");
}).catch(err=>{
    console.log("could not lock")
});