const messageEl = document.querySelector('.msg p');

function message(color, msg, sec) {
  messageEl.style.color = color;
  messageEl.textContent = msg;

  setTimeout(() => {
    messageEl.style.color = 'transparent';
    messageEl.textContent = '';
  }, sec * 1000);
}

export default message;
