// кнопка раскрытия меню
const navBtn = document.getElementById('nav-btn');
const navList = document.getElementById('nav-list');


const screenWidth = window.screen.width
    
window.addEventListener('resize', () => {  
    if(screenWidth > 768){
        navBtn.classList.remove('nav__btn_active');
        navList.classList.remove('nav__list_active');
    }
});
    
navBtn.addEventListener('click', ()=>{
    if(screenWidth <= 768){
        navBtn.classList.toggle('nav__btn_active');
        navList.classList.toggle('nav__list_active');
    }
});

