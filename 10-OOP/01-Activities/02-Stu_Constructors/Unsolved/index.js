// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
     console.log('Hi my name is ${this.name} and I work with ${this.tech}');
    }
}
  console.log(Developer);
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
// const dogs = new Developer(true, 'Woof!');
// const cats = new Animal(false, 'Meow!');
const natalie = new Developer('Natalie', 'JavaScript');
const molly = new Developer();
const walter = new Developer();

natalie.introduction();
molly.introduction();
walter.introduction();

// // TODO: Create a new object using the 'Developer' constructor
// cats.raining = true;
// cats.makeNoise();



// const massHysteria = (dogs, cats) => {
//     if (dogs.raining === true && cats.raining === true) {
//       console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//     }
//   };

// TODO: Call the 'introduction()' method on the new object
