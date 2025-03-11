// Create a function that filters students over 18 years old.

function filterStudents(students) {
    return students.filter(student => student.age > 18);
}

const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 17 },
    { name: 'Tom', age: 22 },
    { name: 'Alice', age: 19 },
];
console.log(filterStudents(students))