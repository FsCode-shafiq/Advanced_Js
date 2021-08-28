
// ** Throttling **

// Throttling is a technique in which, no matter how many times the user fires the event,
// the attached function will be executed only once in a given time interval.

const throttle = (fun , delay)=>{
    let last  = 0;
    return (...args)=>{
        let now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        //console.log("run");
        last = now;
        return fun(...args);
    }
    
}

document.getElementById('throttle').addEventListener('click', throttle((e)=>{
    console.log("event fire");
} , 5000));
