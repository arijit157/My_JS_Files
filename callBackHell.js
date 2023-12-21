function getCheese(callBack){
  setTimeout(function() {
    let cheese="🧀";
    callBack(cheese);
  }, 2000);
}

function getDough(cheese, callBack){
  setTimeout(function() {
    let dough=cheese+" => "+"🍞";
    callBack(dough);
  }, 2000);
}

function getPizza(dough, callBack){
  setTimeout(function() {
    let pizza=dough+" => "+"🍕";
    callBack(pizza);
  }, 2000);
}

//call back hell
getCheese((cheese)=>{
  getDough(cheese, (dough)=>{
    getPizza(dough, (pizza)=>{
      console.log(pizza);
    });
  });
});


//equivalent code written with promises

// function getCheese(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(function() {
//         let cheese="🧀";
//         resolve(cheese);
//       }, 2000);
//     });
//   }
  
//   function getDough(cheese){
//     return new Promise((resolve, reject)=>{
//       setTimeout(function() {
//         let dough=cheese+"🍞";
//         resolve(dough);
//       }, 2000);
//     })
//   }
  
//   function getPizza(dough){
//     return new Promise((resolve, reject)=>{
//       setTimeout(function() {
//         let pizza=dough+"🍕";
//         resolve(pizza);
//       }, 2000);
//     })
//   }
  
//   let c=getCheese();
//   c.then((cheese)=>{
//     let d=getDough(cheese);
//     d.then((dough)=>{
//       let p=getPizza(dough);
//       p.then((pizza)=>{
//         console.log(pizza);
//       }).catch((err)=>{
//         console.log(err);
//       })
//     }).catch((err)=>{
//       console.log(err);
//     });
//   }).catch((err)=>{
//     console.log(err);
//   });