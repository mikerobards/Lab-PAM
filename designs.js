// Select color input

const table = document.getElementById('pixelCanvas');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');

// Select size input

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});

// adds color to cells when clicked

table.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (evt.target.nodeName === "TD") {
    evt.target.style.backgroundColor = color.value;
  }
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  table.innerHTML = '';
  let tr, td;
  for (let m = 0; m < height.value; m++) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (let n = 0; n < width.value; n++) {
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}