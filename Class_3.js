// Creating an array named fruits with initial elements
const fruits = ["Apple", "Banana", "Cherry"];

// Creating an empty array named vegetables
const vegetables = [];
// Adding elements to the vegetables array one by one
vegetables.push("Carrot");
vegetables.push("Broccoli");
vegetables.push("Spinach");

// Modifying the fruits array by adding "Mango" to the end
console.log(`Add a element to the end in fruits: ${fruits.push('Mango')} ${fruits}`);

// Removing the last element from the fruits array and storing it in a variable named lastFruit
const lastFruit = fruits.pop();
console.log(`Store last fruit: ${lastFruit}`);

// Deleting the second element ("Banana") from the fruits array using the delete keyword
delete fruits[1];
console.log(`Delete 2nd element from fruits: ${fruits}`);

// Adding "Grapes" to the beginning of the fruits array
fruits.unshift('Grapes');
console.log(fruits);

// Copying the last two elements of the fruits array and placing them at the beginning using the copyWithin method
fruits.copyWithin(0, -2);
console.log(`Copy within: ${fruits}`);

// Creating a new array named numbers with elements 1, 2, 3, 4, 5
const numbers = [1, 2, 3, 4, 5];

// Adding the number 6 to the end of the numbers array
numbers.push(6);
console.log(numbers);

// Removing the first number from the numbers array
numbers.shift();
console.log(numbers);

// Deleting the third element from the numbers array
delete numbers[2];
console.log(numbers);

// Using Array.flat method to flatten a nested array
const subNumbs = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const normnum = subNumbs.flat();
console.log(`Flat: ${normnum}`);

// Using the map method to create a new array with the 10 times the previous values
const tenX = normnum.map(num => num * 10);
console.log(`Map: ${tenX}`);

// Performing operations on the colors array
const colors = ["red", "green", "blue", "yellow"];
// Removing the color "green" from the array
colors.splice(1, 1);
console.log(colors);

// Adding "purple" and "orange" between "blue" and "yellow"
colors.splice(2, 0, "purple", "orange");
console.log(colors);

// Filtering only numeric values from the array
const arr = ["Jan", "Feb", "Mar", "Apr", 1, 2, 3];
const numericValues = arr.filter(ele => typeof ele === 'number');
console.log(numericValues);

let fruitsUpdate = ['apple', 'banana', 'cherry', 'apple', 'orange',
    'banana', 'grape'];

 const ban = fruitsUpdate.indexOf('banana');
    console.log(`banana index: ${ban}`);  
    
const banlast = fruitsUpdate.lastIndexOf('banana');
console.log(`last banana index: ${banlast}`);

const checkOrange = fruitsUpdate.includes('orange');

console.log(`Check orange: ${checkOrange}`);

const fiveWord = fruitsUpdate.find(fruit => fruit.length === 5);

console.log(`Five letter word: ${fiveWord}`);

//Find the index of the first fruit in the array that starts with the letter 'c'.
let cWord = fruitsUpdate.findIndex(fruit => 
   { if(fruit[0] === 'c') 
        return fruit;
    });
   // (fruit.[0].tolowercase === 'c');
//Find the last fruit in the array that contains the letter 'a'.
const aWord = fruitsUpdate.findLastIndex(fruit => fruit.includes('a'));
//Find the index of the last fruit in the array that has exactly 5 letters.
const fiveWordIndex = fruitsUpdate.findLastIndex(fruit => fruit.length >= 5);
console.log(`Index of first fruit starting with 'c': ${cWord}`);
console.log(`Index of last fruit containing 'a': ${aWord}`);
console.log(`Index of last fruit with 5 letters: ${fiveWordIndex}`);
//console.log(`index of first fruit starting with 'c' ${cWord}`);



