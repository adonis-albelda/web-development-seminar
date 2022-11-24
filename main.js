// // before you would do something like this
const person = {
  name: 'Sara',
  age: 25,
  gender: 'female'    
}

// const numbers = [0, 1, 2, 3, 4, 5]

/** old way of getting property inside of object and assing it to a variable */

/** for object */
// let name = person.name;
// let age = person.age;
// let gender = person.gender;

/** for array */
// let firstNumber = numbers[0]

/** new way of doing it */

/** for object */
// let { name, age, gender } = person;

/** for array */
// let [firstNumber] = numbers

/** results for object */
// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

/** results for array */
// console.log(firstNumber)