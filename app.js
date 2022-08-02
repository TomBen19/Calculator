const input = document.querySelector(".in");
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnAdd = document.querySelector(".btnAdd");
const btnSub = document.querySelector(".btnSub");
const btnMul = document.querySelector(".btnMul");
const btnDiv = document.querySelector(".btnDiv");
const btnClear = document.querySelector(".btnClear");
const btnGo = document.querySelector(".btnGo");
const result = document.querySelector(".result");
let nums = ["", "", "", "", "", "", "", ""];
let i = 0;
let d;

btn1.addEventListener("click", function () {
  displayValue("1");
  nums[i] += "1";
});
btnGo.addEventListener("click", function () {
  for (d = 1; d < nums.length; d = d + 2) {
    operate(nums[d]);
  }
});
btn0.addEventListener("click", function () {
  displayValue("0");
  nums[i] += "0";
});
btn2.addEventListener("click", function () {
  displayValue("2");
  nums[i] += "2";
});
btn3.addEventListener("click", function () {
  displayValue("3");
  nums[i] += "3";
});
btn4.addEventListener("click", function () {
  displayValue("4");
  nums[i] += "4";
});
btn5.addEventListener("click", function () {
  displayValue("5");
  nums[i] += "5";
});
btn6.addEventListener("click", function () {
  displayValue("6");
  nums[i] += "6";
});
btn7.addEventListener("click", function () {
  displayValue("7");
  nums[i] += "7";
});
btn8.addEventListener("click", function () {
  displayValue("8");
  nums[i] += "8";
});
btn9.addEventListener("click", function () {
  displayValue("9");
  nums[i] += "9";
});
btnAdd.addEventListener("click", function () {
  displayValue("+");
  i++;
  nums[i] = "+";
  i++;
});
btnSub.addEventListener("click", function () {
  displayValue("-");
  i++;
  nums[i] = "-";
  i++;
});
btnMul.addEventListener("click", function () {
  displayValue("*");
  i++;
  nums[i] = "*";
  i++;
});
btnDiv.addEventListener("click", function () {
  displayValue("/");
  i++;
  nums[i] = "/";
  i++;
});
btnClear.addEventListener("click", function () {
  input.innerHTML = "";
  result.innerHTML = "";
  for (let i = 0; i < nums.length; i++) {
    nums[i] = "";
  }
  i = 0;
});

function displayValue(x) {
  input.innerHTML += x;
}
function add(x, y) {
  let parsed = parseInt(x);
  let parsed2 = parseInt(y);
  let res = parsed + parsed2;
  result.innerHTML = res;
  nums[d + 1] = res;
}
function subtract(x, y) {
  let parsed = parseInt(x);
  let parsed2 = parseInt(y);
  let res = parsed - parsed2;
  result.innerHTML = res;
  nums[d + 1] = res;
}
function multiply(x, y) {
  let parsed = parseInt(x);
  let parsed2 = parseInt(y);
  let res = parsed * parsed2;
  result.innerHTML = res;
  nums[d + 1] = res;
}
function divide(x, y) {
  if (y == "0") {
    result.innerHTML = "Cant div by zero";
  } else {
    let parsed = parseInt(x);
    let parsed2 = parseInt(y);
    let res = parsed / parsed2;
    result.innerHTML = res;
    nums[d + 1] = res;
  }
}

function operate(x) {
  if (x == "+") {
    add(nums[d - 1], nums[d + 1]);
  } else if (x == "-") {
    subtract(nums[d - 1], nums[d + 1]);
  } else if (x == "*") {
    multiply(nums[d - 1], nums[d + 1]);
  } else if (x == "/") {
    divide(nums[d - 1], nums[d + 1]);
  }
}

function calculate() {
  if (nums[1] == "+") {
  }
}
