let serial = 0;

/*
Method 1
Area = 0.5 * height * base
*/
function getAreaMethodOne(height, base) {
  const area = 0.5 * height * base;
  if (area % 1 == 0) {
    return area;
  } else {
    return area.toFixed(2);
  }
}

/*
Method 2
Area = height * base
*/
function getAreaMethodTwo(height, base) {
  const area = height * base;
  if (area % 1 == 0) {
    return area;
  } else {
    return area.toFixed(2);
  }
}

// Ellipse Area Calculation
function getEllipseArea(height, base) {
  const area = Math.PI * height * base;
  if (area % 1 == 0) {
    return area;
  } else {
    return area.toFixed(2);
  }
}

// Validating both input values
function validate(height, base) {
  if (isNaN(height) || isNaN(base)) {
    alert("Please enter a valid number");
  } else if (height <= 0 || base <= 0) {
    alert("Please enter positive numbers");
  } else {
    return true;
  }
}

// Generating Random Color
function generateRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

// Setting Up Random Color on mouseover
function getRandomColor(card) {
  card.addEventListener("mouseover", function () {
    const color = generateRandomColor();
    card.style.backgroundColor = color;
  });
}

// Setting White background on mouseout
function resetColor(card) {
  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "white";
  });
}

function clearField(event) {
  const heightField =
    (event.parentNode.children[1].children[2].children[0].value = "");
  const baseField =
    (event.parentNode.children[1].children[2].children[2].value = "");
  return;
}

// Triangle Area event handler
document
  .getElementById("triangle-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getAreaMethodOne(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

// Rectangle Area event handler
document
  .getElementById("rectangle-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getAreaMethodTwo(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

// Parallelogram Area event handler
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getAreaMethodTwo(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

// Rhombus Area event handler
document
  .getElementById("rhombus-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getAreaMethodOne(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

// Pentagon Area event handler
document
  .getElementById("pentagon-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getAreaMethodOne(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

// Ellipse Area event handler
document
  .getElementById("ellipse-btn")
  .addEventListener("click", function (event) {
    const nameOfField =
      event.target.parentNode.children[1].children[0].innerText;
    const height = parseFloat(
      event.target.parentNode.children[1].children[2].children[0].value
    );
    const base = parseFloat(
      event.target.parentNode.children[1].children[2].children[2].value
    );

    if (validate(height, base)) {
      serial++;
      const area = getEllipseArea(height, base);
      displayData(serial, nameOfField, area);
    }
    clearField(event.target);
  });

function displayData(serial, nameOfField, area) {
  const container = document.getElementById("table-container");

  // Convert to meter square button
  const convertButton = document.createElement("button");
  convertButton.classList.add(
    "text-white",
    "bg-[#1090D8]",
    "rounded",
    "p-1",
    "md:p-2",
    "font-medium",
    "my-auto"
  );
  convertButton.innerHTML = "Convert to m<sup>2</sup>";

  // Creating a Table Row
  const tr = document.createElement("tr");

  // Creating Table Data of no and Title
  const tdOne = document.createElement("td");
  tdOne.innerText = serial + ". " + nameOfField;

  // Creating Table Data of area value
  const tdTwo = document.createElement("td");
  tdTwo.innerHTML = area + " cm<sup>2</sup>";

  // Creating Table Data Button
  const tdThree = document.createElement("td");
  tdThree.appendChild(convertButton);

  tr.appendChild(tdOne);
  tr.appendChild(tdTwo);
  tr.appendChild(tdThree);

  // Adding all table data to table row
  container.appendChild(tr);

  convertButton.addEventListener("click", function () {
    const areaInMeter = area / 100;
    tdTwo.innerHTML = areaInMeter.toFixed(2) + " m<sup>2</sup>";
    convertButton.setAttribute("disabled", true);
  });
}

// Displaying Random Color on Hover on Cards
// Triangle Card
const triangleCard = document.getElementById("card-triangle");
getRandomColor(triangleCard);
resetColor(triangleCard);

// Rectangle Card
const rectangleCard = document.getElementById("card-rectangle");
getRandomColor(rectangleCard);
resetColor(rectangleCard);

// Parallelogram Card
const parallelogramCard = document.getElementById("card-parallelogram");
getRandomColor(parallelogramCard);
resetColor(parallelogramCard);

// Rhombus Card
const rhombusCard = document.getElementById("card-rhombus");
getRandomColor(rhombusCard);
resetColor(rhombusCard);

// Pentagon Card
const pentagonCard = document.getElementById("card-pentagon");
getRandomColor(pentagonCard);
resetColor(pentagonCard);

// Ellipse Card
const ellipseCard = document.getElementById("card-ellipse");
getRandomColor(ellipseCard);
resetColor(ellipseCard);