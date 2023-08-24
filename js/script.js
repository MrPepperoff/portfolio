// кнопка подменю
let btn = document.querySelectorAll('span.submenu');

bth = addEventListener('click', (evt)=>{
    // console.log(1);
    evt.target.classList.toggle('show');
})