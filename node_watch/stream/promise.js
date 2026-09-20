console.log("Start");

Promise.resolve().then(()=>{
    console.log("Microtask Queue")
})
setTimeout(function() {
    console.log("Inside setTimeout");
}, 4000);
console.log("End");