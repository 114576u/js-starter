
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

var q = Math.floor(1.23)
console.log(q);
q = Math.ceil(1.23);
console.log(q);


var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1, 
  "friends": ["everything!"]
};
console.log(ourDog);
console.log(ourDog.legs);
console.log(ourDog["name"]);
var otherDog = ourDog;
console.log(otherDog);
otherDog.name="Pirena";
console.log(otherDog);
console.log(ourDog);

ourDog.bark = "bup-bup";
console.log(ourDog);

delete ourDog.bark;
console.log(ourDog);

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
console.log(myObj.gift);

function checkObject(checkProperty){
  if (myObj.hasOwnProperty(checkProperty)){
    return myObj[checkProperty];
  } else {
    return "Property '" + checkProperty + "' property does not exist";
  }
}
console.log(checkObject("pet"));
console.log(checkObject("bed"));
console.log(checkObject("good"));

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside;
console.log(gloveBoxContents);[]
console.log(myStorage.car.outside.trunk);
console.log(myStorage.car.inside["passenger seat"]);

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];
var secondTree = myPlants[1].list;
console.log(myPlants[1]);
console.log(myPlants[1].list[1]);
console.log(secondTree);
console.log(secondTree[1]);

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": ["1999", "Little Red Corvette"]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collection);
console.log(collectionCopy);

function updateRecords(id, prop, value) {
  if (value === ""){
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(5439, "artist", "ABBA");
console.log(collection);
updateRecords(2468, "tracks", "test");
console.log(collection);


var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log("myArray->" + myArray);

var ourArray = [];
for(var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log("ourArray->" + ourArray);


var ourArray = [];
for (var i = 0; i < 10; i+= 2) {
  ourArray.push(i);
}
console.log("ourArray->" + ourArray);

// senars
for (var i = 1; i < 10; i+= 2){
  ourArray.push(i);
}
console.log(ourArray);


var ourArray = [9, 10, 11, 12, 13, 14, 15];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++){
  ourTotal += ourArray[i];
}
console.log(ourTotal);


function mulitplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0 ; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = mulitplyAll([[1, 2],[3, 4],[1, 2]]);
console.log(product);

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(myArray);

