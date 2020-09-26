/**
 * kisi bhi object ko dusary object k ander copy krne k do tariqy hain (bina refference pass krwaey)
 * ek spread operator k through 
 * aur dusara object dot assign k through
 * pehle hum spread operator k thorugh dekh lete hain phr object dot assign k throgh dekhen gaey
 */


 let obj1 = {
     firstName:'Abdul'
 }

 let obj2 = {
     lastName: 'wassay'
 }

 // *** Spread Operator ***

 let spreadObj = {
     ...obj1,
     ...obj2
 }

 //console.log(spreadObj);

// check assignment

//spreadObj.lastName = 'Raheem';


//console.log(obj2.lastName);


//console.log(spreadObj);  // work perfectly


// *** Object Dot Assign ***


let dotAssignObj = Object.assign({},obj1,obj2);

obj1.firstName = 'muhammad';

console.log(obj1);

console.log(dotAssignObj);

