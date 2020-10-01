/**
 * local storage humarey browser me ek memory ki trhan kaam krta hai is ki misaal youn le skty hain k,
 * jb hum fb pr login hoty hain tu browser local storage me apki id aur pasword save kr leta hai.
 * jis ki wajha se jb ap fp ko dubara access krty hain tu apko dubara login ni krna prta direct home page pr jaty hain.
 * q k browser local storage se data lekr data base ko dta hai....
 */


//yahan pr local storage me hum key aur ouski value store krwai hai.
localStorage.setItem('fname','abdul');
localStorage.setItem('lname','wassay');

// getting value from local storage.

// const firstName = localStorage.getItem('fname');
// const lastName = localStorage.getItem('lname');

// console.log(firstName,lastName);


// // removing item from local storage

// localStorage.removeItem('lname');

// // clear local storage remove all item in a single command.

// localStorage.clear()

// //  TASK NO-1
// //  to store hole object in local storage.
// const obj = {
//     name: "shafiq",
//     agr: 20
// };

// localStorage.setItem('obj1',JSON.stringify(obj));
// const object = localStorage.getItem('obj1');
// console.log(object);
// // getting object element from local storage
// const parsObj = JSON.parse(localStorage.getItem('obj1'));

// console.log(parsObj.name);

