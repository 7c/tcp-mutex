# tcp-mutex

This small library is there to acquire a tcp based lock by opening a tcp-server. Since ports cannot be listened from more than 1 process we can use this behaviour to acquire a kind of lock based on port.

## Usage
```
var {tryLock} = require('tcp-mutex');

tryLock(1337).then((success)=>{
    console.log("locked successfully");
    // we can start our application here
}).catch(err=>{
    console.log("This application already started");
    process.exit(0);
});
```