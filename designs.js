// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input

const

// When size is submitted by the user, call makeGrid()


function makeGrid() {
  let height = document.getElementById('inputHeight').val();
  let width = document.getElementById('inputWidth').val();
  let tableRow = document.getElementsByTag('tr');
  for (let i = 0; i < height, i++) {
    table.prepend("<tr></tr>");
  }
  for (let j = 0; j < width; j++) {
    tableRow.prepend("<td></td>");
  }
}


}