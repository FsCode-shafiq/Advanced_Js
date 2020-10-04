// SHORT CIRCUIT

let gender = 'female';

let msg = (gender === 'male') && "short circuit msg";

let msg2 = (gender === 'femal') || "short circuit msg2";


console.log(msg);
console.log(msg2)