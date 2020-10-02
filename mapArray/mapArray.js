/**
 * array map humen bhtt easily array ki values get kr k deta hai aur yae bhtt efficient tariqa bhi hai
 */

const items = [
    { name: 'kurkurey', price: 20 },
    { name: 'lays', price: 30 },
    { name: 'cheetos', price: 50 },
    { name: 'wavy', price: 100 },
];


// old way to get array of object element

// let myArray = [];
// for (let i = 0; i < items.length; i++) {
//     myArray.push(items[i].name);
// }

// console.log(myArray)

// *** ES-6 map()

let myArray = items.map((element) => element.name); // annoymous function => (element) => element.name

console.log(myArray);