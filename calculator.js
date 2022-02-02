`use strict`

import * as DOM from './dom.js';

function add(n1,n2) {
  let total = 0;
  total = parseInt(n1, 10) + parseInt(n2, 10);
  result(total);
}

function subtract(n1,n2) {
  let total = 0;
  total = parseInt(n1, 10) - parseInt(n2, 10);
  result(total);
}

function multiply(n1,n2) {
  let total = 0;
  total = parseInt(n1, 10) * parseInt(n2, 10);
  result(total);
}

function divide(n1,n2) {
  let total = 0;
  total = parseInt(n1, 10) / parseInt(n2, 10);
  result(total);
}

function result(total) {
  let list = document.createElement(`li`);
  list.innerHTML = total;
  DOM.listOutput.appendChild(list);
}

DOM.addBtn.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.subtractBtn.onclick = () => subtract(DOM.inputOne.value, DOM.inputTwo.value);
DOM.multiplyBtn.onclick = () => multiply(DOM.inputOne.value, DOM.inputTwo.value);
DOM.divideBtn.onclick = () => divide(DOM.inputOne.value, DOM.inputTwo.value);
