/**
 * filter map() ki trhan hi array return krta hai magar yae values ko filter kr k 
 * lata hai according to giving condition
 * agr filter me condition true ho gai tu wo sary wo true values return krde ga,
 * aur agr false ho gaya tu empty array  return kr deta hai 
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

const myArray = items.filter((element) => {
    return element.price <= 80;
})

console.log(myArray);