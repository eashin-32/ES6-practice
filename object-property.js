const student =[
    {id:10, Name:'Omar Sunny'},
    {id:21, Name:'Mannaaaa'},
    {id:31, Name:'Moyouri'},
    {id:101, Name:'DeepJol'},

]
const output = []
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const result = element.Name;
    output.push(result);
}

//console.log(output);

//Pondit ES6 array object accessing method

const names = student.map(s => s.Name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>30);
const smaller = student.find(s => s.id<30);

console.log(smaller)