// Calculate Area
const calculateArea = (radius) => Math.PI * radius * radius;

// Display Area
const displayArea = () => {
  const radius = parseFloat(document.getElementById("radius-input").value);

  if (isNaN(radius) || radius <= 0) {
    document.getElementById("result").innerText =
      "Please enter a valid radius.";
    return;
  }

  const area = calculateArea(radius);
  document.getElementById(
    "result"
  ).innerText = `The area of the circle is: ${area.toFixed(2)}`;
};

document.getElementById("calculate-btn").addEventListener("click", displayArea);
