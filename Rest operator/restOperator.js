/**
 * rest operator hum destructure krty hue use krty hain jb hum ko koi value destructure krni ho
 * aur baqi ki value humen kisi variable me store krwani ho tu
 */

const { lightcoral } = require("color-name")

 let obj = {
     firstName: 'shafiq',
     lastName: 'ur rehman',
     city: 'khi',
     address: {
         add1:'malir',
         add2: 'korangi',
         add3: 'saddar'
     }
 }

// let {city, ...restValue} = obj;
// console.log(city,restValue);

// **** TASK NO1 (NESTED VALUES RESTING) ****

let {city , address:{add1, ...restAdd},...restValue}= obj;
console.log(restAdd,city,restValue);

