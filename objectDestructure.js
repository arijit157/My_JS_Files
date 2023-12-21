const myObj={
    studName: "Arijit Bhakta",
    roll: 11,
    age: 21,
    stream: "CSE"
}

// console.log(myObj.studName);
// console.log(myObj.stream);

const {studName, roll, age, stream}=myObj;   //object destructuring (variable names and object's property names should be same)

console.log(studName);
console.log(stream);