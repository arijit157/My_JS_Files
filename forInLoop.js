//for-in loop can only be used with objects
let myObj={
    name: "Arijit Bhakta",
    roll: 11,
    stream: "CSE",
    university: "UEM, Kolkata"
}

for(let prop in myObj){
    console.log(prop+": "+myObj[prop]);
}