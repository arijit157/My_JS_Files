let myFunc=(a, b)=>{
    return a+b;
}

let myArr=[4, 5];

let answer=myFunc(...myArr);   //spread operator: it will unpack(spread) the packed values

console.log(answer);