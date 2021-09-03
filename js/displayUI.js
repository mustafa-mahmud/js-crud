import datas from './data.js';
import { getId, edit, del, done } from './app.js';

const todoContainer = document.querySelector('.todo-container');
const addInfoInput = document.querySelector('.add-info');

function displayUI() {
  todoContainer.innerHTML = '';

  const html = datas
    .map(
      (data, ind) => `
	<div data-id="${
    data.id
  }" class="todo d-flex align-items-center justify-content-between bg-info">
		<span class="serial bg-black">${(ind < 10 ? 0 + ind : ind) + 1}</span>
		<span class="info">${data.info}</span>
			<img class="img-done" src="img/done.svg" />
		<img src="img/pencil.svg" class="edit" title="Edit" alt="edit" />
		<img src="img/trash.svg" class="delete" title="Eelete" alt="delete" />
	</div>
	`
    )
    .join('');

  todoContainer.insertAdjacentHTML('afterbegin', html);

  todoContainer.querySelectorAll('.edit').forEach((el) =>
    el.addEventListener('click', (e) => {
      getId(e);
      edit(e);
    })
  );

  todoContainer.querySelectorAll('.delete').forEach((el) => {
    el.addEventListener('click', (e) => {
      getId(e);
      del(e);
    });
  });

  todoContainer.querySelectorAll('.todo').forEach((el) => {
    el.addEventListener('dblclick', (e) => {
      getId(e);
      done(e);
    });
  });

  addInfoInput.value = '';
}

export default displayUI;
