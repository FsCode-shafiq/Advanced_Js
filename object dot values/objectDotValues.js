/**
 * jis trhan se object dot key hai ousi trhan se object dot value bhi hai is me hum 
 * bhtt asani se directly object ki values get kr skty hain.
 */

let myobj={
    name: 'shafiq',
    age: 25,
    gender: 'male',
    phone: '03442078398',
    address: {
        add1:'#1123',
        add2: '#33665'
    }
};

let objDotValues = Object.values(myobj);

console.log(objDotValues);