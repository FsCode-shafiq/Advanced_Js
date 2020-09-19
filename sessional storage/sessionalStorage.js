/**
 * sessional storage specific time k liye hi hoti hai jb ap browser ya tab dubara close krty hain ,
 * tu yae bhi khtm ho jati hai .
 */

 sessionStorage.setItem('value1', 'hello world')

 const obj2 = {
     name: 'shafiq',
     agr: 23
 };

 sessionStorage.setItem('obj2',JSON.stringify(obj2));

 const a = JSON.parse(sessionStorage.getItem('obj2'));

 console.log(a.agr);