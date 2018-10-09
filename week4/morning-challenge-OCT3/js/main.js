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


// function addTwo(x,y){
//   return x + y;
// }
//
// function alertVal(){
//   var val = addTwo(2,3)
//   alert(val)
// }
