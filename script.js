var arrayItems = ["Apple", "Banana", "Cherry", "Dragonfruit", "Pear", "Watermelon", "Grapes"];


  let myArray = [];

  // Function to display the array
  function updateArrayDisplay() {
    const arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.textContent = JSON.stringify(myArray);
  }

  // Initial display of the array
  updateArrayDisplay();

  // Optional: Function to refresh the output display
  function clearOutput() {
    document.getElementById("output").innerHTML = "";
  }

  // Optional: Function to validate user input
  function validateInput(value) {
    if (value.trim() === "") {
      alert("Input cannot be empty!");
      return false;
    }
    return true;
  }

  // A function to display the array using a for-loop
  function showArray() {
    clearOutput();
    const outputDiv = document.getElementById("output");
    let result = "<h4>Displaying Array (Forward):</h4><ul>";
    for (let i = 0; i < myArray.length; i++) {
      result += `<li>${myArray}</li>`;
    }
    result += "</ul>";
    outputDiv.innerHTML = result;
  }

  // A function to display the array in reverse using a for-loop
  function showReverse() {
    clearOutput();
    const outputDiv = document.getElementById("output");
    let result = "<h4>Displaying Array (Reverse):</h4><ul>";
    for (let i = myArray.length - 1; i >= 0; i--) {
      result += `<li>${myArray}</li>`;
    }
    result += "</ul>";
    outputDiv.innerHTML = result;
  }

  // A function that uses unshift()
  function addUnshift() {
    clearOutput();
    const addValueInput = document.getElementById("addValue");
    const value = addValueInput.value;

    if (validateInput(value)) {
      myArray.unshift(value);
      updateArrayDisplay();
      document.getElementById("output").innerHTML = `<p>Added "${value}" to the beginning of the array using unshift(). New array length: ${myArray.length}</p>`;
      addValueInput.value = "";
    }
  }

  // A function that uses push()
  function addPush() {
    clearOutput();
    const addValueInput = document.getElementById("addValue");
    const value = addValueInput.value;

    if (validateInput(value)) {
      myArray.push(value);
      updateArrayDisplay();
      document.getElementById("output").innerHTML = `<p>Added "${value}" to the end of the array using push(). New array length: ${myArray.length}</p>`;
      addValueInput.value = "";
    }
  }

  // A function that uses shift()
  function removeShift() {
    clearOutput();
    if (myArray.length > 0) {
      const removedValue = myArray.shift();
      updateArrayDisplay();
      document.getElementById("output").innerHTML = `<p>Removed "${removedValue}" from the beginning of the array using shift(). New array length: ${myArray.length}</p>`;
    } else {
      document.getElementById("output").innerHTML = "<p>Array is empty, cannot shift elements.</p>";
    }
  }

  // A function that uses pop()
  function removePop() {
    clearOutput();
    if (myArray.length > 0) {
      const removedValue = myArray.pop();
      updateArrayDisplay();
      document.getElementById("output").innerHTML = `<p>Removed "${removedValue}" from the end of the array using pop(). New array length: ${myArray.length}</p>`;
    } else {
      document.getElementById("output").innerHTML = "<p>Array is empty, cannot pop elements.</p>";
    }
  }
