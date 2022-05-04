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
            console.log("${this.name} current stats are: ${this.strength}, ${this.speed}, ${this.health}");
        }

        drinkSake(){
            this.health += 10;
        }
}

