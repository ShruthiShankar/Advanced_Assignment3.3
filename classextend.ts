/*Parent class which will be extended by sub class*/
class Animal {
	name: string;

	constructor(animalName:string) {
		this.name = animalName;
	}

	//method to print the distance travelled by the animal
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance} meters`);
	 }

	 //method to print the sound of the animal
	makeSound(sound: string) {
		console.log(`{this.name} sound`);
	}
}

class Dog extends Animal{
	constructor(name: string) {
		super(name);
	}

	move(distance = 40) {
		console.log(`${this.name} moved ${distance} meters`);
	}

	makeSound(sound: string) {
		console.log(`${this.name} ${sound}`);
	}
}

class Lion extends Animal{
	constructor(name: string) {
		super(name);
	}

	move(distance = 40) {
		console.log(`${this.name} moved ${distance} meters`);
	}

	makeSound(sound: string) {
		console.log(`${this.name} ${sound}`);
	}
}

//cretes the object of Animal of type Dog
let dog = new Dog("Pamorian");
dog.move(30);
dog.makeSound("barks");

//creates an object of Animal of type Lion
let lion = new Lion("Tiger");
lion.move(50);
lion.makeSound("Roars");