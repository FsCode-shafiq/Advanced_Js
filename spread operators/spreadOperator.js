// without spread operator 

let obj1 = {
    fname: 'Abdul',
    lname: 'wassay',
    adress: {
        place1: 'karachi',
        place2: 'lahore'
    }
};

// let obj2 = obj1;

// obj2.lname = 'raheem';

// console.log(obj1);

// console.log(obj2);

/**
 * yahan pr msla ye hai k agr hum (obj2) me changing kr rahy hain tu (obj1) bhi change ho raha hai.
 * is cheez se bachny k liye hum spread operator use krne hain
 */

// var obj2 = {
//     ...obj1
// }

// obj2.fname = 'muhammad';

// console.log('object 1 ====> ',obj1);

// console.log('object 2 ====> ',obj2);


/* hum spread krty waqt bhi value change kr skty hain*/


// var obj2 = {
//     ...obj1,
//     lname: 'raheem'
// };

// console.log('object 1 ====> ',obj1);

// console.log('object 2 ====> ',obj2);

const obj2 = {
    ...obj1,
    adress: {
        ...obj1.adress,
        place1: 'Islamabad'
    }
}
console.log('object :>> ', obj2);