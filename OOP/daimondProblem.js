// ===>>>>  Diamond Problem

// folow this : https://medium.com/geekculture/mixin-and-treats-94035022182c

'use strict';

const Halfling = function (fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
};

const mixin = {
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  rename(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  }
};

// An extend function
const extend = (obj, mixin) => {
  Object.keys(mixin).forEach(key => obj[key] = mixin[key]);
  return obj;
};

const sam = new Halfling('Sam', 'Loawry');
const frodo = new Halfling('Freeda', 'Baggs');

// Mixin the other methods
extend(Halfling.prototype, mixin);

console.log(sam.fullName());  // Sam Loawry
console.log(frodo.fullName());  // Freeda Baggs

sam.rename('Samwise', 'Gamgee');
frodo.rename('Frodo', 'Baggins');

console.log(sam.fullName());  // Samwise Gamgee
console.log(frodo.fullName());  // Frodo Baggins