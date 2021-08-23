// Declaring class  
/*
1. start with class keyword
2. give a name and start with cpital letter
3. have a constructor function  to add dynamic parameter
4. call the class using new keywork
*/

class JuniorDev{
    name;
    role = 'Junior Web Dev';
    address = 'India';
    constructor(name){
        this.name = name;
    }
    startSession(){
        console.log(this.name,'Start a session');
        
    }
}

const samiul = new JuniorDev('Samiul');

const tamim = new JuniorDev('Tamim');

tamim.startSession();
console.log(tamim);
console.log(samiul);


class Mobile{
    name;
    color;
    price;
    constructor(name, price, color){
        this.name = name;
        this.color = color;
        this.price = price;
    }
}

const honor7a = new Mobile('Honor 7A', 10000, 'Blue');
const note7a = new Mobile('Note 7A', 10000, 'Pink');

console.log(note7a);

console.log(honor7a);
