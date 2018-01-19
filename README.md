# tcp-mutex

This small library is there to acquire a tcp based lock by opening a tcp-server. Since ports cannot be listened from more than 1 process we can use this behaviour to acquire a kind of lock based on port.



## Usage
npm install tcp-mutex --save

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

## Demo
![Demonstration](https://github.com/taskinosman/tcp-mutex/blob/master/tcpmutex.gif?raw=true "Demonstration")
