let outerFunc=()=>{
    let name="Arijit Bhakta";
    let innerFunc=()=>{
        console.log(name);
    }
    return innerFunc;
}

let val=outerFunc();
val();