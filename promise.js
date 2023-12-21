//we typically use a promise to manage situations where you must wait for the outcome of an operation

console.log("Before promise");

let p=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([1,2,3,4,5,6]);
    }, 2000);
});

p.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log("Not able to return the array");
});

console.log("After promise");