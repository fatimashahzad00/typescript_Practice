class Person {
    name;
}
class Student extends Person {
    course;
    rollNumber;
}
class Teacher extends Person {
    course;
    timings;
}
class Course {
    classTeacher;
    students;
    timing;
}
const student1 = new Student();
student1.name = "Student1";
const student2 = new Student();
student2.name = "Student2";
const student3 = new Student();
student3.name = "Student3";
const teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timings = "6-10";
const course = new Course();
course.classTeacher = teacher;
course.timing = teacher.timings;
const stdArray = [student1, student2, student3];
console.log(course);
export {};
