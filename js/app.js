'use strict';

import data from './data.js';
import message from './message.js';
import speak from './speak.js';
import display from './displayUI.js';
import { firstLetterUpperCase as capitalize } from './firstLetterUpperCase.js';

const addInfoInput = document.querySelector('.add-info');
let id = 0;

function getUserInput(e) {
  if (e.key === 'Enter') {
    inputValidation();
  }
}

function inputValidation() {
  const value = addInfoInput.value.trim();
  const pattern = /^[a-zA-Z0-9\s]+$/g;

  if (pattern.test(value)) {
    if (!addInfoInput.classList.contains('edit')) {
      data.unshift({ info: capitalize(value), id: new Date().getTime() });
      speak('add ' + value);
      message('green', 'Added Successfully', 3);
      display();
    }

    if (addInfoInput.classList.contains('edit')) {
      const index = data.findIndex((val) => val.id === id);
      data.splice(index, 1, { info: capitalize(value), id: id });

      speak('edit ' + value);
      message('green', 'Edited Successfully', 3);
      display();
      addInfoInput.classList.remove('edit');
    }
  } else {
    speak('Please give some values into input field');
    message('red', 'Please give some values into input field', 3);
  }
}

export function getId(e) {
  const target = e.target.closest('.todo');
  id = +target.getAttribute('data-id');
}

export function edit(e) {
  const info = e.target.closest('.todo').querySelector('.info').textContent;
  addInfoInput.value = info;
  addInfoInput.classList.add('edit');
}

export function del(e) {
  const index = data.findIndex((val) => val.id === id);
  data.splice(index, 1);

  speak('Are you sure to delete');
  const conf = confirm('Are you sure to delete?');

  if (conf) {
    speak('deleted successfully');
    message('green', 'Deleted Successfully', 3);
    display();
  }
}

export function done(e) {
  const target = e.target.closest('.todo');
  const info = target.querySelector('.info').textContent;

  target.classList.toggle('done');

  if (target.classList.contains('done')) {
    speak('done ' + info);
    message('green', 'Done Successfully', 3);
  } else {
    speak('re arrange ' + info);
    message('green', 'Re-arrange Successfully', 3);
  }
}

////////////////
addInfoInput.addEventListener('keypress', getUserInput);
