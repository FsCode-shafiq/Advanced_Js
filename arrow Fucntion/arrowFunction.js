// ES-5 FUNCTIONS
/*
function eS_5(){
    console.log("hello world!");
}

eS_5();
*/


// ES-6 FUNCTION
/*
const eS_6 = () => {
    console.log("hello world!");
}

eS_6();*/




// ES-5 function with arguments

function eS_5(myName){
    console.log(`my name is ${myName}`);
}

eS_5("shafiq");

/**
 *  ES-6 me ap yae kaam ek line me bhi kr skty hain agr apko ek hi argument pass krwana hai tu 
 */

//ES-6 function with arguments

const eS_6 = myName => console.log(`my name is ${myName}`)

eS_6("wassay");

/*
const eS_6_2 = (myName,lastName) => console.log(`my name is ${myName} ${lastName}`)

eS_6_2("abdul","wassay");

const multiply = (a,b) => console.log("RESULT:", a*b);

multiply(5,50);*/
