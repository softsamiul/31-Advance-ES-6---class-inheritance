const friends = ['samiul', 'Akbor', 'Meptaul'];

const friendsLen = friends.map(friend => friend.length);

// console.log(friendsLen);

const products = [
    {name: 'Mobile', price: 8000, color: 'blue'},
    {name: 'laptop', price: 38000, color: 'silver'},
    {name: 'pen', price: 30, color: 'black'},
    {name: 'water bottel', price: 30, color: 'white'},
    
];

const productPrice = products.map(product => product.price);

console.log(productPrice);

const productNames = products.map(product => product.name);
console.log(productNames);

// forEach will print the output by default
products.forEach(product => console.log(product.name));






