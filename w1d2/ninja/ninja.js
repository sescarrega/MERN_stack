// parent class
class Ninja {
    constructor(name, health){
        // attributes
        this.name = name;
        this.health = health; 
        this.speed = 3;
        this.strength = 3; 
        
    }
        // methods
        sayName(){
            console.log(ninjaName);
        }

        showStats(){
            console.log(  ` ${this.name}, strength: ${this.strength},speed: ${this.speed}, health: ${this.health}`);
            // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
        }

        drinkSake(){
            this.health += 10;
        }
}
class Sensei extends Ninja{
    constructor(name){
        super( name, 200);
        this.wisdom = 10;
        // this.health = 200;
        this.speed= 10;
        this.strength = 10; 
        // super( name, 200)
    }
    speakWisdom(){
        this.drinkSake();
        // console.log("What one programmer can do in one month, two programmers can do in two months");
        console.log(this.wisdom);
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"