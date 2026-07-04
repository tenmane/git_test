// String indexing
let text = "ABCDEHF5"
console.log(text.at(-1));
console.log(text.charAt(2));
console.log(text.charCodeAt(5));
console.log(text.codePointAt(2));
console.log(text[2]);

// Concatination
let text1 = "Hello"
let text2 = "World"
console.log(text1.concat(", ", text2))
console.log(text1 + ", " + text2);

// Parts
let text3 = "Kanel Joseph 25";
console.log(text3.slice(5, 8));
console.log(text3.slice(7));
console.log(text3.slice(-6, -2));
console.log(text3.substring(7));
console.log(text3.substring(-1));

// Cases
let text4 = "hello";
console.log(text4.toUpperCase());
console.log(text4.toLowerCase());

//Trim
let text5 = " JAJAJA ";
console.log(text5.trim());
console.log(text5.trimStart());
console.log(text5.trimEnd());

//Padding
let text6 = "Disrespect the 5";
console.log(text6.padStart(20, "0"));
console.log(text6.padEnd(20, 0));

//Repeat and Replace (case-sensitive)
let text7 = "Yo";
console.log(text7.repeat(3));

let text8 = "Kanye West West";
console.log(text8.replace("West", "East"));

// i makes it case insensitive
console.log(text8.replace(/WEST/i, "Run"));

// g replaces all
console.log(text8.replace(/West/g, "South"));
console.log(text8.replace(/West/ig, "North"));

// replaceAll method
console.log(text8.replaceAll("West", "Forward"))
// g has to be there
console.log(text8.replaceAll(/WEST/ig, "Backward"));

//String to array
let text9 = "Barrack,Obama";
let myArray = text9.split(",");
console.log(myArray[0]);
console.log(myArray[1]);
let myArray1 = text9.split("");
console.log(myArray1[0]);
console.log(myArray1[1]);
let myArray3 = text9.split("|");
console.log(myArray3[0]);
console.log(myArray3[1]);