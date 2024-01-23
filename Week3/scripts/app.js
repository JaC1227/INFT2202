// imports always go at top of .js file
import { halfOf, mulitply } from "./lib";
import doSomething from "./doSomething";
import { flag, touch } from "./validator";

// Use halfOf function from lib.js to print half of 50
console.log(halfOf(50));

// Use multiply function from lib.js to muliply 2 numbers
console.log(mulitply(1,2));

// validator.js flag and touch
console.log(flag);
touch();
console.log(flag);