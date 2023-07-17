let operatorElement = document.querySelectorAll(".operator");
let numbers = document.querySelectorAll(
  ".container button:not(.operator,.equals,.negative,.clear,.decimal)"
);
let decimalElement = document.querySelector(".decimal");
let equalsElement = document.querySelector(".equals");
let clearElement = document.querySelector(".clear");
let topElement = document.querySelector(".top-num");
let bottomElement = document.querySelector(".bottom-num");
let negativeElement = document.querySelector(".negative");
let operator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;

clearElement.addEventListener("click", () => {
  clear();
  bottomElement.textContent = "";
});

for (let number of numbers) {
  number.addEventListener("click", () => {
    let numberText = number.textContent;
    bottomElement.textContent += numberText;
  });
}

for (let operatorButton of operatorElement) {
  operatorButton.addEventListener("click", () => {
    let operatorText = operatorButton.textContent;
    if (["+", "-", "x", "÷", "%"].includes(operatorText)) {
      if (firstOperand !== null && operator !== null) {
        secondOperand = parseFloat(bottomElement.textContent);
        calculate();
        firstOperand = result;
        operator = operatorText;
      } else {
        firstOperand = parseFloat(bottomElement.textContent);
        operator = operatorText;
      }
      console.log(operator);
      bottomElement.textContent = "";
    }
  });
}

equalsElement.addEventListener("click", () => {
  if (firstOperand !== null && operator !== null) {
    secondOperand = parseFloat(bottomElement.textContent);
    calculate();
    bottomElement.textContent = result;
    firstOperand = result;
    operator = null;
    secondOperand = null;
  }
});

negativeElement.addEventListener("click", () => {
  if (bottomElement !== "") {
    let currentValue = parseFloat(bottomElement.textContent);
    bottomElement.textContent = (-currentValue).toString();
  }
});

const percent = (a, b) => {
  return (a * b) / 100;
};

const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = function (a, b) {
  return a + b;
};

function calculate() {
  switch (operator) {
    case "+":
      result = sum(firstOperand, secondOperand);
      break;
    case "-":
      result = subtract(firstOperand, secondOperand);
      break;
    case "x":
      result = multiply(firstOperand, secondOperand);
      break;
    case "÷":
      result = divide(firstOperand, secondOperand);
      break;
    case "%":
      result = percent(firstOperand, secondOperand);
      break;
    default:
      throw new Error("ERROR");
  }
}

function clear() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = null;
}
