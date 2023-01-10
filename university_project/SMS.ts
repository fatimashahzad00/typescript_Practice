class Person {
    name?: string;
}

class Student extends Person{
    course?: string;
    rollNumber?: string;
}
class Teacher extends Person {
    course?: string;
    timings?: string;
}

class Course {
    classTeacher?: Teacher;
    students?: Student[];
    timing?: string;
}

const student1:Student=new Student();
student1.name="Student1";

const student2:Student=new Student();
student2.name="Student2";

const student3:Student=new Student();
student3.name="Student3";

const teacher:Teacher=new Teacher();
teacher.name="Teacher 1";
teacher.course="PIAIC";
teacher.timings="6-10"

const course:Course= new Course();
course.classTeacher=teacher;
course.timing=teacher.timings;
const stdArray:Student[]=[student1,student2,student3]

console.log(course);
