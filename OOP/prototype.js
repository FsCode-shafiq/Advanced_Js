// inherits features

class Animals1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
} 

Animals1.prototype.sing = function() {
    return `${this.name} can sing`;
}
Animals1.prototype.dance = function()  {
    return `${this.name} can dance`;
}
class Cats extends Animals1 {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing());
console.log(clara.whiskers());

