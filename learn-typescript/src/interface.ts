interface Person {
  name: string;
  type: string;
}
interface Student {
    age: number;
    major: string;
    school: string;
}
type StudentPerson = Person & Student;
const studentPerson: StudentPerson = {
    name: "Nguyen Van A",
    type: "Student",
    age: 20,
    major: "Computer Science",
    school: "HUST"
};
console.log(studentPerson);
