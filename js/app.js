console.log("This is linked")

/*2.  Create two variables that have numbers as their values*/

var variablesThatHaveNumbersAsTheirValues = 2;
var secondVariableThatHasNumberAsAValue = 4;

/*Create a function that returns the sum of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.*/


function sumOfTwoNumbersThatAreArguments(argOne, argTwo) {
    return argOne + argTwo;
}

console.log(sumOfTwoNumbersThatAreArguments(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

/* 4. Create a function that returns the difference of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.*/

function differenceOfTwoNumbersThatAreArguments(argThree, argFour) {
    return argThree - argFour;
}
console.log(differenceOfTwoNumbersThatAreArguments(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

/*Create a function that returns two arguments multiplied by each other. Then console.log the function with the variables from step two as your two arguments.*/

function multiplier(argFive, argSix) {
    return argFive * argSix;
}
console.log(multiplier(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));
/*Create a function that returns divides the first argument by the second argument and returns the new value. Then console.log the function with the variables from step two as your two arguments.*/

function divider(argSeven, argEight) {
    return argSeven / argEight;
}
    console.log(divider(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

/* Take the four functions that you created above and turn them into Arrow Functions,  do not delete the original functions made, please have the original function and the arrow function on your completed homework. You should have a total of eight functions, four regular and four arrow functions.*/


var addition = (argOne, argTwo ) => argOne + argTwo;

console.log(addition(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

var subtraction = (argOne, argTwo ) => argOne - argTwo;

console.log(subtraction(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

var multiplication = (argOne, argTwo ) => argOne * argTwo;

console.log(multiplication(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));

var devision = (argOne, argTwo ) => argOne / argTwo;

console.log(devision(variablesThatHaveNumbersAsTheirValues, secondVariableThatHasNumberAsAValue));