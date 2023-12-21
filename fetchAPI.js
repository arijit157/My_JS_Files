//fetch() without using async-await

let p=fetch("https://api.chucknorris.io/jokes/random?category=animal");
p.then((val)=>{
    return val.json();
}).then((jsonVal)=>{
    console.log(jsonVal);
}).catch((err)=>{
    console.log(err);
})