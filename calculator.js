`use strict`

import * as DOM from './dom.js';

//OLD FORMAT, BELOW ARE CHANGED TO ARROW FUNCTIONS
// function add(n1,n2) {
//   let total = 0;
//   total = parseInt(n1, 10) + parseInt(n2, 10);
//   result(total);
// }

let storage = 0

let add = (n1,n2) => {
  let total = parseInt(n1, 10) + parseInt(n2, 10);
  let answer = `${n1} + ${n2} = ${total}`;
  storage = answer;
}

let subtract = (n1,n2) => {
  let total = parseInt(n1, 10) - parseInt(n2, 10);
  let answer = `${n1} - ${n2} = ${total}`;
  storage = answer;
}

let multiply = (n1,n2) => {
  let total = parseInt(n1, 10) * parseInt(n2, 10);
  let answer = `${n1} * ${n2} = ${total}`;
  storage = answer;
}

let divide = (n1,n2) => {
  let total = parseInt(n1, 10) / parseInt(n2, 10);
  let answer = `${n1} / ${n2} = ${total}`;
  storage = answer;
}

let equals = (storage) => {
  let list = document.createElement(`li`);
  list.innerHTML = storage;
  DOM.listOutput.appendChild(list);
}


DOM.addBtn.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.subtractBtn.onclick = () => subtract(DOM.inputOne.value, DOM.inputTwo.value);
DOM.multiplyBtn.onclick = () => multiply(DOM.inputOne.value, DOM.inputTwo.value);
DOM.divideBtn.onclick = () => divide(DOM.inputOne.value, DOM.inputTwo.value);
DOM.equalsBtn.onclick = () => equals(storage);
