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




















