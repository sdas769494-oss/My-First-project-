//sum
let a = 10;
let b = 20;
let sum = a + b;
console.log("sum =", sum);

//Even or Odd

let num = 10;
if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Largest number

let x = 10;
let y = 26;
if (a > b) {
  console.log(x + " is largest");
}
{
  console.log(y + "is largest");
}

//factorial

let n = 7;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log("factorial =", fact);

//Multiplicaton table

let no = 6;
for (let i = 1; i <= 10; i++) {
  console.log(no + " * " + i + " = " + no * i);
}

//Reverse number
let str = "Sujit";
let reverse = str.split("").reverse().join("");
console.log(reverse);

//sum of array elements
let arr = [10, 20, 30, 40];
let s = 0;
for (let i = 0; i < arr.length; i++) {
  s += arr[i];
}
console.log("s =", s);

//swap two number
let c = 4;
let d = 10;
let temp = c;
c = d;
d = temp;
console.log("c=", c);
console.log("d=", d);

//Non primitive
const student = {
  name: "rahul",
  age: 20,
  cgpa: 4.4,
  ispass: true,
};
console.log(student["name"]);

//increment
let z = 6;
let m = 7;
console.log("z=", z & " m", m);
m--;
console.log("m= ", m);

let h = 6;
let j = 4;
h += 4;
console.log("h=", h);

//pratice
let score = 78;
if (score >= 90 && score <= 100) {
  console.log("grade A");
} else if (score >= 70 && score <= 89) {
  console.log("grade B");
} else if (score >= 60 && score <= 69) {
  console.log("grade C");
} else if (score >= 50 && score <= 59) {
  console.log("grade D");
} else if (score >= o && score <= 49) {
  console.log("grade F");
} else {
  console.log("invilde score");
}
//vote

let age = 23;
if (age >= 18) {
  console.log("you can vote.");
} else {
  console.log("you cannot vote.");
}

//if statement
let u = 10;
if (u >= 0) {
  console.log("positive number");
}
// check leap year
let year = 2026;
if ((year % 4 === 0 && yaer % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
//check the chaeacter

let ch = "A";
if (ch >= "A" && ch <= "Z") {
  console.log("uppercase letter");
} else if (ch >= "a" && ch <= "z") {
  console.log("lowercase letter");
} else {
  console.log("not an alphabet");
}

//for loop
for (let i = 1; i <= 8; i++) {
  console.log("sujit");
}
//while loop
let i = 1;
while (i <= 5) {
  console.log("i=", i);
  i++;
}
//do while loops
let r = 15;
do {
  console.log("ira");
  r++;
} while (r <= 5);

//for of loops
let fruits = ["Litchi", "Mango", "Banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
//let str = "ira";
//for (let val of str) {
//console.log("val=", val);
//}

//for in loop
let college = {
  name: "ira",
  age: 23,
  cgpa: 7.6,
  isPass: true,
  city: "Delhi",
};
for (let key in college) {
  console.log("key=", key);
}
//Create a game where you start with any random game number. Ask the user to keep gussing the number untill the user enters correct value.
//let gameNum = 30;
//let usernum = prompt("Guess the game number : ");
//while (userNum != gameNum) {
//userNum = prompt("You entered wrong number.Guess again : ");
//}
//console.log("Congratulations, you entered the right number");

//string
let specialString = `This is a template literal`;
console.log(specialString);
//new template literals
//let obj = {
//name: "book",
//price: 20,
//};
//let output = `The cost of ${obj.name} is ${obj.price} rupee`;
//console.log(output);
//uppercase
//let str2 = "debanjana";
//let str1 = str2.toUpperCase();
//console.log(str1);
//find sum of array elements
//let array = [10, 20, 30, 40];
//let sum2 = 0;
//for (let i = 0; i < array.length; i++) {
//sum2 += arr[i];
//}
//console.log("sum2 =", sum2);
//pratice 1 for a given with array with marks of students ->[85, 97, 44, 37, 76, 60] find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum5 = 0;
for (let val of marks) {
  sum5 += val;
}
let avg = sum5 / marks.length;
console.log("avg=", avg);

//partice 2 for a given array prices of 5 items ->[250, 645, 300, 900, 50] all items have an offers of 10% OFF on them.change the array to store final price after applying offer.
let price = [250, 645, 300, 900, 50];
for (let i = 0; i < price.length; i++) {
  let offer = price[i] / 10;
  price[i] -= offer;
}
console.log(price);

//Function without parametre
function great() {
  console.log("sujit");
}
great();

//fuction with parametre add

function add(a, b) {
  console.log(a + b);
}
add(10, 20);
//multiply return value
function multiply(a, b) {
  return a * b;
}
let result = multiply(3, 8);
console.log(result);

// Even & Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(9));

//find largest number
function largest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(largest(10, 30));
// function prime number

function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return "not prime";
    }
  }
  return "prime";
}
console.log(isPrime(40));

