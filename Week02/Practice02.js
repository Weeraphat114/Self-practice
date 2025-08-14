/* 1. Shallow Equality Check
Question: Create a function shallowEqual(obj1, obj2) that returns true
if both objects have the same keys and values, otherwise false. */
let a = {name: "Weeraphat", age: 20}
let b = {name: "Weeraphat", age: 20}
function shallowEqual (obj1, obj2) {
    let keyA = Object.keys(obj1)
    let keyB = Object.keys(obj2)

    if (keyA.length !== keyB.length) return false

    for (let key of keyA) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}
console.log(shallowEqual(a, b))

/* 2. Object (destructuring)
Question: Create a function printPerson(person) that uses object destructuring to extract name
 and age properties and logs them in the format: */
let person1 = {name: 'John', age: 33, city: "Bangkok"}
let person2 = {name: 'Peter', age: 30, city: "Newyork"}
function printPerson(person) {
    let {name, age} = person
    console.log(name, age);
}
printPerson(person1); 
printPerson(person2); 


/* 3. Object (stringify)
 Create a function toJSONString(obj) that converts an object to a JSON string. Then write another function isSameJSONString(obj1, obj2)
 that returns true  if both objects have the same JSON string representation. */
function toJSONString(obj) {
    return JSON.stringify(obj)
}
let f1 = { name: "Pete", age: 18 };
console.log(toJSONString(f1));

function isSameJSONString(obj1, obj2) {
    if(JSON.stringify(obj1) == JSON.stringify(obj2)) {
        return true
    }
    return false
}
let f2 = { name: "Pete", age: 18 };
let f3 = { name: "Pete", age: 20 };
console.log(isSameJSONString(f1, f2));
console.log(isSameJSONString(f1, f3));


/* 4. Nested Object Destructuring 
Question: Create a function getFullName(user) that uses nested object destructuring
to extract firstName and lastName from user.profile and return them as a string.*/
let user1 = {id: 114, profile: {firstName: "Peto", lastName: "Suknivatsiri"}};
function getFullName(user) {
    let { profile: {firstName, lastName}} = user
    return `${firstName} ${lastName}`
}
console.log(getFullName(user1));

/* 5. Nested Destructuring with Defaults 
Question: Create a function getUserInfo(user) that uses nested object destructuring
to extract 'firstName', 'lastName', and 'city' from user.profile.address.
If 'city' is missing, default it to "Unknown".
Return an object with { fullName, city }.*/
let user2 = {id: 114, profile: {firstName: "Weeraphat", lastName: "Suknivatsiri"}, address: {}}
function getUserInfo(user) {
    let { profile: {firstName, lastName}, address: {city = "unknown"}} = user
    return { fullname: `${firstName} ${lastName}`, city}
}
console.log(getUserInfo(user2));
