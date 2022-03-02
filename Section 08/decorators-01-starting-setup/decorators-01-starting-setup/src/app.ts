// DECORATOR
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// } 

// @Logger

//DECORATOR FACTORY
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging person') //Function executes when used as a Decorator Factory
class Person {
  name = "Bo";
  constructor() {
    console.log('Creating person object...')
  }
}
const person = new Person();
console.log(person)