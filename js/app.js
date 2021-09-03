'use strict';

import data from './data.js';
import message from './message.js';
import speak from './speak.js';
import display from './displayUI.js';
import { firstLetterUpperCase as capitalize } from './firstLetterUpperCase.js';

const addInfoInput = document.querySelector('.add-info');

function getUserInput(e) {
  if (e.key === 'Enter') {
    inputValidation();
  }
}

function inputValidation() {
  const value = addInfoInput.value.trim();
  const pattern = /^[a-zA-Z0-9\s]+$/g;

  if (pattern.test(value)) {
    data.push({ info: capitalize(value), id: new Date().getTime() });
    speak('added ' + value);
    message('green', 'Added Successfully');
    display();
  } else {
    speak('Please give some values into input field');
    message('red', 'Please give some values into input field');
  }
}

////////////////
addInfoInput.addEventListener('keypress', getUserInput);
