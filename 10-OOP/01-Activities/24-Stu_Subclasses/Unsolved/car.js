// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 0, 'bwom');
    this.type = type;
    this.passengers = passengers;

    useHorn() {
      console.log(this.sound);
    }
    crewSoundOff() {
      this.crew.forEAch((member) => )
    }
  }
}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
