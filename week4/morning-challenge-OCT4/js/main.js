// Find Fibonacci numbers in sequence less than 4 million
var num1 = 0
var num2 = 1
var num = 0
var sum = 0

while(num <= 4000000){
  // Add the previous two numbers to get the next numbers
  num = num1 + num2;
  num1 = num2;
  num2 = num;
  // Check to see if the generated number is even
  if(num%2===0){
    // If even add to running total (sum)
    sum = sum + num;
  }
}
// Display sum of even numbers
console.log(sum)

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function isPrime(num){
  // starting at 2 count up to num
  for (i = 2; i<num;i++){
    // if divisible by any number previous other than 1 and itself
    // return false
    //console.log(i,num,num%i)
    var isDivisable=(num%i==0)
    // if not divisble by any other number preious, it is a prime
    //console.log("isDividable",isDivisable)
    if (isDivisable){
      return false
    }
  }
  return true
}
/** Determines the nth prime number based on
 * pass in value.
 */
function computePrime(goal){
  // n is number being checked if it is prime
  // p tells us true of false
  for(n = 1,counter=0; counter <= goal; n++){
    var p = isPrime(n)
    if (p){
      // count increases if p is prime
      counter++;
    }
    console.log(n,p,counter)
  }
}
computePrime(300);

// function addTwo(x,y){
//   return x + y;
// }
//
// function alertVal(){
//   var val = addTwo(2,3)
//   alert(val)
// }
