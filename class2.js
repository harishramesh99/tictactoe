const string = "hello world";

for (const char of string)
     {
        console.log(char)
    ;}

const activity = {
    first_name: 'John',
    last_name: 'Doe',
    age: 30,
    grade: 90
};

for (let property in activity) {
    console.log(property + ":" +activity[property]);
}


for ( let i= 0 ; i < 200; i++){
    if( i % 2 === 0  ){
        console.log(i)

    }

}

/* Generate a random number between 1 and 100
let gameNumber = 42;

// Variable to store the user's guess
let userGuess = null;

// Loop until the user guesses the correct number
while (userGuess !== gameNumber) {

  // Prompt the user for a guess
  userGuess = parseInt(prompt("Guess the game number (between 1 and 100):"), 10);
  
  // Check if the user's guess is correct
  if (userGuess < gameNumber) {
    alert("Too low! Try again.");
  } else if (userGuess > gameNumber) {
    alert("Too high! Try again.");
  } else if (userGuess === gameNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert("Invalid input. Please enter a number.");
  }
} */

// Define two strings
let str1 = "Hello, ";
let str2 = "World!";

// Concatenate the strings using the concat() method
let concatenatedString = str1.concat(str2);

// Calculate the length of the concatenated string
let lengthOfConcatenatedString = concatenatedString.length;

// Display the concatenated string and its length
console.log("Concatenated String: " + concatenatedString);
console.log("Length of Concatenated String: " + lengthOfConcatenatedString);

// Use various string methods

// Use charAt() method
let charAtIndex5 = concatenatedString.charAt(5); // Should return ','

// Use indexOf() method
let indexOfW = concatenatedString.indexOf('W'); // Should return 7

// Use lastIndexOf() method
let lastIndexOfL = concatenatedString.lastIndexOf('l'); // Should return 9

// Use replace() method
let replacedString = concatenatedString.replace('World', 'JavaScript'); // Should return "Hello, JavaScript!"

// Display the results
console.log(`Character at index 5: ${charAtIndex5}`);
console.log(`Index of 'W':  ${indexOfW}`);
console.log(`Last index of 'l':  ${lastIndexOfL}`);
console.log(`String after replacement:  ${replacedString}`);


// Prompt the user to enter their full name
let fullName = prompt("Please enter your full name:");

// Use trim() to remove any leading or trailing whitespace
fullName = fullName.trim();

// Generate the username
let username = "@" + fullName + fullName.length;

// Display the username
console.log("Generated Username: " + username);

// Demonstrate the use of various string methods

// toLowerCase()
let lowerCaseName = fullName.toLowerCase();
console.log("Lowercase: " + lowerCaseName);

// toUpperCase()
let upperCaseName = fullName.toUpperCase();
console.log("Uppercase: " + upperCaseName);

// includes()
let includesName = fullName.includes("name"); // Adjust "name" to test
console.log("Includes 'name': " + includesName);

// substring()
let substringName = fullName.substring(0, 5); // First 5 characters
console.log("Substring (0, 5): " + substringName);

// slice()
let sliceName = fullName.slice(1, 6); // Characters from index 1 to 5
console.log("Slice (1, 6): " + sliceName);

// Escape sequences example
let escapeSequenceExample = "Hello,\nThis is a line break.\nAnd this is a tab:\tTabbed text.";
console.log("Escape Sequences Example:\n" + escapeSequenceExample);


   