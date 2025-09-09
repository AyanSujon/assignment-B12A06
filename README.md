Answering the following question-


1) What is the difference between var, let, and const?

Answer:

>>> 1. var

>Function scoped (্এটি function এর ভিতরে ব্যবহার করা য়ায় ).

>এটি re-declared and updated  করা যায়। 
Hoisted (এটি function এর উপরেও ব্যবহার করা যায়).

>Example:

var name = "Ayan";
var name = "Sujon"; // allowed
console.log(name); // Sujon



2. let

>Block scoped (only works inside {}).

>এটি updated করা যায় কিন্তু re-declared same scope এর মধ্যে.

>Not hoisted এটি var এর মতো function এর উপরে ব্যবহার করা যায় না। 


>Example:
>let age = 25;

age = 26; //allowed

// let age = 30; error

console.log(age); // 26



>
>3. const

Block scoped ( let এর মতো).

Must be initialized at declaration.

>এটি re-declared and updated  করা যায় না। 

>Example: 
const country = "Bangladesh";
// country = "India"; error
console.log(country); // Bangladesh





**2) What is the difference between map(), forEach(), and filter()?**

map() কী?

জাভাস্ক্রিপ্টে `map()` ফাংশন হলো একটি অ্যারে মেথড যা মূল অ্যারের প্রতিটি উপাদানের উপর একটি নির্দিষ্ট ফাংশন প্রয়োগ করে একটি নতুন অ্যারে তৈরি করে, যেখানে প্রতিটি উপাদানের ফলাফল জমা হয়। `map()` মূল অ্যারেটিকে অপরিবর্তিত রাখে এবং একটি নতুন অ্যারে রিটার্ন করে। এটি ডেটা রূপান্তর, যেমন প্রতিটি সংখ্যার দ্বিগুণ করা বা প্রতিটি শব্দের ছোট হাতের অক্ষরে পরিবর্তন করা, এর জন্য ব্যবহৃত হয়।  

forEach() কী?

forEach() হলো জাভাস্ক্রিপ্টের Array method। এটি কোনো array এর প্রতিটি item এর উপর loop চালায় এবং একটি callback function execute করে।

সহজ কথায়: array এর প্রতিটি element একে একে ঘুরে দেখা এবং কাজ করা।

forEach() কোনো নতুন array return করে না। শুধু কাজ execute করে।

যদি নতুন array দরকার হয়, তাহলে map() ব্যবহার করতে হবে।

filter() কী?

filter() হলো জাভাস্ক্রিপ্টের একটি Array method।
এটা একটি শর্ত (condition) চেক করে নতুন array তৈরি করে, যেখানে শুধু ওই শর্তে মিলে এমন element গুলো থাকবে।

 সহজভাবে:
Array থেকে যেগুলো দরকার শুধু সেগুলো বেছে নেওয়া।

filter() সবসময় নতুন array return করে।

যেই element শর্ত পূরণ করে না, সেগুলো বাদ পড়ে যায়।

যদি কোনো element শর্ত পূরণ না করে, তবে খালি array ([]) রিটার্ন হবে।


================================================================================


**3) What are arrow functions in ES6?**

ES6 (ECMAScript 2015) এ নতুনভাবে Arrow Function (=>) আনা হয়েছে।
এটা হলো জাভাস্ক্রিপ্টে ফাংশন লেখার ছোট, সহজ আর আধুনিক উপায়।

Arrow Function এর বৈশিষ্ট্য

1. ছোট সিনট্যাক্স → কম কোড লাগে, পড়তে সহজ।
2. এক লাইনে লিখলে return লাগবে না।


========================================================================


**4)  does destructuring assignment work in ES6?**

Destructuring Assignment হলো ES6 এর একটি ফিচার যেটা দিয়ে আমরা array বা object এর ভ্যালুগুলোকে আলাদা ভ্যারিয়েবলে সহজে বের করতে পারি।

উদাহরণ: 

let numbers = [10, 20, 30, 40];

let [a, b] = numbers;
console.log(a, b); // 10 20


=======================================================================


**5) Explain template literals in ES6. How are they different from string concatenation?**

Template Literals (বা Template Strings) হলো ES6 এ আসা নতুন ফিচার, যেটা দিয়ে string তৈরি করা আরও সহজ হয়েছে। এগুলো লিখতে আমরা backtick (`) ব্যবহার করি, সাধারণ quote (' বা ") নয়।

Example: 

// Template Literal
let sentence = `My name is ${name} and I am ${age} years old.`;

Multi-line Strings (newline সহজে লেখা যায়)

let poem = `Roses are red, Violets are blue, JavaScript is fun, And so are you.`;

Template Literals vs String Concatenation

বিষয়	String Concatenation	Template Literals (ES6)

সিনট্যাক্স	"Hello " + name + "!"	`Hello ${name}!`
পড়তে সহজ?	না, অনেক + ব্যবহার হয়	হ্যাঁ, অনেক পরিষ্কার
Multi-line String	\n লিখতে হয়	সরাসরি নতুন লাইন দেওয়া যায়
Expression Support	আগে আলাদা করতে হয়	${a + b} দিয়ে সরাসরি সম্ভব














