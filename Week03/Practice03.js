/* 1. Word Frequency Counter
Write a function getFreqOfWords (sentence) that returns an object with keys representing unique words
in lowercase and values representing the frequency of occurrences of each word with ignore case in the sentence.
If the input string is null or undefined, return undefined.
Output:
   - console.log(getFreqOfWords('Today is present and present is your gift'))
    //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
   - console.log(getFreqOfWords('Do you best just do it'))
    //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
   - console.log(getFreqOfWords (null)) //undefined
   - console.log(getFreqOfWords (undefined)) //undefined */
function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) return undefined
    let count = {}
    let words = sentence.toLowerCase().split(" ") // ไว้ใช้แยกคำ!!
    for(let word of words) {
        if(count[word]) {
            count[word] += 1
        } else {
            count[word] = 1
        }
    }
    return count
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined

/* 2. Function Declaration 
Question: Write a function declaration factorial(n) that calculates the factorial of a number using recursion. */
function factorial(n) {
    if (n < 0) return undefined
    if (n == 0) return 1
    return n * factorial(n-1)

    
}
console.log(factorial(4));

/* 3. Function Expression (Arrow Function)

Question: Write a function multiply(a, b) as an Arrow Function Expression that returns the product of two numbers. */
let multiply = (a, b) => a * b 
console.log(multiply(2,2));

/* 4. Function Expression (Assigned Function)
Question:
Write a function divide(a, b) using Function Expression (not arrow) that divides two numbers.
If b = 0, return "Error: divide by zero". */
let divide = function(a, b) {
    if (b === 0) return "Error: divide by zero";
    return a / b;
};
console.log(divide(10, 2));

/* 5. Arguments Object

Question: Write a function showArgs() that uses the arguments object to log all arguments passed into the function. */
function showArgs() {
    for(argu of arguments) {
        console.log(argu);   
    }
}
console.log("Phatrawee", 20, "Bangkok");

/* 6. Rest Parameter

Question:
Write a function sumAll(...nums) using the rest parameter to sum all numbers passed into it. */
function sumAll(...nums) {
    let sum = 0
    for(num of arguments) {
        sum += num
    }
    return sum
}
console.log(sumAll(1, 2, 3, 4, 5));

/* 7. Spread Operator (Normal)

Question: Write a function copyAndAdd(arr, num) that uses the spread operator to:
Copy the original array,
Add a new number at the end,
Return the new array without modifying the original one */

function copyAndAdd (arr, num) {
    let newArr = [...arr, num]
    return newArr 
}
let numbers = [1, 2, 3]
let result = copyAndAdd(numbers, 4)
console.log(numbers); //Original
console.log(result);// add 4 in array

