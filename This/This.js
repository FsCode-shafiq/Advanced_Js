"use strict";
// This refer to global object

//console.log(this);

// In Regular function THIS refer to global object

const myfun = () => {
    console.log(this);
}
myfun();

// In Method THIS refer to current object 

const myObj = {
    name: "shafiq",
    age: function() {
        console.log(20 + 1);
        console.log(this.name);
    }
}

myObj.age();