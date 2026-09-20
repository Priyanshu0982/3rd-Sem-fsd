const greet = (username, callback) =>{
    //This callback will call After this asynchronous operation's (setTimeout) timer elapsed.
    setTimeout(() => {
        console.log("Welcome ")
        callback(username)
    }, 3000);
}

greet("John Doe", (username)=>{
    console.log("Hello, ", username)
})
