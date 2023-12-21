let p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("This is p1")
    }, 5000);
  });
  
  let p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("This is p2");
    }, 3000);
  });
  
  let p3=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("This is p3");
    }, 2000);
  });
  
  Promise.race([p1, p2, p3]).then((val)=>{
    console.log(val);
  }).catch((err)=>{
    console.log("error occured :(");
  });