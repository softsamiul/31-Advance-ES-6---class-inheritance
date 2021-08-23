const numbers = [12, 34, 23, 45];
// const output = [];
// old way to declare function
function doubleOld(n){
    const result = n * 2;
    return result;
}

// arrow function
const doubleIt = n => n*2;

// old way to catch every single element of an array
// for(const n of numbers){
//     console.log(doubleIt(n));
// }

// using map() method

const double = numbers.map(doubleIt);
// output.push(double)
// console.log(double);
// console.log(output);

const output = numbers.map(x => x * x);

// console.log(output);

const names = ['Samiul', 'asif', 'Tamim'];

const modifiedName = names.map(x => x + ' Islam');

const lastNameAdded = names.map( b => b + ' Molla');

console.log(lastNameAdded);





