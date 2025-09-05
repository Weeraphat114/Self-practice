const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
function getPassingNames () {
    return studentScores.filter((studentScores) => studentScores.score >= 70).map((studentScores) => studentScores.name.toUpperCase())
}
const passingNames = getPassingNames(studentScores)
console.log(passingNames);

/* Q1. Anonymous Arrow Function + Reverse
Task: Write an anonymous arrow function assigned to a variable reverseString that reverses a string.
*/
const reverseString = (str) => str.split("").reverse().join("")
console.log(reverseString("Weeraphat")); // "tahpareeW"

/* Q2. Anonymous Function Declaration + Merge
Task: Create an anonymous function declaration assigned to a variable mergeStrings.
It should merge any number of strings into one, separated by " ". */
let mergeStrings = function(word1, word2, word3) {
    return `${word1} ${word2} ${word3}`
}
console.log(mergeStrings("Hello", "Pete", "AI"));// "Hello Pete AI"

/* Q3. Reusable Callback + Sort + localeCompare
Task: Write a reusable callback alphabeticalSort using localeCompare.
Use it inside .sort() to sort names alphabetically (case-insensitive). */
//["Anna", "Bob", "pete", "weeraphat"]
let names = ["pete", "Anna", "weeraphat", "Bob"];
let alphabetically = names.sort((a, b) => a.localeCompare(b))
console.log(alphabetically);

/* Q4. Convert Array to String + Reverse
Task: Write a function reverseWords(sentence) that: Splits sentence into words.
Reverses the array.
Converts back into a string. */
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ")
}
console.log(reverseWords("I love JavaScript"));//"JavaScript love I"

/* Q5. Combine: Filter + Map + Reverse + toString
Task: Given an array of numbers, filter out the odd numbers.
Reverse the even numbers array.
Convert it into a string joined by " - ". */   
// Output: "8 - 6 - 4 - 2"
let nums = [1,2,3,4,5,6,7,8];
let reverseEvenNumbers = nums.filter((nums) => nums % 2 == 0).reverse().join(" - ").toString()
console.log(reverseEvenNumbers);

