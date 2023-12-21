let arr=[20,45,69,10,12];

let newArr=arr.map((el)=>{
    if(el%2==0){
        return el;
    }
});

console.log(newArr);