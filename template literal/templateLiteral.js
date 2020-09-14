const name = 'shafiq';
const age = 20;

// Old Way To Concatenate ES-5 Method

//const result = 'my name is '+ name + ' and my age is ' + age;
//console.log(result);

// New way to concatenate ES-6 Method (Template Literals)

//const result = `my name is ${name} and my age is ${age+1}`;
//console.log(result);


// Using function in template literal

function printName(){
    return "shafiq ur rehman";
}

const result =  `my name is ${printName()} and my age is ${age}`;
console.log(result);