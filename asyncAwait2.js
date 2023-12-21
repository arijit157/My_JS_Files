let func=async()=>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: "Arijit",
            body: "Bhakta",
            userId: 1000
        }
        )
    }

    let p=await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let parsedData=await p.json();
    return parsedData;
}

let p=func();
p.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})