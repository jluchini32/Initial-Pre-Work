//Credit goes to EQuimper on Github for this solution.
//I had an idea of how it wanted the conditional to look with the OR ||
//I didnt figure out that it wanted return undefined immediately afterward


// Setup
function abTest(a, b) {
    // Only change code below this line
  
    if (a < 0 || b < 0) return undefined;
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2,2);