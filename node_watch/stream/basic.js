const promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve({
            id: 290309,
            username: "John Doe"
        });
    } else {
        reject("Something went wrong");
    }
});

function FetchUserData(){
    return promise1;
}

async function getuser(){
    const user = await FetchUserData();
    console.log(user);
}
getuser().catch((error) => console.error(error));