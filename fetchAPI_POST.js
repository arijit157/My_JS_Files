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

let p = fetch("https://jsonplaceholder.typicode.com/posts", options);
p.then((response) => {
    return response.json();
}).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})