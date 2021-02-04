class Parent{
    constructor(){
        this.FathersName = 'Herricks'
    }
}

class Son extends Parent{
    constructor(name){
        super()
        this.Name = name;
    }
    getFullName(){
        return this.Name + ' ' + this.FathersName
    }
}

const son1 = new Son('Tom');
const son2 = new Son('Bradly')
console.log(son1.getFullName());
console.log(son2.getFullName());