let number = 17;
if (isPrime(number)) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is a not a prime number");
}
//Arrow Function
const square = (num) => {
  return num * num;
};
console.log(square(6));

//Recursive Factorial
function factorial2(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial2(n - 1);
}
console.log(factorial2(5));
//Recursive Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

//check palindrome using function
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));

// Remove Duplicate Elements
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
//arrow function
function mul(a, b) {
  return a * b;
}
const arrowMul = (a, b) => {
  return a * b;
};
//Find the second largest num
function secondLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}
console.log(secondLargest([12, 40, 45, 57, 67, 8]));
//count words
function countWords(sentence) {
  return sentence.trim().split(" ").length;
}
console.log(countWords("i love coding "));

//Reverse num
function reverseNumber(num) {
  return Number(num.toString().split(" ").reverse().join(""));
}
console.log(reverseNumber(6516651616161));

//check Amstrong num
function isAmstrong(num) {
  let original = num;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
  }
  return sum === original;
}
console.log(isAmstrong(1277));

//Higher order function (function as parametre)
function calculate(a, b, operation) {
  return operation(a, b);
}
function sub(x, y) {
  return x - y;
}
console.log(calculate(10, 20, sub));

//create a function using the "function" keyboard that takes a string as an argument & returns the number of vowels in the string.
function countVowels(str) {
  for (const char of str) {
    if (
      chsr === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
//forEach
let list = ["Agartala", "delhi"];
list.forEach((items) => {
  console.log(items);
});
//q1 For a given arrey of number,print the square of each value using the foreach loop.
let nums = [3, 5, 7];
nums.forEach((num) => {
  console.log(num * num);
});
//filter method
//let lists = [10, 30, 38];
//et evenHigh = lists.filter((val)) =>
// {
// //return val % 2 ===0;
//});
//console.log(evenHigh);
//q2 We are given array of marks of students. filter out of the marks of atudents that scored 90.
let mark = [97, 64, 32, 49, 99, 96, 86];
let toppers = mark.filter((val) => {
  return val > 90;
});
console.log(toppers);

//Qs Take a number n as input from user. Create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let numbers = 6;
let array = [];
for (let i = 1; i <= numbers; i++) {
  array[i - 1] = i;
}
console.log(array);
let sum3 = array.reduce((res, curr) => {
  return res + curr;
});
console.log(sum3);
// 1) Name formatting
// you are given a list of names with capitalization. input:["john", "SARAH", "mike"]
//Task create a new array where each name starts with an upperscase letter and remaining letters are low
//expected a output: ["John", "Sarah", " Mike"]
let names = ["john", "Sarah", "MIke"];
let formattedNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
);
console.log(formattedNames);

//Total Sales a shop sold products worth: input: [120, 450, 300, 150]
//Task calculate the total sales amount. Expected Output 1020.
let sales = [120, 450, 300, 150];
let Total = sales.reduce((res, curr) => res + curr);
console.log(Total);
//Any students Failed input [85, 32, 76, 40, 18, 91]
//Task Determine whether at least one student falied (score below 40).Expected True.
let marks4 = [85, 32, 76, 40, 18, 91];
let passingMarks = marks4.filter((mark) => mark >= 40);
console.log(passingMarks);
//Any students Failed input[ 85, 32, 76, 18, 91]
//Task return a new array containig only marks that are 40 or greather.expected ouput [85,76, 40, 91]
let marks8 = [85, 32, 76, 18, 91];
let failed = marks8.some((mark) => mark < 40);
console.log(failed);
//Q5 Did Everyone pass? input: [85, 32, 76, 40, 18, 91];
//Task Determine whether every student passed.
let marks6 = [85, 32, 76, 40, 18, 91];
let everyonePassed = marks6.every((mark) => mark >= 40);
console.log(everyonePassed);
//Q6 Find first Adult input:[12, 15, 17, 21, 50]
//Task Find the first age that is 18 or above. Expected Output: 21
let ages = [12, 15, 17, 21, 50];
let adult = ages.find((age) => age > 18);
console.log(adult);
//Q7 Find adult position input: [12, 15, 17, 21, 30]
//task find the index of the first age that is 18 or above. Expected 3
let ages1 = [12, 15, 17, 21, 30];
let index = ages1.findIndex((age) => age >= 18);
console.log(index);
//Q8 product search input:["Milk", "Bread", "Eggs", " Rice"]
//Task Check whether "Eggs" Exists in the array. Expected Output: True.
let products = ["Milk", "Eggs", "Bread", "Rice"];
let exists = products.includes("Eggs");
console.log(exists);
// Q9 First and last Occurrence input: [101, 102, 103, 102, 104,102]
//Task Find: 1. The First Occurrence of 102 2. The last Occurence of 102 Expected 1 5
let numberss = [101, 102, 103, 102, 104, 102];
console.log(numberss.indexOf(102));
console.log(numberss.lastIndexOf(102));
//Q10 Add item to cart input: ["Milk", "Bread"]
//Task: add "Eggs" to the end of the array.Expected output: ["Milk", "Bread", "Eggs"]
let cart = ["Milk", "Bread"];
cart.push("Eggs");
console.log(cart);
//Q11 Remove last item input: ["milk", "Bread","Rice"]
//Task Remove the item.Expected Output: ["Milk", "Bread"].
let carts = ["Milk", "Bread", " Rice"];
carts.pop("Rice");
console.log(carts);
//Q12 -VIP Queue input:["A", "B", "C"]
//Task add "VIP" to the begginning of the Queue.Expected ["VIP", "A", "B","C"].
let queue = ["A", "B", "C"];
queue.unshift("VIP");
console.log(queue);
//Q13 Serve first Customer input: [ "VIP", "A", "B", "C"]
//Task Remove the first Customer. Expected Output: ["A", "B", "C"]
let queue1 = ["VIP", "A", "B", "C"];
queue1.shift("VIP");
console.log(queue1);
//Q14 Remove Banana input: ["Apple", "Banana", "Orange"]
//Task Remove "banana" from the the original array. Expected output: ["Apple", "Orange"].
let fruits1 = ["Apple", "Banana", "Orange"];
fruits1.splice(1, 1);
console.log(fruits1);
//Q15 Numerical sorting input: [200, 5, 1000, 20];
//Task sort the numbers from smallest to largest.Expected Output : [5, 20, 200, 1000]
let numbers3 = [200, 5, 1000, 20];
numbers3.sort((a, b) => a - b);
console.log(numbers3);
//Q16 Reverse Days input: ["Mon", "Tues", "wed", "Thu"].
//Task Reverse the array.Expected Output: ["Thu", "Wed", "Tues", "Mon"].
let days = ["Mon", "Tues", "wed", "Thu"];
days.reverse();
console.log(days);
//Q17 First three items input: ["A", "B", "C", "D"]
//Task: Without modifying the original array.Get the first three items.Expected Output: ["A", "B", "C"]
let letters = ["A", "B", "C", "D"];
let firstThree = letters.slice(0, 3);
console.log(firstThree);
//Q18 Combine Fruits input: ["Apple", "Banana"] ["Orange", "Mango"]
//task combine both array.Expected output
let friuts2 = ["Apple", "Banana"];
let fruits3 = ["Orange", "Mango"];
let allFruits = friuts2.concat(fruits3);
console.log(allFruits);
//Q19 CSV Generation input: ["HTML", "CSS", JAVASCRIPT]
//Task convert the array into a comma-separated string.Expected Output: HTML,CSS,JAVASCRIPT.
let skills = ["HTML", "CSS", "JAVASCRIPT"];
let csv = skills.join(",");
console.log(csv);
//Q20 Flatten Nested Arrays input: ["Apple", "Banana"],["orange", "Mango"]
//Task  convert it ingo a single flat array.
let fruit = [
  ["Apple", "Banana"],
  ["orange", "Mango"],
];
let flatFruits = fruit.flat();
console.log(flatFruits);
//Q21 Product variants input: [{name:"Shirt", colors:["Red", "Blue"]},{name:"shoes",colours:["Black"]}]
//Task Generate all product-color combinations.Expected
//let products1 = [
//{ name: "Shirt", colors: ["Red", "Blue"] },
//{ name: "shoes", colours: ["Black"] },
//];
//let variants = products1.flatMap((product) =>
//product.colors.map(colors) => '${product.name}-${color}'),
//);
//console.log(variants);

//Q22 fill Seats task: Create an array of lengh 5 & fill every position with "Available".
//["Available", "Available", "Available"."Available", "Available"]
let seats = new Array(5).fill("Available");
console.log(seats);
//Q23 String to array input:"HELLO"
//task convert the string into an array of characters.Expected output: ["H","E","L","L","O"]
let text = "HELLO";
let array9 = text.split("");
console.log(array9);
// Q24 Array Validation detremine each value is an array:[]{}"HELLO"null[1, 2, 3]
//Expected Ouutput: True false false false true.
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray("HELLO"));
console.log(Array.isArray(null));
console.log(Array.isArray([1, 2, 3]));

//Q25 print Names input: ["John", "Sarah", "Mike"]
//Task print each name on a separate line.
//let names1 = ["John", "Sarah", "Mike"];
//names1.forEach((name) => {
//console.log(names1);
//});
//Q26 print indexs input: ["Apple", "Banana", "Orange"]
let fruits4 = ["Apple", "Banana", "Orange"];
fruits4.forEach((Value, index) => {
  console.log(index);
});
//Q27 print index and value input:
//["Apple", "Banana", "Orange"]
let fruits7 = ["Apple", "Banana", "Orange"];
fruits7.forEach((Value, index) => {
  console.log(Value, index);
});
//Q28 comprehensive challenge
//input: const student = [
//  { name: "John", marks: 35}
//{name: "Sarah", marks: 82}
//{name: "Mike", marks: 65}
//{name: "Tom", marks: 20}
//{namw: "Enma", marks: 90}
//]
//Task 1 keep only students who passed (40+)
//2 Extract only their name
//3 sort names alphabetically
// 4 create a comma separated string of names.
// 5 count the number of students who passed
//6 find the first student who scored more then 80
// 7 Determine whether any student who scored below 30.
// 8 Determine whether every student passed.

//Q1 title case name difficulty; easy
//problem: convert a full name so that each word starts with an uppercase letter and the remainig letters are lowercase.
//Example input: formatName(Ira Das)
//function formatName(name) {
// return name
//.split(" ")
//.map((word) => word.charAt(0).toUpperCase() + word.slice(1).tiLowerCase())
//  .join(" ");
//}
//console.log(formatName("Ira Das"));
//Reverse & string difficuly: Easy problem: Return a new string with all characters revered.
//example input: "knkannfn"
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("bcjsbjbsbk"));
//Q3 Count vowels difficulty easy problem: count how many vowels exists in a string.
// input: countVowels("programming").
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming"));
//Q4 chracter Frequency problem: Return the frquency of every character in a string.
//input: countChars("progrsmming").
function countChars(str) {
  let frquency = {};
  for (let char of str) {
    if (frquency[char]) {
      frquency[char]++;
    } else {
      frquency[char] = 1;
    }
  }
  return frquency;
}
console.log(countChars("programming"));
//Q5 Remove Duplicate Elements problem: Return an array containig only unique values while preserving order.
// Example input: [1, 2, 2, 3, 4, 4, 5].
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//Q6 Find the longest word problem: Return the longest word from a sentence.
//input: TypeScript makes JavaScript more maintainable.
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("TypeScript makes JavaScript more maintainable"));
//Q7 Reverse word problem: Reverse the order of words in a sentence.
//input: "Hello world from ts".
function reverseWord(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWord("Hello world from ts"));
//Q8 check palindrome problem: Determine whether a string is a palindrome ignoring casing.
//input: "RaceCar".
function isPalindrome(str) {
  let text = str.toLowerCase();
  let reverse = text.split("").reverse().join("");
  return text === reverse;
}
console.log(isPalindrome("Racecar"));
//Q 9 Most frequency character problem: Return the character appering most frequently.
//input: "mississipp"
function mostFrequentChar(str) {
  let count = {};
  let max = 0;
  let result = "";
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] > max) {
      max = count[char];
      result = char;
    }
  }
  return result;
}
console.log(mostFrequentChar("miississippi"));
//Q 10 Find the miss number Problem: Array contains numbers from 1...n with one missing vlaue.
//input: [1, 2, 3, 5, 6].
function findMissing(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return total - sum;
}
console.log(findMissing([1, 2, 3, 5, 6]));
//Q 11 first non-repeating character that occurs only once.
//input:"aabbcdde".
function firstNonRepesting(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepesting("aabbcdde"));
//Q 12 valid Anagram Difficulty: Medium problem check if two string are anarams ignoring space and casing.
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
}
console.log(isAnagram("Dormitory", "Dirty Room"));
//Q13 Most Frequent Element problem: Return the element occuring the highest number of times.
//input: [1, 2, 2, 3, 2, 4, 1]
function mostFrequent(arr) {
  let count = {};
  let max = 0;
  let result;
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > max) {
      max = count[num];
      result = num;
    }
  }
  return result;
}
console.log(mostFrequent([1, 2, 2, 3, 2, 4, 1]));
//Q14 string compression problem: Compression consecutive repeating character using counts.
function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compressString("aaabbbcccc"));
//Q15 Group users by role.
//input:[{name:'John',role:'admin'},{name:'John',role:'user}]
function groupByRole(user) {
  let result = {};
  for (let user of users) {
    if (!result[user.role]) {
      result[user.role] = [];
    }
    result[user.role].push(user);
  }
  return result;
}
let users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Mike", role: "admin" },
];
console.log(groupByRole(users));
//Q16 Find all Duplicates problem:Retuen every value appearing more than once [1,2,3,2,4,5,4]
function findDuplicates(arr) {
  let seen = [];
  let Duplicates = [];
  for (let num of arr) {
    if (seen.includes(num) && !Duplicates.includes(num)) {
      Duplicates.push(num);
    } else {
      seen.push(num);
    }
  }
  return Duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4]));
