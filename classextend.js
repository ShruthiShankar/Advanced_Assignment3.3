var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Parent class which will be extended by sub class*/
var Animal = (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    //method to print the distance travelled by the animal
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + " meters");
    };
    //method to print the sound of the animal
    Animal.prototype.makeSound = function (sound) {
        console.log("{this.name} sound");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 40; }
        console.log(this.name + " moved " + distance + " meters");
    };
    Dog.prototype.makeSound = function (sound) {
        console.log(this.name + " " + sound);
    };
    return Dog;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.move = function (distance) {
        if (distance === void 0) { distance = 40; }
        console.log(this.name + " moved " + distance + " meters");
    };
    Lion.prototype.makeSound = function (sound) {
        console.log(this.name + " " + sound);
    };
    return Lion;
}(Animal));
//cretes the object of Animal of type Dog
var dog = new Dog("Pamorian");
dog.move(30);
dog.makeSound("barks");
//creates an object of Animal of type Lion
var lion = new Lion("Tiger");
lion.move(50);
lion.makeSound("Roars");
