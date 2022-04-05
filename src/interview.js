/*
    Javascript:
        1.  What are closures? what are advantages of using closures?
        2.  What is event bubbling?
        3.  Write below function?
            verify("---(++++)----") -> 1 
            verify("") -> 1 
            verify("before ( middle []) after ") -> 1 
            verify(") (") -> 0 
            verify("<(   >)") -> 0 
            verify("(  [  <>  ()  ]  <>  )") -> 1 
            verify("   (      [)") -> 0
        4. What are promises? which are different methods available? 
        5. write await sleep(5000) using promises Good
        6. async waterfall & series
        7. Design Patterns? DependencyInjection? Singleton Design Pattern?
        8. SOLID principles

    React:
        1. What is React? What are the advantages of using react?
        2. What is webpack?
        3. What are renderProps?
        4. useCallback and useMemo and useEffect? 
        5. react-thunk? why do we need it?
        6. styled-components?
        7. HOC components

    Nodejs:
        1. Variable hoisting -
        2. What is a closure in Javascript - OK
        3. What is Event Loop?
        4. What are different ways to secure you Nodejs Application?
        5. How can we skip middlewares?
        6. Garbage collection in Nodejs
        7. Promise.all vs Promise.allSettled - No

    Databases:
        1. Stored Procedures
        2. Foreign Key
            ans: data integrity, cascading (no junk data)
        3. Indexes (can we keep adding)
            ans: in memory representation
        4. Sharding (v vs horizontal)
        5. SQL Query: Print Name and Marks of even rows, sorted asc on marks , Print name in uppercase

    Data Structures:
        1. What is diference between array and LinkedList?
        2. what is Big(O) for Randomly accessing element
        3. What is binary search tree?

    AWS / Cloud / CI/CD: (5)
        1. Scaling?
        2. Components of AWS
        3. What is CI/CD?
*/


// var exam = [
//     { name: 'Ahsaan', marks: 85 },
//     { name: 'Birbal', marks: 65 },
//     { name: 'Joey', marks: 35 },
//     { name: 'Zeba', marks: 46 }
// ];

// console.table(exam);

// Write Query

// Print Name and Marks of even rows, sorted asc on marks , Print name in uppercase
// Pascals triangle, given row and column print the number in pascal triangle
// Linked List: Reverse a linked List

/*  function Node (val, next = null) {
      this.val = val;
      this.next = next;
    }
*/



// Order of Execution

/*
console.log('a');
await fetchAPI()
console.log('b')
SetTimeout
*/

// In Which scenario should i not use nodejs good
// ketan mulani

// null == undefined wrong
// different ways to empty an array wrong
// closure in JS wrong
// const let and var // O
// const user1 = { name: 'ketan' }; const user2 = user1; user1.name = 'ketan2'; console.log(user2.name)
// // wron
// nodeJS okay
// event loop Not okay(required
// application security OK
// database optimizations: OK
// problem solving
// Array problem Good


// arr = ['a', 'a', 'b', 'c', 'c', 'c', 'a', 'b'];
//=> [2, 'a', 1, 'b', 3, 'c', 1, 'a', 1, 'b'];

function countOccurences (arr) {
    if (arr.length === 0) {
        return [];
    }
    var map = {};
    var solution = [];


    for(var i = 0; i< arr.length; i++) {

        if(map[])

    }

}