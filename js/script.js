// возраст
const dateHP = new Date(1997, 4, 4);
const date = new Date();
const age = document.querySelector('#age');
age.innerHTML = date.getFullYear() - dateHP.getFullYear();

