// PolyMorphism

class animals{
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(`${this.name} eats food`);
    }
}

class Alligator extends animals{
    eats(){
        super.eats();
        console.log(`${this.name} eats fishes`);
    }
}

let babyAlligator = new Alligator('murphy');

babyAlligator.eats();