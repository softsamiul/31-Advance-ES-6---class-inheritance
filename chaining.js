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
    // This is called chaing company.ceo; that means we get the valu by chain
const { age, height, name } = company.ceo;

console.log(name, age, height);

// Optional chaining
console.log(company?.backed?.tech);