let screen = document.getElementById("screen");

function press(value) {
  if (screen.value === "0") screen.value = "";
  screen.value += value;
}

function clearScreen() {
  screen.value = "0";
}

function percent() {
  screen.value = screen.value / 100;
}

function Delete() {
  screen.value = screen.value.slice(0, -1);

  if (screen.value === "") {
    screen.value = "0";
  }
}

function calc() {
  try {
    screen.value = eval(screen.value);
  } catch (e) {
    screen.value = "Error";
  }
}