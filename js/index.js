// serial number used dynamically
let serial = 0;
// get the data from triangle
document.getElementById('card-triangle').addEventListener('click', function () {
  // serial += 1;
  const triangleName = document.getElementById('triangle-name').innerText;
  const triangelBase = document.getElementById('triangle-base').value;
  const triangleHieght = document.getElementById('triangle-hieght').value;

  let shapeArea = 0.5 * parseFloat(triangelBase) * parseFloat(triangleHieght);
  let newArea = shapeArea.toFixed(2);

  if (triangelBase === "" || triangleHieght === "") {
    displayAlert("Please enter a valid number!");
  }
  else if (isNaN(triangelBase) || isNaN(triangleHieght)) {
    displayAlert('Please enter number value!')
  }
  else if (triangelBase <= 0 || triangleHieght <= 0) {
    displayAlert("Please enter positive number!")
  }
  else {
    serial += 1
    displayData(triangleName, newArea)
  }
})

// get the data from rectangle
document.getElementById('card-rectangle').addEventListener('click', function () {
  // serial += 1;
  const rectangleName = document.getElementById('rectangle-name').innerText;
  const rectangleWidth = document.getElementById('rectangle-width').value;
  const rectangleLength = document.getElementById('rectangle-length').value;

  let rectangleArea = parseFloat(rectangleWidth) * parseFloat(rectangleLength);
  let newRectangleArea = rectangleArea.toFixed(2);

  if (rectangleWidth === "" || rectangleLength === "") {
    displayAlert('Please enter a valid number!');
  }
  else if (rectangleWidth <= 0 || rectangleLength <= 0) {
    displayAlert('Please enter positve number!')
  }
  else if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
    displayAlert('Please enter Number value');
  }
  else {
    serial += 1
    displayData(rectangleName, newRectangleArea);
  }
})

// get the data from Parallelogram
document.getElementById('card-parallelogram').addEventListener('click', function () {
  const parallelogramName = document.getElementById('parallelogram-name').innerText;
  const parallelogramBase = document.getElementById('parallelogram-base').value;
  const parallelogramHieght = document.getElementById('parallelogram-hieght').value;

  let parallelogramArea = parseFloat(parallelogramBase) * parseFloat(parallelogramHieght);
  let newParallelogramArea = parallelogramArea.toFixed(2);

  if (parallelogramBase === "" || parallelogramHieght === "") {
    displayAlert('Please enter a valid number!');
  }
  else if (parallelogramBase <= 0 || parallelogramHieght <= 0) {
    displayAlert('Please enter positve number!')
  }
  else if (isNaN(parallelogramBase) || isNaN(parallelogramHieght)) {
    displayAlert('Please enter Number value');
  }
  else {
    serial += 1
    displayData(parallelogramName, newParallelogramArea);
  }
})

// get the data from Rhombus
document.getElementById('card-rhombus').addEventListener('click', function () {
  // serial += 1;
  const rhombusName = document.getElementById('rhombus-name').innerText;
  const rhombusDistance1 = document.getElementById('rhombus-distance1').value;
  const rhombusDistance2 = document.getElementById('rhombus-distance2').value;

  let rhombusArea = 0.5 * parseFloat(rhombusDistance1) * parseFloat(rhombusDistance2);
  let newRhombusArea = rhombusArea.toFixed(2);

  if (rhombusDistance1 === "" || rhombusDistance2 === "") {
    displayAlert("Please enter a valid number!");
  }
  else if (isNaN(rhombusDistance1) || isNaN(rhombusDistance2)) {
    displayAlert('Please enter number value!')
  }
  else if (rhombusDistance1 <= 0 || rhombusDistance2 <= 0) {
    displayAlert("Please enter positive number!")
  }
  else {
    serial += 1
    displayData(rhombusName, newRhombusArea)
  }
})

// get the data from Pentagon
document.getElementById('card-pentagon').addEventListener('click', function () {
  const pentagonName = document.getElementById('pentagon-name').innerText;
  const pentagonPerimeter = document.getElementById('pentagon-perimeter').value;
  const pentagonBase = document.getElementById('pentagon-base').value;

  let pentagonArea = 0.5 * parseFloat(pentagonPerimeter) * parseFloat(pentagonBase);
  let newPentagonArea = pentagonArea.toFixed(2);

  if (pentagonPerimeter === "" || pentagonBase === "") {
    displayAlert("Please enter a valid number!");
  }
  else if (isNaN(pentagonPerimeter) || isNaN(pentagonBase)) {
    displayAlert('Please enter number value!')
  }
  else if (pentagonPerimeter <= 0 || pentagonBase <= 0) {
    displayAlert("Please enter positive number!")
  }
  else {
    serial += 1
    displayData(pentagonName, newPentagonArea)
  }
})

// get the data from Ellipse
document.getElementById('card-ellipse').addEventListener('click', function () {
  const ellipseName = document.getElementById('ellipse-name').innerText;
  const ellipseAxisA = document.getElementById('ellipse-axis-a').value;
  const ellipseAxisB = document.getElementById('ellipse-axis-b').value;

  let ellipseArea = 0.5 * parseFloat(ellipseAxisA) * parseFloat(ellipseAxisB);
  let newEllipseArea = ellipseArea.toFixed(2);

  if (ellipseAxisA === "" || ellipseAxisB === "") {
    displayAlert("Please enter a valid number!");
  }
  else if (isNaN(ellipseAxisA) || isNaN(ellipseAxisB)) {
    displayAlert('Please enter number value!')
  }
  else if (ellipseAxisA <= 0 || ellipseAxisB <= 0) {
    displayAlert("Please enter positive number!")
  }
  else {
    serial += 1
    displayData(ellipseName, newEllipseArea)
  }
})

//common function for alert
function displayAlert(message) {
  alert(message);
}

// common function to display data
function displayData(NameOfShape, AreaOfShape) {
  const container = document.getElementById('table-container');
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${NameOfShape}</td>
    <td>${AreaOfShape}cm<sup>2</sup></td>
    <td><button class="btn btn-primary btn-xs">Convert</button></td>
 `
  container.appendChild(tr)
}


// blog page functionality
document.getElementById('target-blog').addEventListener('click', function () {
  window.location.href = "blog.html";
})

// background color change randomly while mousehover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.setProperty('--random-color', getRandomColor());
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}