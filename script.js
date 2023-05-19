function print() {
    var numInput = document.getElementById("num"); // Get the input element
    var num = parseInt(numInput.value); // Convert input value to integer
  
    // Check if the input is a valid number
    if (isNaN(num)) {
      alert("Please enter a valid number.");
      return;
    }
  
    var table = document.querySelector(".table"); // Get the table container element
  
    // Clear any existing table content
    table.innerHTML = "";
  
    // Generate the multiplication table
    for (var i = 1; i <= 10; i++) {
      var result = num * i; // Calculate the multiplication result
  
      // Create a box element for each table entry
      var box = document.createElement("div");
      box.classList.add("box");
  
      // Create a span element to hold the equation
      var equation = document.createElement("span");
      equation.classList.add("box-equation");
      equation.textContent = num + " X " + i + " = " + result;
  
      // Append the equation span to the box element
      box.appendChild(equation);
  
      // Append the box element to the table container
      table.appendChild(box);
    }
  }
  
  var input = document.getElementById("num");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      print();
    }
  });
  
  var generateButton = document.getElementById("inp");
  generateButton.addEventListener("click", print);
  