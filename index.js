//console.log("Hello World!");

const myArr = ["Hello", "World", "From", "A", "Array", "Of", "Strings"];

let newArr = [1,2,3,4,5,6,7,8,9,10];

// let myObject = {
//     1: "Hello",
//     2: "World!"
// }

const myNumber = 25;

const newStringArray = ["Hello", "From", "Another", "String", "Array"];

console.log("First for-loop example..\n");
// normal for loop, that loops through an array of strings, using array indexing, in this case the variable i.
for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

console.log("Second for-loop example..\n");
// normal forof loop, that loops trough each element in the array, using elements or a subarray/new array that copies the data and lets you modify it.
for(let numArr of newArr) {
    console.dir(numArr);
    
}
console.log("End of forOf loop!\n");

// // for loop that loops through a JavaScript Object.
// for(let k = 0; k < myObject.length; k++) {
//     console.log(myObject);
// }

// // use a array method to modify the JavaScript Object.


// myObject.filter((newObject, i) => {
//     console.log(newObject[i]);
// })

console.log("while true loop example that iterates from 0 to 25.");
let myIterator = 0;

while (true) {
    myIterator++; // myIterator + 1;
    if (myIterator >= myNumber) {
        console.log(myIterator);
        break
    }
    else {
        console.log(myIterator);
    }
}

// console.log("\nSecond example of while-loop that iterates from 0 to 25.");

// let newIterator = 0;

// while(myNumber <= 26) {
//     newIterator++;
//     console.log(newIterator);
//     break
// }


newStringArray.forEach((newStr, i) => {
    console.log(newStr.repeat(i));
    console.log("Newline starts here: \n");
    console.log(newStr.slice(1, 3));
    console.log("new string lenght: ")
    console.log(newStr.length);
})