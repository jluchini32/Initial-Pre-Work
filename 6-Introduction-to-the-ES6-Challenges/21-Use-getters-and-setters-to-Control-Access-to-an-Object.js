//I've done what feels like a million of these problems in class, but couldnt nail this without 
//using the solution that was provided. It seems like both getter and setters are both doing 
//the same things(as they are both referencing this.fahrenheit). I know that the tests
//would fail, but Would these functions still work if they were just labeled const or let? 
// talking to myself here... lol


function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
      constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
      }
      get temperature() {
        return 5/9 * (this.fahrenheit - 32);
      }
  
      set temperature(celsius){
        this.fahrenheit = celsius * 9.0 / 5 + 32;
      }
    }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C