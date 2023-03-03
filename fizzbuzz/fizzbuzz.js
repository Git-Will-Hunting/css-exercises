let answer = parseInt(prompt("Enter a number to FizzBuzz:"));

for (let i = 1; i <= answer; i++) {
    //console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// when a user inputs a number
// loop through all numbers from 1 to the number
// if the current number is divisible by 3, print "fizz"
// if the current number is divisible by 5, print "buzz"
// if the current number is divisible by 3 and 5, print "fizzbuzz"
// if the current number is not divisible by 3 or 5, print the current number