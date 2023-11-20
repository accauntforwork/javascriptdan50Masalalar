const message = "Hello, world!";
console.log(message.length); // Output: 13

const str1 = "Hello";
const str2 = "World";
const concatenatedStr = str1.concat(", ", str2);
console.log(concatenatedStr); // Output: Hello, World

const sentence1 = "JavaScript is amazing!";
const extractedStr = sentence1.substring(0, 10);
console.log(extractedStr); // Output: JavaScript

const sentence2 = "JavaScript is amazing!";
const index = sentence2.indexOf("is");
console.log(index); // Output: 11

const sentence3 = "JavaScript is amazing!";
const newSentence = sentence3.replace("amazing", "incredible");
console.log(newSentence); // Output: JavaScript is incredible!

const message1 = "Hello, world!";
const uppercaseMsg = message1.toUpperCase();
console.log(uppercaseMsg); // Output: HELLO, WORLD!

const message2 = "Hello, world!";
const lowercaseMsg = message2.toLowerCase();
console.log(lowercaseMsg); // Output: hello, world!

const sentence4 = "JavaScript is amazing!";
console.log(sentence4.startsWith("JavaScript")); // Output: true

const sentence5 = "JavaScript is amazing!";
console.log(sentence5.endsWith("amazing!")); // Output: true

const message3 = " Hello, world! ";
const trimmedMsg = message3.trim();
console.log(trimmedMsg); // Output: Hello, world!

const sentence6 = "JavaScript is amazing!";
const words = sentence6.split(" ");
console.log(words); // Output: ["JavaScript", "is", "amazing!"]

const word = "Hello";
console.log(word.charAt(1)); // Output: e

const word1 = "Hello";
console.log(word1.charCodeAt(0)); // Output: 72 //unicode

const sentence7 = "JavaScript is amazing!";
console.log(sentence7.includes("is")); // Output: true

const sentence8 = "JavaScript is amazing!";
const pattern = /is/;
console.log(sentence8.match(pattern)); // Output: ["is"] qatorning ma'lum bir naqshga mos kelishi

const word2 = "Hello";
console.log(word2.repeat(3)); // Output: HelloHelloHello

const sentence9 = "JavaScript is amazing!";
console.log(sentence9.lastIndexOf("a")); // Output: 15

const word4 = "Hello";
const subset = word4.slice(1, 4);
console.log(subset); // Output: ell
