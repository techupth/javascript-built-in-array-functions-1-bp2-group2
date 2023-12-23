const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

const getAverageStudentScore =
  students.reduce((acc, student) => acc + student.score, 0) / students.length;

console.log(getAverageStudentScore);
