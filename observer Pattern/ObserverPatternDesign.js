// *** How to observer pattern works ***
// The observer pattern consists of three ingredients — the “subject”, the observer, and the objects.

// The relationship between these three ingredients works like this: think of the subject as the central piece of code that ultimately controls the running of everything. The observer acts as a holding list for all the relevant objects.


 
// Objects are subscribed to the subject and wait for the subject to call it. Objects are unsubscribed when it’s no longer needed.

// Why is this a good thing?

// Imagine you want to update a collection of things when something updates from a particular source. However, you don’t want to call your object, function or method every single time something happens.

// Imagine you have about fifty of these objects/functions/methods.


 
// The observer pattern lets you consolidate and call whatever you want from a single source.

function Subject(){
    this.observers = []; //array of observer functions 
   }
   Subject.prototype = {  
    subscribe: function(fn)  
    {    
      this.observers.push(fn)  
    },  
    unsubscribe: function(fnToRemove)  
    {    
       this.observers = this.observers.filter( fn => {      
          if (fn != fnToRemove)        
                return fn    
       })  
    },  
    fire: function()  
    {    
       this.observers.forEach( fn => {
          fn.call()    
     })  
 }}
 
 function ObserverTest(){  
    console.log("observer test works!")
 } 
 
 function AnotherFunction(){  
    console.log("it works again")
 }

 //subscribing the functions
const subject = new Subject();

subject.subscribe(ObserverTest)
subject.subscribe(AnotherFunction)

//runing all the subscriptions once
subject.fire()