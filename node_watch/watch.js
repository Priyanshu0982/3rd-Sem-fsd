const fs = require('fs')
fs.watch("intro.txt",()=>{
console.log("Event:",eventType)
console.log("Filename", Filename)
})
settimeout()=>{
    watcher.close()
    
}