const fish = {
        id: 58,
        name: 'King Hilsha',
        phone: '012345678',
        adress: 'Kolkata',
        color: 'rupali',
    }
    // const id = fish.id;
    // const name = fish.name;
const { id, name } = fish;

// console.log(id);
// console.log(name);
const company = {
    name: 'Stack Builder',
    ceo: {
        name: 'Samiuel',
        age: 29,
        height: 5.7,
        color: 'fair'
    },
    tech: {
        frontEnd: {
            first: 'HTML',
            second: 'CSS',
            third: 'JS',
            fourth: 'React Js'
        }
    },
    address: 'Kolkata'
}

const { first, second, third } = company.tech.frontEnd;

console.log(first, second, third);