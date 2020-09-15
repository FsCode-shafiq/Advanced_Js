// Normal way ES-5

/*
const obj = {
    fistName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};
console.log(obj.profession.three.four);
*/

// Destructuring ES-6



// ***EXAMPLE NO-1***
/* 
const obj = {
    firstName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};

const {firstName} = obj;

console.log(firstName);
*/


// ***EXAMPLE NO-2 (--NESTED DESTRUCTURING--)***
/* 
const obj = {
    firstName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};

const {profession:{one,two}} = obj;

console.log(two);*/




// ***EXAMPLE NO-3 (--NESTED DESTRUCTURING--)***
/* 
const obj = {
    firstName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};

const {profession:{one,two,three}} = obj;

console.log(three);*/


// ***EXAMPLE NO-4 (--NESTED DESTRUCTURING--)***
/* 
const obj = {
    firstName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};

const {profession:{one,two,three:{four,five}}} = obj;

console.log(five);*/


// ***EXAMPLE NO-2 (--NESTED DESTRUCTURING--)***
 /*
const obj = {
    firstName: 'abdul',
    LastName: 'wassay',
    age: 20,
    profession: {
        one: 'React',
        two: 'Node-js',
        three: {
            four: 'express',
            five: 'mongoDB'
        }
    },

};

const {profession:{one,two,three:{four,five}}} = obj;

console.log(three);
*/



//          ***Array Destructuring***

/*
const array = [1,2,3,4,5,6,7,8,9,10];

const [one,two,three,four,five,six,seven,eight,nine,ten] = array;

console.log(five);

*/