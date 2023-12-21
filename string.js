let str1="Arijit Bhakta Bhakta";  //primitive string

let str2=new String("Arijit Bhakta");  //string object

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === str2);  //false ('is identical to' operator)

console.log(str1.length);

console.log(str1.charAt(3));

console.log(str1.charCodeAt(0));   //returns the unicode value of a character

console.log(str1[3]);   //returns the 4th character of the string

console.log(str1.indexOf("Bhakta"));   //returns the index of the first occurrence

console.log(str1.lastIndexOf("Bhakta"));

let newStr=str1.replace("Bhakta", "Das");   //replace() method is case sensitive and only matches the first occurrence
console.log(newStr);

console.log(str2.toLowerCase());

console.log(str2.toUpperCase());

let myRegex=/(Bhakta)/g;
let updatedName=str1.replace(myRegex, "Das");
console.log(updatedName);

let updatedName2=str1.replaceAll("Bhakta", "Das");   //replaceAll()  ES2021 feature
console.log(updatedName2);

let name1="Raktim";
let name2="Karmakar";
console.log(name1.concat(name2));   //to concatenate two string

console.log(name1.concat(" ", name2));   //to give a space between the concatenated string

let fruits="Apple, Banana, Kiwi";

console.log(fruits.slice(7, 13));   //to extract a part of the string (here the second parameter is excluded)
console.log(fruits.slice(-12));     //counts from the last position (counting starts from -1)
console.log(fruits.slice(-12, -6)); 

console.log(fruits.substring(7, 13));  //same output as slice()
console.log(fruits.substring(-5, 5));    //substring() method treates -ve value as 0

console.log(fruits.substr(7, 6));    //deprecated 
console.log(fruits.substr(7));    //If you omit the second parameter, substr() will slice out the rest of the string.

let myStr="          Arijit Bhakta        ";
console.log(myStr.trim());    //it removes the leading and trailing whitespaces of the string
console.log(myStr.trimStart());     //it removes only the leading whitespaces of the string
console.log(myStr.trimEnd());   //it removes the only trailing whitespaces of the string

let myStr2="My name is Arijit Bhakta";   
console.log(myStr2.split(" "));    //converts a string into an array using a separator (i.e. ,:' '-_|)
console.log(myStr2.split(""));
console.log(myStr2.split());   // the returned array will contain the whole string in index [0]

let num=123;
let newNum=String(num);   //Number to String conversion

console.log(typeof newNum);
console.log(newNum);

let myNum=Number("123");   //String to Number conversion
console.log(typeof myNum);