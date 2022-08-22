/////////////////////////////////////////
const a = 1;
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; ++i) {
  console.log(arr[i]);
}

function add(a, b) {
  return a + b;
}

/////////////////////////////////////////
const students = []
students
  .filter((student) => student.grade === 3)
  .forEach((student) => console.log(student.name));

/////////////////////////////////////////
const myStudent = {
  name: "woo",
};
const myStudentWithId = {
  ...myStudent,
  grade: 3,
};
console.log(myStudentWithId); // { name: "woo", grade: 3 }

const myStudents = [{ name: "a" }, { name: "b" }];
const myStudentWithWoo = [...myStudents, myStudent];

console.log(myStudentWithWoo); // [{ name: "a" }, { name: "b" }, { name: "woo" }]

/////////////////////////////////////////
const woo = { name: "woo", grade: 1 };

const { name } = woo;
const { grade: wooGrade } = woo;

console.log(name); // "woo"
console.log(wooGrade); // 1

/////////////////////////////////////////
const list = [1, 2, 3, 4, 5];

list.map((value) => value * 2);
list.map(function(value) { return value * 2; });

// example with Promise.then
const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

// example with async/await
const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await response.json();
  console.log(json);
}

const search = document.getElementById("top-nav-search-input");
alert(`search = ${search.value}`);

const footer = document.getElementById("nav-footer");
footer.addEventListener("click", () => {
  footer.innerHTML = "<h2>BOOM!</h2>";
});