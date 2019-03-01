// Your code here
const table = document.getElementsByTagName('table')[0];
const select = document.getElementsByTagName('select')[0];
const addRowButton = document.getElementById('add-row');
const fillBoardButton = document.getElementById('fill-board');
const clearButton = document.getElementById('clear');
const remainderButton = document.getElementById('paint-remainding-cells');
const addColumnButton = document.getElementById('add-col');
const removeColumnButton = document.getElementById('remove-col');
const removeRowButton = document.getElementById('remove-row');
const numRows = document.querySelector('input');

let chosenColor = 'red';
let tds = [];

addRowButton.addEventListener('click', () => { 
    makeRow(numRows);
});
table.addEventListener('click', colorize);
table.addEventListener('mousedown', () => {
    table.addEventListener('mouseover', colorize);
})
table.addEventListener('mouseup', () => {
    table.removeEventListener('mouseover', colorize);
})
function colorize(event) {
    let target = event.target;
    if (target.tagName === 'TD') {
        if (target.className === chosenColor) {
            target.className = '';
        }
        else {
            target.className = chosenColor;
        }
    }
}
function makeRow(num) {
    let numCols = num.value;
    
    const row = document.createElement('tr');
    for (let i = 0; i < numCols; i++) {
        const td = document.createElement('td');
        row.appendChild(td);
    }
    table.appendChild(row);
    tds = document.querySelectorAll('td');
}


/********* EXTRA CREDIT *********/
fillBoardButton.addEventListener('click', () => {
    tds.forEach(td => {
        td.className = chosenColor;
    })
})
clearButton.addEventListener('click', () => {
    tds.forEach(td => { td.className = '' });
})
remainderButton.addEventListener('click', () => {
    tds.forEach(td => {
        if (td.className === '') {
            td.className = chosenColor;
        }
    })
})
addColumnButton.addEventListener('click', () => {
    let rows = document.querySelectorAll('TR');
    rows.forEach(row => {
        row.appendChild(document.createElement('td'));
    })
})
removeColumnButton.addEventListener('click', () => {
    let rows = document.querySelectorAll('TR');
    rows.forEach(row => {
        row.deleteCell(numRows.value - 1);
    })
})
removeRowButton.addEventListener('click', () => {
    table.deleteRow(0);
})
select.addEventListener('change', (event) => {
    chosenColor = event.target.value;
})

