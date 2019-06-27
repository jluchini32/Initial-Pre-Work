//Scope leak can be a major problem! With ES6 is it much easier to avoid accidentaly redifining
//variable, because the variable is only defined within whichever function it is in. const 
//is another beautiful way of future proofing your code, so that an error is thrown if you try
//to redfine a varaible. It was also a refresher in some of the built in functions of ES6 that
//are so widely used today like .map .filter .reduce. These will take some time for me to fully
//grasp, but i believe will benefit me greatly in the future. 

//Im also learning a ton about grabbing and reassingning variables in ES6 with the destructuring of 
//variables in objects, which took me awhile to grasp. But once I started practing and gettting
//the hang of the syntax, it made alot more sense. It really started to click when I got to assign
//values from arrays. I'm also happy that this section touched a bit on Classes, which are basically
//like a blueprint for creating objects. Although, I dont know if I will ever understand fully what
//"this" means, I am getting better at using this to mutate or avoid mutating (freeze) elements and variables. I think 
//that I am a better programmer because of ES6, object orieneted programming with classes
// makes a little more sense to me. After I am done with this pre-work, I intend to go back 
//through both the javascript section and ES6 section to better understand all of the syntax and better
//prepare me for any future whiteboarding challenges, writing Vanilla Javascript is super important
//and isnt going anywhere, so the better I can understand those concepts, the better off I will
//be in the future for understanding complex concepts and algorithms!





//This is the first type of comment

/*this is the other
type of line comment */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();