# tcp-mutex
This small library is there to acquire a tcp based lock by opening a tcp-server. Since ports cannot be listened from more than 1 process we can use this behaviour to acquire a kind of lock based on tcp-port.

## Installation
```bash
npm install --save tcp-mutex 
```

## Typescript
```typescript
import { tryLock } from 'tcp-mutex';

// somewhere in your main code entry
await tryLock(1337)
```

## CommonJS
```javascript
const { tryLock } = require('tcp-mutex');

tryLock(1337).then(()=>{
    console.log("locked successfully");
    // we can start our application here
}).catch(err=>{
    console.log("This application already started");
    process.exit(0);
});
```

## Demo
![Demonstration](https://github.com/7c/tcp-mutex/blob/master/tcpmutex.gif?raw=true "Demonstration")
