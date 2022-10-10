const table = document.getElementById('table');

function generateTable() {
  for (let i = 1; i < 21; i++) {
    const tableRow = document.createElement('tr');
    tableRow.id = `row-${i}`;
    insertTableData(tableRow, i);
    table.appendChild(tableRow);
  }
}

function insertTableData(row, reps, pr = 0, e1rm = 0, date = new Date()) {
  const repCell = document.createElement('td');
  const prCell = document.createElement('td');
  const e1rmCell = document.createElement('td');
  const dateCell = document.createElement('td');

  repCell.className = 'tableData';
  prCell.className = 'tableData';
  e1rmCell.className = 'tableData';
  dateCell.className = 'tableData';

  repCell.innerText = reps;
  prCell.innerText = pr;
  e1rmCell.innerText = e1rm;
  dateCell.innerText = formatDate(date);

  row.append(repCell, prCell, e1rmCell, dateCell);
}

function formatDate(date) {
  let dateString = date.toDateString();
  dateString = dateString.slice(4, 10) + ',' + dateString.slice(10); 
  return dateString;
}

function addEntry() {
  const repsInput = document.getElementById('reps-input');
  const weightInput = document.getElementById('PR-weight-input');
  const dateInput = document.getElementById('date-input');
  const reps = repsInput.value;
  const weight = weightInput.value;
  const date = dateInput.value;
  repsInput.value = 0;
  weightInput.value = 0;
  dateInput.value = new Date();

  const repsCell = document.querySelector(`#row-${reps}:nth-child(2)`);
}

generateTable();