const messageEl = document.querySelector('.msg p');

function message(color, msg) {
  messageEl.style.color = color;
  messageEl.textContent = msg;

  setTimeout(() => {
    messageEl.style.color = 'transparent';
    messageEl.textContent = '';
  }, 3000);
}

export default message;
