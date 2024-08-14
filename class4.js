//Calculate the Average of an 8 elements array using for loop.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;        
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbers.length;
console.log(average);


//This array is storing price for 6 items[100,150,250,300,350,420].All items have an offer of 25%off on them. Store the new prices in an Array,using while loop.

const prices = [100, 150, 250, 300, 350, 420];
const newPrices = [];
let i = 0;  
while (i < prices.length) {
  newPrices.push(prices[i] * 0.75);
  i++;
}

console.log(newPrices);

//Create a function using the “function” keyword that takes a string as an argument & returns the number of vowels in the string

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
 
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}



const countVowels1 = (str) => {
    const vowels = 'aeiouAEIOU';
    const chars = str.split('');

    const filteredVowels = chars.filter(char => {
        for (let vowel of vowels) {
            if (char === vowel) {
                return true;
            }
        }
        return false;
    });

    console.log(str);
    return filteredVowels.length;
};

// Example usage:
console.log(countVowels1("Hello World")); // Output: "Hello World" and 3


console.log(countVowels('Hello World')); // 

// Function to calculate the average grade
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    return sum / grades.length;
  }
  
  // Function to determine the pass or fail status based on the average grade
  function determineStatus(average) {
    return average >= 60 ? "pass" : "fail";
  }
  
  // Function to process student records
  function processStudents(students) {
    for (let i = 0; i < students.length; i++) {
      const average = calculateAverage(students[i].grades);
      students[i].status = determineStatus(average);
    }
  }
  
  // Function to generate the summary report
  function generateSummaryReport(students) {
    let report = "Summary Report:\n";
    for (let i = 0; i < students.length; i++) {
      const average = calculateAverage(students[i].grades).toFixed(2);
      report += `Name: ${students[i].name}, Average Grade: ${average}, Status: ${students[i].status}\n`;
    }
    return report;
  }
  
  // Sample array of student records
  const students = [
    { name: "Alice", grades: [85, 90, 78], status: "" },
    { name: "Bob", grades: [70, 65, 80], status: "" },
    { name: "Charlie", grades: [95, 88, 92], status: "" },
    { name: "David", grades: [60, 55, 50], status: "" }
  ];
  
  // Process the student records
  processStudents(students);
  
  // Generate and print the summary report
  const summaryReport = generateSummaryReport(students);
  console.log(summaryReport);
  