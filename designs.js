// Select color input
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');



// Select size input

const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();

});
// When size is submitted by the user, call makeGrid()


function makeGrid() {
  document.querySelector('tr').remove();
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  for (let i = 0; i < width; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < height; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}