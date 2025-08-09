/* 1. Function Array Basics + for-loop
Question: Write a program that counts how many numbers in the array are greater than 10. */
function countGreater(numbers) {
    let count = 0
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] > 10) {
        count++
      }
    }
    return count
}
console.log(countGreater([3, 15, 7, 20, 9]));



/* 2. Array + Object
Question: Given an array of student objects, print the names of students who passed (score ≥ 50). */
let students = [{name: "John", score: 50}, {name: "Peter", score: 40}, {name: "polarbear", score: 70}]
for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
        console.log(students[i].name);
    }
}

/* 3. Sum of Array Elements
Question: Find the sum of all even numbers in the array. */
function sumEvenNumbers (numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        sum += numbers[i]
    }
    }
    return sum
}
console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

/* 4. Function + Transform Array
Question: Create a function addVAT(prices) that returns a new array of prices including 7% VAT. */
function addVAT(prices) {
    let newPrices = []
    for (let i = 0; i < prices.length; i++) {
        newPrices.push(prices[i] * 1.07)
    }
    return newPrices
}
console.log(addVAT([100,200,300]));

/* 5. Function + Object + Loop
Question: Create a function findOldest(people) that returns the name of the oldest person in the array of people. */
function findOldest(people) {
    let oldest = people[0]
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > oldest.age) {
            oldest = people[i];
        }   
    }
    return oldest.name
}
let people = [{name: "Tom", age: 30}, {name: "Jerry", age:35}, {name: "Anna", age:29}]
console.log(findOldest(people));
