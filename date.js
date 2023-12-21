//Please run all the code in the browser to get the correct output

let myDate=new Date();   //date is an object in JS
console.log(myDate);

console.log(myDate.toLocaleTimeString());  

console.log(new Date(2022, 4, 21));  //(yyyy, mm, dd)

console.log(new Date(2022, 4));  // default date : 01 May

console.log(new Date(2022));   //1st Jan 1970

console.log(new Date().getFullYear());

console.log(new Date().getMonth());

console.log(new Date().getDate());

myDate.setDate(24);
console.log(myDate);

myDate.setMonth(4);
console.log(myDate);

myDate.setFullYear(2024);
console.log(myDate);