//Q17 Array intersection problem: Return common elements between two arrays.
//input:[1,2,3,4] and [3,,4,5,6]
function intersection(arr1, arr2) {
  let result = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(intersection([1, 2, 3, 4], [3, , 4, 5, 6]));
//Q18 Array difference problem: Return elements present in first array but not second.
//inpt: [1,2,3,4] and [3,4,5]
function difference(arr1, arr2) {
  let result = [];
  for (let num of arr1) {
    if (!arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(difference([1, 2, 3, 4], [3, 4, 5]));
//Q19 longest common prefix problem: find longest common prefix among string.
//input: ["flower","flow", "flight"]
//function longestCommonPrefix(arr) {
//let prefix = arr[0];
//for (let i = 1; i < arr.length; i++) {
//while (!arr[i].startswith(prefix)) {
// prefix = prefix.slice(0, -1);
// if (prefix === "") {
//  return "";
//  }
// }
//}
//return prefix;
//}
//console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//Q 20 move zeros to end problem: move all zeros to end while preserivg order of others.
// output:[0,3,0,12,0]
function moveZeros(arr) {
  let result = [];
  for (let num of arr) {
    if (num !== 0) {
      result.push(num);
    }
  }
  while (result.length < arr.length) {
    result.push(0);
  }
  return result;
}
console.log(moveZeros([0, 3, 0, 12, 0]));
//Q 21 valid parentheses input:[[1,3],[2,6],[8,10],[9,12]]
//Input: [[1,6],[1,12]]
//function isValid(str) {
//let stack = {
//")": "(",
//")": ")",
//"(": "(",
//};
//for (let ch of str) {
// if (ch === "(" || ch === "(" || ch === "{") {
// stack.push(ch);
//} else {
//if (stack.pop() !== pairs[ch]) {
//return false;
// }
// }
//}
//return stack.length === 0;
//`}
//console.log(isValid("({[]})"));
//Q25 Rotate array problem: Rotate array right by k positions.
//input: [1,2,3,4,5], k=2
function RotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(RotateArray([1, 2, 3, 4, 5], 2));
//Q26 Mini groupBy Untilty problem: implement gentic groupBy(arr,key)
//input: groupBy(users,'role')
function groupBy(arr, key) {
  let result = {};
  for (let item of arr) {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }
    return result;
  }
  let users = [
    { name: "john", role: "admin" },
    { name: "jane", role: "user" },
    { name: "Mike", role: "admin" },
  ];
}
console.log(groupBy(users, "role"));
//Q27 flatten nested arrays problem: flatten nested array without using flat().
//input: [1,[2,3],[4,[5,6]]]
/*function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item));
    result = result.concat(flatten(item));
  } else  
  {
    result.push(item);
  }
  return result;
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));*/
//Q1 E-commerce discount engine an online rules applies discounts using the following rules: gold members get 20% off.silver
//members get 10% off.non members get no membership discount.if the cart value execeeds
//5000, an additionals 5% discount is applied, however, total discount cannot excced 25% determine the final discount percentage.
//input: member="silver",car=6000.
function calculateDiscount(member, cart) {
  let discount = 0;
  if (member === "Gold") {
    discount = 20;
  } else if (member === "silver") {
    discount = 10;
  }
  if (cart > 5000) {
    discount += 5;
  }
  if (discount > 25) {
    discount = 25;
  }
  return discount + "%";
}
console.log(calculateDiscount("silver", 6000));
// Job Application Screening A candidate qualifies if they have at least 2 years of experience and a degree.candidates with 5+
// years experience qualify even without a degree.Reject everyone below 18 years old.
//input:age=24,experience=6,degree=false.
function checkCandidate(age, experience, degree) {
  if (age < 18) {
    return "Rejected";
  }
  if ((experience >= 2 && degree) || experience >= 5) {
    return "Qualified";
  }
  return "Rejected";
}
console.log(checkCandidate(24, 6, false));
//Q3 shipping cost calculator order above 2000 get free shipping. Orders below
//500 cannot use free shipping even if a coupon is applied.
// input: premium=false, order=1800.
function shippingCost(premium, order) {
  if (premium) {
    return "Free Shipping";
  }
  if (order > 2000) {
    return "Free Shipping";
  }
  return "Shipping Requried";
}
console.log(shippingCost(false, 1800));
//University Admission Students need at laest 60% overall. if maths >= 90, allow admission with 55% overall.Any subject
// below 35 causes automatic rejection.
//input: overall=57,maths=92,physics=61,english=48.
function admission(overall, maths, physics, english) {
  if (maths < 35 || physics < 35 || english < 35) {
    return "Rejected";
  } else if (overall >= 60 || (maths >= 90 && overall >= 55)) {
    return "Admission";
  }
  return "Rejected";
}
console.log(admission(57, 92, 61, 48));
//Q6 movie recommendation
//Recommend 'Family' if age < age 13.
//Recommend 'teen' if age is 13-17.
//Recommend 'adult' if age >= 18.
function movieCategory(age) {
  if (age < 13) {
    return "Family";
  } else if (age >= 13 && age >= 17) {
    return "Teen";
  } else if (age >= 18) {
    return "Adult";
  }
  return "Teen";
}
console.log(movieCategory(12));
//Q5 ATM Withdrawal allow withdrawal only if pin is correct,amount is positive is a multipulrof 1000, and balance.
//remains at least 100 after withdrawal.
// input: balance=5000,amount=4900,pincorrect=ture.
function withdrawal(balance, amount, pinCorrect) {
  if (
    pinCorrect &&
    amount > 0 &&
    amount % 100 === 0 &&
    balance - amount >= 100
  ) {
    return "Approved";
  }
  return "deined";
}
console.log(withdrawal(5000, 4900, true));
//Q7 Loan Eligibility Approved if salary >= 50000 and credit score >= 700.if salary >= 100000, allow score >= 650.
//reject if age < 21.
//input: salary= 1100000,score=660,age =30.
function loanEligibility(salary, score, age) {
  if (age < 21) {
    return "Rejected";
  } else if (
    (salary >= 50000 && score >= 700) ||
    (salary >= 100000 && score >= 650)
  ) {
    return "Approved";
  }
  return "Rejected";
}
console.log(loanEligibility(110000, 660, 30));
//Q8 warehouse inventory alert stock < 10 => critical.stock 10-50=>low.stock 51-200=>Healthiy.above 200=>ovwestocked.
//input: stock=225.
function stockStatus(stock) {
  if (stock < 10) {
    return "Critical";
  } else if (stock <= 50) {
    return "Low";
  } else if (stock <= 200) {
    return "Heathly";
  } else {
    return "Overstock";
  }
}
console.log(stockStatus(225));
//Q9 Ride and surge base fare is determined elsewhere.apply surge.2x during peak,1.5x during rain,2.5x if both.
//condition occur together. input: peak=true,raning=ture.
function surgeFare(peak, rainig) {
  if (peak && rainig) {
    return "2.5x";
  } else if (peak) {
    return "2x";
  } else if (raning) {
    return "1.5x";
  }
  return "1x";
}
console.log(surgeFare(true, true));
//Q10 game achievment system score>=1000=>gold.score>=500=>silver.score>=200=>bronze.if playercompletedall missons,upgrade reward by one tier.
//input: score 550,allmissions=true
/*function reward(score, allMissions) {
  let tier;
  if (score >= 1000) {
    tie = "Gold";
  } else if (score >= 500) {
    tier = "Silver";
  } else if (score >= 200) {
    tier = "Bronze";
  } else {
    tier = "No Reward";
  }
  if (allMissions) {
    if (tier === "Bronze") tier = "Silver";
    else if (tier === "silver") tier = "Gold";
  }
  return tier;
}
console.log(reward(600, true));*/
//Q11 user access control admins access everything.Editors can edit but not manage users. Viwers can only view.
//suspend user cannot acess anything.
//input: role:'Admin',suspended=true.
function access(role, suspended) {
  if (suspended) {
    return "Access Denied";
  }
  if (role === "Admin") {
    return "Full Access";
  } else if (role === "Editor") {
    return "Edit Access";
  } else {
    return "View only";
  }
}
console.log(access("Admin", true));
//Q12 Exam result processing pass if average >= 40.distinction if average >= 70 and every subject >= 60.fail if any subject < 30.
//input: marks=[82,79,65,71]
function examResult(marks) {
  let sum = 0;
  for (let mark of marks) {
    if (mark < 30) {
      return "Fail";
    }
    sum += mark;
  }
  let average = sum / marks.length;
  let allAbove60 = true;
  for (let mark of marks) {
    if (mark < 60) {
      allAbove60 = false;
    }
  }
  if (average >= 75 && allAbove60) {
    return "Distinction";
  } else if (average >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(examResult([82, 79, 65, 71]));
//Q13 Restaurant coupon validation coupon vaild only on order above 1000.weekwnd coupon work only on weekends.
//first-time-user coupon work only for first order.
//input: order=1200,weekend=false,coupon="WEEKEND".
function validCoupon(order, weekend, coupon, firstOrder) {
  if (order <= 1000) {
    return "Invalid";
  }
  if (coupon === "WEEKEND" && !weekend) {
    return "Invalid";
  }
  if (coupon === "FIRST" && !firstorder) {
    return "Invalid";
  }
  return "Valid";
}
console.log(validCoupon(1200, false, "WEEKEND", true));
//Q14  serve health classficition CPU > 90 or Memory > 90=>Critical.cpu > 70 or memory > 70=> warning .else healthly.
//input: cpu=85,memory=55.
function serverHealth(cpu, memory) {
  if (cpu > 90 || memory > 90) {
    return "Critical";
  } else if (cpu > 70 || memory > 70) {
    return "Warning";
  } else {
    return "Healthly";
  }
}
console.log(serverHealth(85, 55));
//Q15 Insurance premium category age under 25 => high rick,age 25-60=> standard.ageabpve60=>senior.if acciendts>2.
//high rick
function InsuranceCategory(age, accidents) {
  if (accidents > 2) {
    return "High Rick";
  }
  if (age < 25) {
    return "High Rick";
  } else if (age <= 60) {
    return "Standard";
  } else {
    return "Senior";
  }
}
console.log(InsuranceCategory(63, 3));
//Q16 festival ticket pricing. children<12 pay 100.adult pay 250.senior(60+)pay 150. group size>= 5 gets 10%.
//input:age=65,group=6.
function ticketPrice(age, group) {
  let price;
  if (age < 12) {
    price = 100;
  } else if (age >= 60) {
    price = 150;
  } else {
    price = 250;
  }
  if (group >= 5) {
    price = price - (price * 10) / 100;
  }
  return "Rupees" + price;
}
console.log(ticketPrice(65, 6));
//Q17 Parking fee rules first 2 hours free.next 3 hours.20/hour.beyound 5hours.50/hour
//input: 140
/*function ParkingFee(hours) {
  if (hours <= 2) {
    return "Pay0";
  } else if (hours <= 5) {
    return "Pay" + (hours - 2) * 20;
  } else {
    let free = 3 * 20 + (hours - 50) * 50;
    return "Pay" + fee;
  }
}
console.log(ParkingFee(7));*/
//Q18 Smart house automation turn AC on if temperature>30.turn heater on if temperature<18.if nobody is home,turn both off.
//input: temperature =35, occupied=false.
function smartHome(temperature, occupied) {
  if (!occupied) {
    return "All off";
  }
  if (temperature > 30) {
    return "AC on";
  } else if (temperature < 18) {
    return "Heater on";
  } else {
    return "No action";
  }
}
console.log(smartHome(35, false));
//Q19 subscription renewal renew if payment succeeds. if payment fails but user has wallet balance,, use wallet. if both fail,
//supend account. input : payment = false, walllet = true.
function renewSubscription(payment, wallet) {
  if (payment) {
    return "Renew";
  } else if (wallet) {
    return "Renewed via wallet";
  } else {
    return "Account suspended";
  }
}
console.log(renewSubscription(false, true));
//Q 20 Bank transaction flagging falg if amount > 100000.flag if international and amount > 50000. flag if more then 5 transaction occur within one hour.
//input: international = true, amount =60000,txCount=2.
function transactionFlag(international, amount, txCount) {
  if (amount > 100000) {
    return "Flagged";
  } else if (international && amount > 50000) {
    return "Flagged";
  }
  if (txCount > 5) {
    return "Flagged";
  }
  return "Not Flagged";
}
console.log(transactionFlag(true, 60000, 2));
//Q21 Employee Bouns rating5=>20%,Rating4=>10%.rating3=>5%.Employee with attendance below 80%. receive no bouns.
////input: Rating=5,attendance=75.
function EmployeeBouns(rating, attendance) {
  if (attendance < 80) {
    return "0%";
  }
  if (rating === 5) {
    return "20%";
  } else if (rating === 4) {
    return "10%";
  } else if (rating === 3) {
    return "5%";
  } else {
    return "0%";
  }
}
console.log(EmployeeBouns(5, 85));
//Q22 cloud storage plan free 5GB, pro 100GB, enetrprise: unlimitd.warm if uagesexcute 90% of plan.
//input: plan="pro, usage=95GB".
/**
 *
 * @param {String} plan
 * @param {Number} usage
 * @returns
 */
function storagePlan(plan, usage) {
  plan = plan.toLowerCase();
  const limits = {
    free: 5,
    pro: 100,
    enterprice: Math.Infinity,
  };
  const limit = limits[plan];
  if (usage >= limit * 0.9) {
    return "Warning";
  }
  return "storage ok";
}
console.log(storagePlan("pro", 96));
//Q23 Flight Boarding decision board only if ticket valid and check in complete.interenational passengers also need password.
// input: internatoonal= true, ticket =true,checkin=true, password= false.
function carBoard(interenational, ticket, checkin, password) {
  if (!ticket || !checkin) {
    return "Cannot Board";
  } else if (interenational && !password) {
    return "Cannot Board";
  }
  return "Board";
}
console.log(carBoard(true, true, true, false));
//Q24 online exam monitoring flag if tab switchs>3,flag if camera disable. disquality if both occur.
//input: switchs=5,cameraOff= true.
function examMonitor(switchs, cameraOff) {
  if (switchs > 3 && cameraOff) {
    return "Disqualified";
  }
  if (switchs > 3 || cameraOff) {
    return "Flagged";
  }
  return "Normal";
}
console.log(examMonitor(5, true));
//Q25 Schoolarship tier 90+=> full,80+=>half,70+=.quarter.family income above10l reduces schoolarship by one.
//input: marks=92, income=1200000.
function schoolarship(marks, income) {
  let tier;
  if (marks >= 90) {
    tier = "Full Schoolarship";
  } else if (marks >= 80) {
    tier = "Half Schoolarship";
  } else if (marks >= 70) {
    tier = "Quarter Schoolarship";
  } else {
    return "No schoolarship";
  }
  if (income > 100000) {
    if (tier === "Full Schoolarship") {
      tier = "Half Schoolarship";
    } else if (tier === "half Schoolarship") {
      tier = "Quarter Schoolarship";
    } else if ((tier = "Quaerter Schoolarship")) {
      tier = "No Schoolarship";
    }
  }
  return tier;
}
console.log(schoolarship(92, 12000000));
//Q26 Food Delivery ETA distance<32km=> 15min, distance <8km=>30min,else 45.rain adds 10min
//input: distance=10, rain=true.
function deliveryETA(distance, rain) {
  let time;
  if (distance < 3) {
    time = 15;
  } else if (distance < 8) {
    time = 30;
  } else {
    time = 45;
  }
  if (rain) {
    time += 10;
  }
  return time + "minutes";
}
console.log(deliveryETA(10, true));
