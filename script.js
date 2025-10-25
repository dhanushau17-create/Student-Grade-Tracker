let students = [];

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const grade = parseFloat(document.getElementById("grade").value);

  if (name === "" || isNaN(grade) || grade < 0 || grade > 100) {
    alert("Please enter a valid name and grade (0–100).");
    return;
  }

  students.push({ name, grade });
  document.getElementById("name").value = "";
  document.getElementById("grade").value = "";

  updateTable();
  calculateStats();
}

function updateTable() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  students.forEach(s => {
    const row = `<tr><td>${s.name}</td><td>${s.grade}</td></tr>`;
    tbody.innerHTML += row;
  });
}

function calculateStats() {
  if (students.length === 0) return;

  const grades = students.map(s => s.grade);
  const avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
  const high = Math.max(...grades);
  const low = Math.min(...grades);

  document.getElementById("avg").textContent = avg;
  document.getElementById("high").textContent = high;
  document.getElementById("low").textContent = low;
}
