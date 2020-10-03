/**
 * find exact value ko return krta hai lekin yae srf first value ko hi reutrn krta hai,
 * ousky bd yar exit ho jata hai 
 */
const items = [{
        name: 'kurkurey',
        price: 20
    },
    {
        name: 'lays',
        price: 30
    },
    {
        name: 'cheetos',
        price: 50
    },
    {
        name: 'wavy',
        price: 100
    },
];

const myArray = items.find((element) => {
    return element.price <= 50;
})

console.log(myArray)