let func1=async()=>{
    let data=await fetch("https://api.chucknorris.io/jokes/random?category=animal");
    let parsedData=await data.json();
    return parsedData;
}

let chuckJokes=func1();
chuckJokes.then((message)=>{
console.log(message);
}).catch((error)=>{
console.log(error);
});
