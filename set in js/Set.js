/**
 * javascript agr hum kisi array me unique value rkhna chaty hain means k hr value dusary se algh ho tu hum ousko set me rkh kr define kr skty hain,
 */

let arr = [1, 2, 2, 3, 4, 5, 6];

const setArr = new Set(arr);

console.log(setArr)

const newSet = new Set();

newSet.add("shafiq");
newSet.add("shafiq");
newSet.add("shafiq");

console.log(newSet);