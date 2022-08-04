var friendsAge = [11, 21, 45, 17, 14, 105, 6];

var picnicFee = [5000, 2000, 4000, 150];

var naikas = ["abc", "def", "ghi", "jkl"];

var vowels = ["a", "e", "i", "o", "u"];

//Total output
console.log(friendsAge);

//Lenght Output
console.log(friendsAge.length);

// 1. Get element value by Index
var element = friendsAge[1];
console.log(element);

// 2. Set element value by Index

friendsAge[1] = 55;
friendsAge[3] = 66;
console.log(friendsAge);

// 3. find index of an element

var positionIndex = friendsAge.indexOf(45);
console.log(positionIndex);

// 4. find index of an undefine element

var positionIndex = friendsAge.indexOf(550);
console.log(positionIndex);


////

console.log(picnicFee);

console.log(picnicFee.length);

console.log(naikas);

console.log(naikas.length);

console.log(vowels);

console.log(vowels.length);

