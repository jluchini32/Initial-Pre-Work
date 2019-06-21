//This one I also struggled with. I didnt know and still dont know how this function truly
//works. I was suprised with the hint that was given on freecodecamp as I thought that 
//the best way to approach the problem was how the example looked. When it has //True
// I guess I should have known that it was expecting some type of boolean that was determined
//based on the checkprop. I think that if I ever got this problem again, I would still
//be very unsure about how to go about it. I would also be interested in researching what kind 
//of real world examples would need to search an object for properties. I guess I am better for 
// having struggled through this one. 

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp) == true) {
      return myObj[checkProp];
    }
    else {
        return "Not Found"
    }
  }
  // Test your code by modifying these values
  checkObj("gift");