/**
 * object dot key hum is liye use krty hain Q k agr hum ko object ki key ki madad se value leni ho tu wo humary liye asaan ho jati hain 
 * object dot key humen ek array bana kr de deti hain kis bhji object k sari keys ka
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

let objDotKey = Object.keys(myobj);

//console.log(objDotKey);
/**
 * ab yahan hum array ki madad se object se value get kren gae lekin yahan hum dot ki jaga '[]' use kren gae
 */

for (let index = 0; index < objDotKey.length ; index++) {
    console.log(myobj[objDotKey[index]]);
    
}