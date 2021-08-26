// https://dev.to/azure/dependency-injection-in-javascript-101-2b1e
 
var log = console.log;
function Wheels() {
	this.action = () => log("The wheels go 'round and 'round.");
	log("Made some wheels.");
  }
  
  function Pistons() {
	this.action = () => log("The pistons fire up and down.");
	log("Made some pistons.");
  }
  
  function Engine() {
	this.pistons = new Pistons();
	this.action = () => {
	  this.pistons.action();
	  log("The engine goes vroom vroom.");
	};
	log("Made an engine.");
  }
  
  function Car() {
	this.wheels = new Wheels();
	this.engine = new Engine();
	this.action = () => {
	  this.wheels.action();
	  this.engine.action();
	  log("The car drives by.");
	};
	log("Made a car.");
  }
  
  var car = new Car();
  car.action();