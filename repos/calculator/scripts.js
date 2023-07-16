const buttonElement = document.querySelectorAll("button");
const displayElement = document.querySelector(".display");
const clearElement = document.querySelector(".clear");
const negativeElement = document.querySelector(".negative");
const percentElement = document.querySelector(".percent");
const divideElement = document.querySelector(".divide");
const multiplyElement = document.querySelector(".multiply");
const subtractElement = document.querySelector(".subtract");
const sumElement = document.querySelector(".sum");
const equalsElement = document.querySelector(".equals");
const answerElement = document.querySelector(".answer");
const operatorElement = document.querySelectorAll(".operator");
let answer;
let operator = null;
let firstOperand = 0;
let secondOperand = 0;
for (let button of buttonElement) {
  button.addEventListener("click", () => {
    displayElement.textContent += button.textContent;
  });
}

for (let operator of operatorElement) {
  operator.addEventListener("click", () => {
    if ((buttonElement.textContent = "=")) {
    }
  });
}

let clear; // "c"

function evaluate() {
  if ((buttonElement.textContent = "+/-")) {
    return negative;
  }
  const negative = (firstOperand) => {
    return -firstOperand;
  };
}

const percent = (...args) => {
  return args.reduce((total, current) => {
    return (total / current) * 100;
  });
};

const divide = (...args) => {
  return args.reduce((total, current) => {
    return total / current;
  });
};

const multiply = (...args) => {
  return args.reduce((total, current) => {
    return total * current;
  });
};

const subtract = (...args) => {
  return args.reduce((total, current) => {
    return (total -= current);
  });
};

const sum = function (...args) {
  return args.reduce((total, current) => {
    return total + current;
  });
};

const equals = () => {
  return equalsElement.reduce((firstOperand, secondOperand) => {
    return (firstOperand += secondOperand);
  });
};

operator = function (firstOperand, operator, secondOperand) {
  switch (operator) {
    case (buttonElement.textContent = "+"):
      return sum(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "x":
      return multiply(firstOperand, secondOperand);
    case "÷":
      return divide(firstOperand, secondOperand);
    case "%":
      return percent(firstOperand, secondOperand);
    case "+/-":
      return -firstOperand;
    case (buttonElement.textContent = "="):
      return (firstOperand += secondOperand);
    case "c":
      return 0;
  }
};

console.log(operator(10, "-", 2));
