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

