interface Student {
    student_id: number;
    name: string;
}

interface Teacher {
    teacher_id: number;
    teacher_name: string;
}

type intersected_type = Student & Teacher;

let obj1: intersected_type = {
    student_id: 6427,
    name: "rita",
    teacher_id: 3623,
    teacher_name: "seema"
}

console.log(obj1.teacher_id);
console.log(obj1.name);

