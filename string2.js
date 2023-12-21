let str="Arijit Bhakta Bhakta Bhakta";

console.log(str.indexOf("Bhakta", 10));    //counting will start from 10th index and from 10

console.log(str.lastIndexOf("Bhakta", 19));   //backward to forward searching (make sure the second parameter is provided)

let str2="The rain in SPAIN stays mainly in the plain";

let arr=str2.match(/ain/gi);

console.log(arr);

console.log(str.includes("kta"));   //checks whether the specified substring present in the string or not