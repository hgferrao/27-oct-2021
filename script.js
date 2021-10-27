/*
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false

function lessThanOrEqualToZero(num) {
  return num >= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(-5));
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  return a + b < 100 ? true : false;
}
console.log(lessThan100(5, 57));
console.log(lessThan100(77, 30));
console.log(lessThan100(0, 59));
console.log(lessThan100(78, 35));
console.log(lessThan100(63, 11));
console.log(lessThan100(37, 99));
console.log(lessThan100(52, 11));
console.log(lessThan100(82, 95));
console.log(lessThan100(17, 44));
console.log(lessThan100(74, 53));
console.log(lessThan100(3, 77));

function isSeven(x) {
  return x === 7 ? true : false;
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
  return str1.length == str2.length ? true : false;
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));
console.log(comp("meow", "woof"));
console.log(comp("jrnvjrnnt", "cvjknfjvmfvnfjn"));
console.log(comp("jkvnjrt", "krnf"));
console.log(comp("Facebook", "Snapchat"));

// Create a function that returns true if a string is empty and false otherwise.
function isEmpty(s) {
  return s == "" ? true : false;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("!?@&"));

// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.


function intWithinBounds(n, lower, upper) {
  if (!Number.isInteger(n)) return false;
  return n >= lower && n < upper ? true : false;
}
console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
console.log(intWithinBounds(-5, -10, 6));
console.log(intWithinBounds(4, 0, 0));
console.log(intWithinBounds(10, 9, 11));
console.log(intWithinBounds(6.3, 2, 6));
console.log(intWithinBounds(6.3, 2, 10));
console.log(intWithinBounds(9, 2, 3));
console.log(intWithinBounds(9, 9, 9));
console.log(intWithinBounds(-3, -5, -2));
console.log(intWithinBounds(-3, -5, -3));
console.log(intWithinBounds(-3, -10, 10));
console.log(intWithinBounds(0, -3, 3));
console.log(intWithinBounds(0, 0, 1));
console.log(intWithinBounds(7, 7, 12));


//Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
//The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

function areaOfCountry(name, area) {
  let totalArea = 148940000;
  return `${name} is ${((area * 100) / totalArea).toFixed(
    2
  )}% of the total world's landmass`;
}
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("Iran", 1648195));
console.log(areaOfCountry("India", 3287590));
console.log(areaOfCountry("China", 9706961));
console.log(areaOfCountry("Yemen", 527968));
console.log(areaOfCountry("Switzerland", 41284));

///////////////////////////// do it///////////
// function testJackpot(result) {
//   return result.every((el) => el);
// }
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i) {
  const str = i.toString().split("").reverse().join("");
  return str + i;
}
console.log(reverseAndNot(123)); // 321123
console.log(reverseAndNot(496)); //694496
console.log(reverseAndNot(298));
console.log(reverseAndNot(532));
console.log(reverseAndNot(211));
console.log(reverseAndNot(602));
console.log(reverseAndNot(804));
console.log(reverseAndNot(195));
console.log(reverseAndNot(271));
console.log(reverseAndNot(449));
console.log(reverseAndNot(938));
console.log(reverseAndNot(257));
console.log(reverseAndNot(205));
console.log(reverseAndNot(345));
console.log(reverseAndNot(365));
console.log(reverseAndNot(112));
console.log(reverseAndNot(792));
console.log(reverseAndNot(777));
console.log(reverseAndNot(759));
console.log(reverseAndNot(239));
console.log(reverseAndNot(469));
console.log(reverseAndNot(953));
console.log(reverseAndNot(574));
console.log(reverseAndNot(155));

////////////////////////////////////////////
/////////// Objects and scope /////////////

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
console.log(getVoteCount({ upvotes: 0, downvotes: 0 }));
console.log(getVoteCount({ downvotes: 4, upvotes: 1 }));


//The police sends you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.
// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

function preventChanges(obj) {
  // write your code here
  // don't use a return statement
  Object.freeze(obj);
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}
console.log(preventChanges({ noChanges: true }));


//Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
  const { width, length, height } = sizes;
  return width * length * height;
}

console.log(volumeOfBox({ width: 11, length: 1, height: 2 }));
console.log(volumeOfBox({ width: 1, length: 5, height: 3 }));
console.log(volumeOfBox({ width: 2, length: 1, height: 1 }));
console.log(volumeOfBox({ width: 2, length: 6, height: 5 }));
console.log(volumeOfBox({ width: 2, length: 5, height: 3 }));
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));


//  Array destructure

const [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(first);
console.log(second);
console.log(third);
console.log(other);


//Person	Relation with luke
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(name) {
  const person = "Luke";
  if (name == "Darth Vader") return `${person} im your father`;
  if (name == "Leia") return `${person} im your sister`;
  if (name == "Han") return `${person} im your brother in law`;
  if (name == "R2D2") return `${person} im your droid`;
}
console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));
console.log(relationToLuke("R2D2"));


// Extract City Facts

//X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
function cityFacts(city) {
  const { name, population, continent } = city;
  return `${name} has ${population} and is situated in ${continent}`;
}
console.log(
  cityFacts({ name: "Manila", population: "1,780,148", continent: "Asia" })
);
console.log(
  cityFacts({
    name: "Melbourne",
    population: "4,936,349",
    continent: "Australia",
  })
);
console.log(
  cityFacts({ name: "Kampala", population: "1,507,080", continent: "Africa" })
);
console.log(
  cityFacts({
    name: "Buenos Aires",
    population: "2,891,082",
    continent: "South America",
  })
);
console.log(
  cityFacts({
    name: "Vancouver",
    population: "631,486",
    continent: "North America",
  })
);
console.log(
  cityFacts({ name: "Berlin", population: "3,748,148", continent: "Europe" })
);


//First Class, Second Class and Third Class Levers
function determineLever(arr) {
  const lever = arr.join("");
  return lever == "efl"
    ? "first class lever"
    : lever == "elf"
    ? "second class lever"
    : lever == "fel"
    ? "third class lever"
    : "Invalid class";
}

console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"]));
console.log(determineLever(["f", "e", "a"]));


//Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName(obj, name, value) {
  let targetObject = obj;
  let keyValue = { [name]: value };
  // console.log(targetObject);
  // console.log(keyValue);
  return Object.assign(targetObject, keyValue);
}

console.log(addName({}, "Brutus", 300)); //, {Brutus: 300})
console.log(addName({ piano: 500 }, "Brutus", 400)); //, {piano: 500, Brutus: 400})
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); //, {piano: 500,  stereo: 300, Caligula: 440})


//Converting Objects to Arrays
function toArray(obj) {
  return Object.entries(obj);
}
console.log(toArray({ a: 1, b: 2 })); //, [["a", 1], ["b", 2]])
console.log(toArray({ foo: 33, bar: 45, baz: 67 })); //, [["foo", 33], ["bar", 45], ["baz", 67]])
console.log(toArray({ shrimp: 15, tots: 12 })); //, [["shrimp", 15], ["tots", 12]])
console.log(toArray({})); //, [])



// Return the Objects Keys and Values

function keysAndValues(obj) {
  const key = Object.keys(obj);
  const value = Object.values(obj);
  return ([...keyValue] = [key, value]);
  // console.log(key, value);
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 })); //, [["a", "b", "c"], [1, 2, 3]])
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })); //, [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
console.log(keysAndValues({ key1: true, key2: false, key3: undefined })); //, [["key1", "key2", "key3"], [true, false, undefined]])
console.log(keysAndValues({ 1: null, 2: null, 3: null })); //, [["1", "2", "3"], [null, null, null]])
console.log(keysAndValues({ key1: "cat", key2: "dog", key3: null })); //, [["key1", "key2", "key3"], ["cat", "dog", null]])


// Is it an Object?
function isObject(value) {
  if (value == null && typeof value == "object") return false;
  return typeof value == "object" ? true : false;
}
console.log(isObject(new Date())); //, true)
console.log(isObject("12/12/2011")); //, false)
console.log(isObject(null)); //, false)
console.log(isObject([1, 2, 3])); //, true)
console.log(isObject({})); //, true)
console.log(isObject("")); //, false)


function calculateLosses(obj) {
  const total = Object.values(obj).reduce((a, b) => {
    return a + b;
  }, 0);

  return total === 0 ? "Lucky you!" : total;
}

console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); //, 100)

console.log(
  calculateLosses({
    ring: 30000,
    painting: 20000,
    bust: 1,
  })
); //, 50001)

console.log(
  calculateLosses({
    chair: 3500,
  })
); //, 3500)

console.log(calculateLosses({})); //, "Lucky you!")

// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(order) {
  const total = Object.values(order).reduce((a, b) => {
    return a + b;
  }, 0);
  return total >= 50 ? true : false;
  // console.log(total);
}
console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 })); //, false)
console.log(freeShipping({ "Flatscreen TV": 399.99 })); //, true)
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
); //, true)
console.log(freeShipping({ Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 })); //, false)
console.log(
  freeShipping({
    "Elephant Plushie": 40.55,
    "Octopus Plushie": 20.33,
    "Spongebob Plushie": 20.0,
  })
); //, true)


//

class Name {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.fullname = fname + " " + lname;
    this.initials = fname[0] + " " + lname[0];
  }
  firstName() {
    const char = this.fname;
    return char.charAt(0).toUpperCase() + char.slice(1);
  }
  lastName() {
    const char = this.lname;
    return char.charAt(0).toUpperCase() + char.slice(1);
  }
  fullName() {
    const first = this.fname;
    const last = this.lname;
    return `${first} ${last}`;
  }
  initials() {
    return `${this.fname[0].toUpperCase()} ${this.lname[0].toUpperCase()}`;
  }
}
const a = new Name("Henry", "Ferrao");
console.log(a.fname); // "John")
console.log(a.lname); //, "Smith")
console.log(a.fullname); //, "John Smith")
console.log(a.initials); //, "J.S")

const a1 = new Name("John", "Smith");

console.log(a1.fname); // "John")
console.log(a1.lname); //, "Smith")
console.log(a1.fullname); //, "John Smith")
console.log(a1.initials); //, "J.S")


//Check If objOne Is Equal to objTwo
function isEqual(objOne, objTwo) {
  // console.log(objOne);
  return JSON.stringify(objOne) === JSON.stringify(objTwo) ? true : false;
}
const objOne = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com",
};

const objTwo = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};

console.log(isEqual(objOne, objTwo)); //, false);

const objOne2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};

const objTwo2 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com",
};

console.log(isEqual(objOne2, objTwo2)); //, true);

const objOne3 = {
  names: ["Tom", "Joe", "David"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 09487,
  },
};

const objTwo3 = {
  names: ["Tom", "Joe", "Steve"],
  fruitIds: {
    orangeId: 77634,
    appleId: 74323,
    bananaId: 65970,
  },
};

console.log(isEqual(objOne3, objTwo3)); //, false);

const objOne4 = {
  foo: {
    bar: {
      baz: true,
    },
    baz: {
      arr: [1, 2, 3],
    },
  },
};

const objTwo4 = {
  foo: {
    bar: {
      baz: true,
    },
    baz: {
      arr: [3, 2, 1],
    },
  },
};

console.log(isEqual(objOne4, objTwo4)); //, false, "The foo.bar.baz array has changed.");

const objOne5 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};

const objTwo5 = {
  foo: {
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
    bar: {
      baz: "edabit.com",
    },
  },
};

console.log(isEqual(objOne5, objTwo5)); //, false, "The order of the object keys has changed.");

const objOne6 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};

const objTwo6 = {
  foo: {
    bar: {
      baz: "edabit.com",
    },
    baz: {
      userIds: {
        jason: 76397,
        steve: 73073,
        joe: 21076,
      },
    },
  },
};

console.log(isEqual(objOne6, objTwo6)); //, true);

//Burglary Series (03): Is It Gone?
function findIt(obj, name) {
  return obj.hasOwnProperty(name) ? `${name} is gone ` : `${name} is here`;
  // console.log(obj);
  // console.log(name);
}
console.log(findIt({}, "rambo")); //,"Rambo is here!")
console.log(findIt({}, "heman")); //,"Heman is here!")
console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "rocky"
  )
); //,"Rocky is here!")

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
    },
    "spiderman"
  )
); //,"Spiderman is here!")

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      julius: 100,
    },
    "julius"
  )
); //,"Julius is gone...")

console.log(
  findIt(
    {
      tv: 30,
      stereo: 50,
      batman: 200,
    },
    "batman"
  )
); //,"Batman is gone...")

//Invert Keys and Values
function invert(o) {
  // console.log(o);
  const newObj = {};
  Object.keys(o).forEach((key) => {
    // console.log(key);
    newObj[o[key]] = key;
  });
  return newObj;
}
console.log(invert({ a: 1, b: 2, c: 3 })); //, { 1: "a", 2: "b", 3: "c" });
console.log(invert({ z: "q", w: "f" })); //, { q: "z", f: "w" });
console.log(invert({ zebra: "koala", horse: "camel" })); //, {
// koala: "zebra",
// camel: "horse",
// });
*/
//
