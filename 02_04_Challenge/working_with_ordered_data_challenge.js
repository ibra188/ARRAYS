//Sort, Reverse, Find, FindIndex
const students = [
  { name: 'John', grade: 75 },
  { name: 'Jane', grade: 93 },
  { name: 'Samantha', grade: 90 },
  { name: 'Michael', grade: 94 },
];

//Challenge Question #1
//Sort the array of students based on their grade,
students.sort();
//in descending order(largest to smallest).
students.sort((a, b) => {
  return a.grade - b.grade;
})
//Challenge Question #2
//After sorting the array, reverse the order of the array.
students.reverse();
console.log("student reversed:", students);
//Challenge Question #3
//Find a student in the array who has a grade over 90.
const overGrande = students.find((students) => students > 90);
console.log("student with grande over 90:", overGrande);
