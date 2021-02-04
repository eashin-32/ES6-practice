class Student{
    constructor(sId,sName){
        this.Id = sId;
        this.Name = sName;
        this.School = 'Meleng High School';
    }
}

const student1 = new Student(18,'Shadin');
const student2 = new Student(22,'Abir');

console.log(student1,student2)