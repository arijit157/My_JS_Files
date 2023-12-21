let p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("This is p1")
    }, 4000);
  });
  
  let p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("This is p2");
    }, 3000);
  });
  
  let p3=new Promise((resolve, reject)=>{
    //reject("this is p3");
    setTimeout(()=>{
      resolve("This is p3");
    }, 5000);
  });
  
  Promise.all([p1, p2, p3]).then((val)=>{
    console.log(val);
  }).catch((err)=>{
    console.log("error occured :(");
  });