import fs from `fs`
const readstream =fs.createReadStream("input.txt")
readstream.on("data",(chunk)=>{
    console.log("data recieved");
    console.log("data:",chunk)
})
readStream.on("end",()=>{
    console.log("END")
})
readStream.on("error",(err)=>{
    console.log("error:",err.message)
})
const writestream =fs.creatorWriteStrean("output.txxt")
readstream.pipe(writeStream)
