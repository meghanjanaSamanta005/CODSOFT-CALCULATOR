let display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = null;
let operationClicked = false;

function appendNumber(number) {
  if (display.innerText === "0" || operationClicked) {
    display.innerText = number;
    operationClicked = false;
  } else {
    display.innerText += number;
  }
}

function setOperation(op) {
  if (currentOperand !== "") {
    calculate();
  }
  operation = op;
  previousOperand = display.innerText;
  currentOperand = "";
  operationClicked = true;
}

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(display.innerText);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    default:
      return;
  }

  display.innerText = result;
  currentOperand = result;
  previousOperand = "";
  operation = null;
}

function clearDisplay() {
  display.innerText = "0";
  currentOperand = "";
  previousOperand = "";
  operation = null;
}