// Splice ( position, deleteCount, elements to insert)
let arr = [1, 2, 3];
arr.splice(2, 1);
console.log(arr);

let arr1 = [4, 5, 6];
arr1.splice(0, 1, 1, 2);
console.log(arr1);

let arr2 = [1, 2, 5];
arr2.splice(-1, 0, 3, 4);
console.log(arr2);

// Slice ( [start] , (end) )
let arr3 = ["t", "e", "s", "t"];
slicedArr = arr3.slice(1, 3);
console.log(slicedArr);

slicedArr = arr3.slice(-2);
console.log(slicedArr);

console.log(arr3.slice());

// Concat
let arr4 = [1, 2];
let concatedArr = arr4.concat([3, 4]);
console.log(concatedArr);

concatedArr = arr4.concat([3, 4], 5, 6);
console.log(concatedArr);

//forEach (function())
let arr5 = ["A", "B", "C"];
console.log(arr5.forEach(console.log));


// indexOf, includes, and lastIndexOf ( item, from -> optional )
let arr6 = [1, 0, false];
console.log(arr6.indexOf(false));
console.log(arr6.includes(1));
let arr7 = [1, 0, 1];
console.log(arr7.indexOf(1));
console.log(arr7.lastIndexOf(1));

//find and findIndex/findLastIndex find(function()) - basically find with condition
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" }
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John
console.log(users.findIndex(user => user.name == 'John')); // 0
console.log(users.findLastIndex(user => user.name == 'John')); // 0


//filter (function())
let users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];

let someUsers = users1.filter(item => item.id < 3);
console.log(someUsers);

// map (function())
let lengths = ["AS", "BRE", "ARETD"];
let result = lengths.map(item => item.length);
console.log("before map: " + lengths);
console.log("The result of map: " + result);

// sort() , sorts them as strings
let arr8 = [1, 2, 15];
arr8.sort();
console.log(arr8);

// to sort as integer:
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr9 = [1, 15, 2];

arr9.sort(compareNumeric);

console.log(arr9);

//reverse()
let arr10 = [3, 42, 512, 45];
arr10.reverse();
console.log(arr10);

//split(delim)
let names = "joe, alex, tyrone";
let arr11 = names.split(", ");
console.log(arr11);
let arr12 = names.split(", ", 2);
console.log(arr12);
let arr13 = names.split('');
console.log(arr13);

//join(glue)
let arr14 = ["James", "Rock", "Weight"];
let str = arr14.join(";");
console.log(str);

//reduce(function()) applied to all array elements one after another and carries on its result to the next call
let arr15 = [1, 2, 3, 4, 5];
let result1 = arr15.reduce((sum, current) => sum + current, 0);
// sum = 0, current = element of array
// if 0 wasnt there, sum = first element, current starts from second element
console.log(result1);
//reduceRight(function()) same thing, but from right to left

//isArray()
console.log(Array.isArray({}));
console.log(Array.isArray([]));
