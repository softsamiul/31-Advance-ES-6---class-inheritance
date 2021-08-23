// filter
// almost work like map but here is a option check a condition like find all the element greater than 20 and keep it on a new array

const numbers = [10, 23, 45, 9, 8, 45];

const greaterThan20 = numbers.filter(number => number > 20);

console.log(greaterThan20);

const lessThan10 = numbers.filter(number => number < 10);

console.log(lessThan10);

const products = [
    {name: 'Mobile', price: 8000, color: 'blue'},
    {name: 'laptop', price: 38000, color: 'silver'},
    {name: 'pen', price: 30, color: 'black'},
    {name: 'water bottel', price: 30, color: 'white'},
    
];

const expensiveProducts = products.filter(product => product.price > 100);

console.log(expensiveProducts);

const blueProduct = products.filter(product => product.color == 'blue');

console.log(blueProduct);


// find()

// find will find retrn only first element which meets the condition

const firstMobile = products.find(product => product.name == 'Mobile');

console.log(firstMobile);



