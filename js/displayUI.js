import datas from './data.js';

const todoContainer = document.querySelector('.todo-container');
const addInfoInput = document.querySelector('.add-info');

function displayUI() {
  todoContainer.innerHTML = '';

  const html = datas
    .reverse()
    .map(
      (data, ind) => `
	<div data-id="${
    data.id
  }" class="todo d-flex align-items-center justify-content-between bg-info">
		<span class="serial bg-black">${(ind < 10 ? 0 + ind : ind) + 1}</span>
		<span class="info">${data.info}</span>
		<img src="img/pencil.svg" class="edit" title="Edit" alt="edit" />
		<img src="img/trash.svg" class="delete" title="Eelete" alt="delete" />
	</div>
	`
    )
    .join('');

  todoContainer.insertAdjacentHTML('beforeend', html);
  addInfoInput.value = '';
}

export default displayUI;
