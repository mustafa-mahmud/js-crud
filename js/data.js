let userData = localStorage.getItem('store-todo')
  ? JSON.parse(localStorage.getItem('store-todo'))
  : [];

export default userData;
