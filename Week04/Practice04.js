/* 1. Anonymous Arrow Function
Question: Write an anonymous arrow function to square a number and assign it to a variable square. */
let square = ((x) => x * x)
console.log(square(5));

/* 2. Anonymous Function Declaration 
Question: Write an anonymous function assigned to a variable greet that takes a name and returns "Hello, <name>". */
let greet = function(name) {
    return `Hello, ${name}.`
}
console.log(greet("User"));

/* 3. Reuse Callback Function 
Question: Write a reusable callback isPrime(num) to check if a number is prime.
Then use it inside filter to get all prime numbers from [1,2,3,4,5,6,7,8,9,10]. */
let numbers = [1,2,3,4,5,6,7,8,9,10]
function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num);i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
let checkPrime = numbers.filter(isPrime)
console.log(checkPrime);

/* 4. forEach + includes (Normal)
Question: Use forEach and includes to count how many words in a sentence belong to a list of stopwords. */
let stopwords = ["is", "the", "a", "and"];
let count = 0;
let sentence = "This is a book and the pen red".split(" ");

sentence.forEach(word => {
  if (stopwords.includes(word)) {
    count++;
  }
});
console.log(count); 

/* 5.map + toUpperCase 
Question: Use map and toUpperCase() to transform an array of objects into an array of uppercase names only. */
let people = [
    {name: "john", age: 25},
    {name: "anna", age: 30},
    {name: "pete", age: 18}
];
let changeThewordUppercase = people.map ((people) => people.name.toUpperCase())
console.log(changeThewordUppercase);

/* 6. find (Normal-Hard)
Question: Use find to get the first product that costs more than 1000. */
let products = [
    {id:1, name:"Pen", price:20},
    {id:2, name:"Keyboard", price:1200},
    {id:3, name:"Monitor", price:3000}
];
let getProduct = products.find((find) => find.price > 1000)
console.log(getProduct);

/* 7. reduce (Hard)
Question: Use reduce to group students by grade (A, B, C). */
let students = [
    {name:"Tom", grade:"A"},
    {name:"Jerry", grade:"B"},
    {name:"Anna", grade:"A"},
    {name:"Bob", grade:"C"}
];
let listGradeStudents = students.reduce((accumulator, currentvalue) => {
    if (!accumulator[currentvalue.grade]) {
        accumulator[currentvalue.grade] = [] //ใช้สำหรับเก็บชื่อนักเรียนที่มีเกรดนั้น
    }
    accumulator[currentvalue.grade].push(currentvalue.name) //เพิ่มชื่อนักเรียนคนปัจจุบันใน array
    return accumulator
}, {})
console.log(listGradeStudents);

/* 8. findIndex + splice 
Question: Find the index of first "banana" and remove it using splice. */
let fruits = ["apple", "banana", "cherry", "banana"];
let findBanana = fruits.findIndex(fruits => fruits === "banana")
if (findBanana !== -1){
    fruits.splice(findBanana, 1) //removes just 1 item at that index.
}
console.log(fruits);

/* 9. slice + push (Hard)
Question: Split an array into two halves using slice, then push the second half into the first as a nested array. */
let nums = [1,2,3,4,5,6]
let first = nums.slice(0, 3)
let second = nums.slice(3)
first.push(second)
console.log(first);// [1,2,3, [4,5,6]]
