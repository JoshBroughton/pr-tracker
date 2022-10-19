import Entry from './entry.js';

const table = document.getElementById('table');
const data = [];
const entryButton = document.getElementById('add-entry-button');
const savedData = 
entryButton.addEventListener('click', addEntry)

function generateDataArray() {
  for (let i = 1; i < 21; i++) {
    if(localStorage.getItem(`${i}-weight`)) {
      data.push(new Entry(i, localStorage.getItem(`${i}-weight`), new Date(localStorage.getItem(`${i}-date`))));
    } else {
      data.push(new Entry(i));
    }
  }
}

generateDataArray();

function generateTable() {
  data.forEach((entry, i) => {
    const tableRow = document.createElement('tr');
    tableRow.id = `row-${i + 1}`;
    insertTableData(tableRow, entry);
    table.appendChild(tableRow);
  })
}

function insertTableData(row, entryObj) {
  const repCell = document.createElement('td');
  const prCell = document.createElement('td');
  const e1rmCell = document.createElement('td');
  const dateCell = document.createElement('td');

  repCell.className = 'tableData';
  prCell.className = 'tableData';
  e1rmCell.className = 'tableData';
  dateCell.className = 'tableData';

  repCell.innerText = entryObj.getReps();
  prCell.innerText = entryObj.getWeight();
  e1rmCell.innerText = entryObj.getE1rm();
  dateCell.innerText = entryObj.getDate();

  row.append(repCell, prCell, e1rmCell, dateCell);
}


function addEntryToArray() {
  const repsInput = document.getElementById('reps-input');
  const weightInput = document.getElementById('PR-weight-input');
  const dateInput = document.getElementById('date-input');
  const reps = repsInput.value;
  const weight = weightInput.value;
  let date = new Date(dateInput.value);
  console.log(date);
  date = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  );
  console.log(date);
  repsInput.value = 0;
  weightInput.value = 0;
  
  const entry = new Entry(reps, weight, date);
  data[reps - 1] = entry;
  return entry;
}

function addEntryToTable(entry) {
  const row = document.getElementById(`row-${entry.getReps()}`);
  insertTableData(row, entry);
}

function clearEntryFromTable(reps) {
  const row = document.getElementById(`row-${reps}`);
  row.innerHTML = '';
}

function saveEntryToLocalStorage(entry) {
  localStorage.setItem(`${entry.getReps()}-weight`, `${entry.getWeight()}`);
  localStorage.setItem(`${entry.getReps()}-date`, `${entry.getDate()}`);
}

function addEntry() {
  const entry = addEntryToArray();
  clearEntryFromTable(entry.getReps());
  addEntryToTable(entry);
  saveEntryToLocalStorage(entry);
}


generateTable();