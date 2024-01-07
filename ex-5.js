const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

const divideByArrNum = students.length;

function getAverageStudentScore(totalStudents, students) {
  // Start coding here
  return totalStudents + students.score / divideByArrNum;
}

let result = students.reduce(getAverageStudentScore, 0);
console.log(result);



students.map(getAverageStudentScore); // Output: 87.5
