/// **** FOR OF LOOP ****

/**
 * FOR OF LOOP HUM IS LIYE USE KRTY HAIN q K yae humary code ki readibility increase krta ha,
 * aur yae arrays aur string pr apply hota hai objects pr nai 
 * yae direct array ya is k index ki value get krta hai hai,
 */
const a = [20,30,40];
const s = 'shafiq'; // ['s','h','a','f','i','q']

 // Normal loop


// for (let i = 0 ; i < a.length; i++)
// {
//     console.log(a[i]);
// }

// for (let i = 0 ; i < s.length; i++)
// {
//     console.log(s[i]);
// }

// FOR OF LOOP (array)

// for(let val of a)
// {
//     console.log(val);
// }

// FOR OF LOOP (string)

// for(let alphabet of s)
// {
//     console.log(alphabet);
// }

// FOR OF LOOP (REVERSE)

for(let val of a.reverse())
{
    console.log(val);
}