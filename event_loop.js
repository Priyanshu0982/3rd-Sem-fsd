import fs from 'fs'
import process from 'process';

setTimeout(()=>{
    console.log("SetTime Out"); 
})

fs.readFile("intro.txt", "utf8", (err, data)=>{
    setTimeout(()=>{
        console.log("setTimeout inside fs");
    }, 0)
    // Inside the fs.readFile setImmediate execute first because it comes the first teh 6 strict synchronous phases of event loop
    setImmediate(()=>{
        console.log("setImmediate inside fs")
    })
    console.log("File data read completed");
})

process.nextTick(()=>{
    console.log("nextTick");
    
})

setInterval(()=>{
    console.log("set interval");
    
}, 5000)

setImmediate(()=>{
    console.log("set immediate");
    
})