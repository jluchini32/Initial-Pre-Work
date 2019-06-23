//needed a reminder about how .filter .map .reduce worked on freecode camp
//chaining these together was very difficult for me. I knew what I needed in terms of 
// of the conditioanl, but outside of that, i had a ton of trouble making the built in functions work
//I typed this one out on my own from the solution as to better understand how it takes in num as
// a parameter and uses it, but still struggling to use it corrrectly on my own


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line


  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0 ).map((num) => Math.pow(num, 2) );
    // change code above this line
    return squaredIntegers;
  };

// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

