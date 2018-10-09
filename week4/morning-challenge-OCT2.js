// // Create a function that takes in three arguments. If the product of said arguments is a multiple of 24,
// convert the product to a string and then print that string x times to the console
// where x is the last argument given

function treway(var x, var y, var z) {
  var k = x*y*z;
  if (k%24 == 0) {
    var j = k.toString();
  }
  for (i=1; i<=z; i++) {
    console.log(j);
  }
}
