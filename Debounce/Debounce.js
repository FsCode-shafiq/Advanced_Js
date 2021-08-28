

// ** Debouncing

// In the debouncing technique, no matter how many times the user fires the event,
// the attached function will be executed only after the specified time once the user stops firing the event.

const debounce = (fn , delay)=>{
    let timeoutID;
    return (...args)=>{
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(()=>{
            fn(...args);
        }, delay)
    }
}

document.getElementById('debounce').addEventListener('click', debounce(()=>{
    console.log("debounce fire");
}, 2000));