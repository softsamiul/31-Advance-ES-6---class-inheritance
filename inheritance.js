// paren class is TeamMembers and other classes are child class here child classes access the name and address from paren class TeamMembers. This is how inheritance work in js .

class TeamMembers{
    name;
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class AndroidDeveloper extends TeamMembers{
    role = 'Android Developer';
    editor;
    language = 'React Native';
    constructor(name, address,editor){
        super(name, address);
        this.editor = editor;
    };
    releaseApp(version){
        console.log(this.name, 'Release app version', version);
    }
}

const ana = new AndroidDeveloper('Ana', 'India', 'Android Stduio');
ana.releaseApp('1.9.4');

class WebDev extends TeamMembers{
    backEndLanguage;
    constructor(name, address,language){
        super(name, address);
        this.backEndLanguage = language;
    }
    role = 'Web Developer';
    startProject(projectName){
        console.log(this.name,'Started a new project', projectName);
        
    }
}

const john = new WebDev('John', 'New York','NodeJS');
john.startProject('ELearning System for America');
console.log(john);








console.log(ana);
