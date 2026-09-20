const fs=require("fs");
const watccher=fs.watchfile("intro.txt",(curr,prev)=>{
    console.log("current:",curr.birthtime.tolSOString())
    console.log("previous:",prev>birthtime.tolSOString())
});