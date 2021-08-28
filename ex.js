a = this;
console.log(this);

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  // processUserInput(greeting);

  let spread = [{a:1},{b:2},{c:3},{d:4},{e:5}];
  console.log(...spread);