let arr1=[1,2,3,6,4,5];   //object

let arr2=new Array(1,2,3,4,5);   //object

console.log(typeof arr1);
console.log(typeof arr2);

console.log(arr1[0]); 

arr1[0]=10;   //modifying the first element of the array
console.log("Modified array: "+arr1);
 
arr1.push(7);  //adds an element at the end 
console.log(arr1);

arr1.pop();  //deletes the last element
console.log(arr1);

console.log("Sorted array(ascending order): "+arr1.sort(function(a,b){return a-b}));  //sorts the array in ascending order (comparator function is mandatory to sort numeric arrays)

console.log("Sorted array(descending order): "+arr1.sort(function(a,b){return b-a}));    //sorts the array in descending order (comparator function is mandatory to sort numeric arrays)

console.log(arr1.length);  //returns the length of the array

arr1.shift();     //deletes an element from the beginning of the array
console.log(arr1);

console.log(arr1.unshift(8));  //inserts an element to the beginning of the array
console.log(arr1);

let newArr1=arr1.reverse();  //reverses the array
console.log("Reversed array : "+newArr1);

console.log(Array.isArray(arr1));  //checks whether an object is an array or not
console.log(Array.isArray(arr2)); 

let newMergedArray=arr1.concat(arr2);
console.log(newMergedArray);

console.log(arr1.indexOf(2));   //returns the index of the specified element

console.log("Shuffled array: "+arr2.sort(function(){return 0.5-Math.random()}));  //to shuffle all the elements of the array
