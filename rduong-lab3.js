// Raymond Duong
// ITMD441 Undergraduate Student 

// Exercise 1
function minMaxAverage(numbers) {
    const emptyMsg = "Array contains no numbers."
    const arrTotal = numbers.length;
    if (arrTotal === 0) {
        return emptyMsg;
    }
    const arrMin = Math.min(...numbers);
    const arrMax = Math.max(...numbers);
    const arrAverage = (numbers.reduce((sum, num) => sum + num , 0) / numbers.length).toFixed(2);

    console.log(`Total Numbers: ${arrTotal}, Min Value: ${arrMin}, Max Value: ${arrMax}, Average: ${arrAverage}`)

}

// Test Case 1 
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
//  -> Total Numbers: 8, Min Value: 1, Max Value: 12, Average: 6.25

// Test Case 2
minMaxAverage([]);
// -> Array contains no numbers.

// Test Case 3
minMaxAverage([3, 5, 7, 2, 10, 4]);
// -> Total Numbers: 6, Min Value: 2, Max Value: 10, Average: 5.17


// Exercise 2
function countVowels(word) {
    if (word === "") {
       return "You must enter a word."; 
    }
    const vowels = ["a", "e", "i", "o", "u"];
    const vowelCount = word.split('').filter(letter => vowels.includes(letter.toLowerCase())).length;
    console.log(`${word}: ${vowelCount} vowels`);
}

// Test Case 1 
countVowels("Winter");
// -> Winter: 2 vowels

// Test Case 2
countVowels("Crypt");
// -> Crypt: 0 vowels

// Test Case 3
countVowels("");
// -> You must enter a word.

// Exercise 3
function sortNumbers(numbers) {
    if(numbers.length === 0) {
        return "Your array cannot be empty";
    }
    console.log(`Original Array: [${numbers}] Sorted Array: [${numbers.sort()}]`);
}

// Test Case 1 
sortNumbers([9, 4, 6, 2]);
// -> : Original Array: [9, 4, 6, 2] Sorted Array: [2, 4, 6, 9]

// Test Case 2 
sortNumbers([1, 2, 3 ,4]);
// -> : Original Array: [1, 2, 3 ,4] Sorted Array: [1, 2, 3 ,4]

// Test Case 3
sortNumbers([]);
// -> Your array cannot be empty.

// Exercise 4 
function celsiusToFahrenheit(tempC) {
    const tempCFloat = parseFloat(tempC).toFixed(1);
    const tempF = parseFloat((tempC * (9/5)) + 32).toFixed(1);
    console.log(`${tempCFloat} Celsius = ${tempF} Fahrenheit`);
}

// Test Case 1
celsiusToFahrenheit(30);
// -> 30.0 Celsius = 86.0 Fahrenheit

// Test Case 2
celsiusToFahrenheit(1.23);
// -> 1.23 Celsius = 34.2 Fahrenheit

// Test Case 3
celsiusToFahrenheit(0); 
// -> 0.0 Celsius = 32 Fahrenheit