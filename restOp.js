// ... is called rest operator here and it packs the unpacked values into an array

let sumOfNum=(...args)=>{
    let sum=0;
    for(let i=0; i<args.length; i++){
        sum=sum+args[i];
    }
    return sum;
}

let ans=sumOfNum(10,20,50);
console.log(ans);