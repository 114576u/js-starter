
console.log("this is second.js file");

var v = "this is a string";
console.log("Type of v is " + typeof v);
v = 4;
console.log("Type of v is " + typeof v);
v = null;
console.log("Type of v is " + typeof v);

function myLocalScope() {
  var myVar =5;
  console.log(myVar);
}
myLocalScope();


function nextInLine(arr, item) {
  arr.push(item);
  return item;
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function compareEquality(a, b) {
  if ( a == b ) {
    return "Equal";
  }
  return "Not equal";
}
console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10));
console.log(compareEquality(10, 9+1));

