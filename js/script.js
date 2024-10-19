
// Dark-mode
    let html =document.querySelector('html');
    const sun = document.querySelector(".sun")
    const moon = document.querySelector(".moon")
    const button = document.querySelector(".darkMode")


    if(!localStorage.getItem('screen')){
        localStorage.setItem('screen', 'light');
    }
    if(localStorage.getItem('screen') == 'dark'){
        html.classList.add('dark');
        sun.classList.remove("visible");
        moon.classList.add("visible");
        
    }
    function onDark(){
        switch(localStorage.getItem('screen')){
            case 'light': 
                    html.classList.add('dark');
                    localStorage.setItem('screen', 'dark');
                    break;
            case 'dark':
                    html.classList.remove('dark');
                    localStorage.setItem('screen', 'light');
                    break;
        }
    }
    //  TODO вирнуть код обратно

    button.addEventListener("click", () => {
    sun.classList.toggle("visible")
    moon.classList.toggle("visible")
    })

// линяя прогресса

    let lines = document.querySelectorAll('.line');
    let progress = document.createElement('div')
    progress.classList.add('line__progress1')
    lines.forEach(line => {
        line.innerHTML = `<div class="line__progress"  style="width: ${line.getAttribute('data-skill')}%;"></div>`;
    });

// модельное окно и портфолио 
    const modal = document.querySelector('.modal')
    const contents = 
    [
        {
            id: 1,
            imgSmall:'site1.jpg',
            title:'Портфолио дизайнера',
            link: 'https://mrpepperoff.github.io/patent_Web/',
            skills: [
                {awesome: 'fa-brands fa-html5', name: 'html'},
                {awesome: 'fa-brands fa-css3-alt', name: 'css'}
            ],
            text: '<p>Это проект был создан, в рамках обучения в "Академии TOP".</p><p>Тут я использовал библиотеку "Bootstrap 5", "JQuery", так же использовал БЭМ-методологию</p>'
        },
        {
            id: 2,
            imgSmall:'site2.jpg',
            title: "Магазин женской одежды",
            link: 'https://mrpepperoff.github.io/Divisima/',
            skills: [
                {awesome: 'fa-brands fa-html5', name: 'html'},
                {awesome: 'fa-brands fa-css3-alt', name: 'css'},
                {awesome: 'fa-brands fa-js', name: 'js'}

            ],
            text: null
        },
        {
            id: 3,
            imgSmall:'site3.jpg',
            title: 'Магазин спорт товаров',
            link: 'https://mrpepperoff.github.io/bicycle/',
            skills: null,
            text: null
        },
        {
            id: 4,
            imgSmall:'site4.jpg',
            title: 'Decor Elegant',
            link: 'https://decor-elegant.netlify.app/',
            skills: null,
            text: 'Этот сайт реализуется как свой пет-проект. Возможно в будущем будет работать. <br> К сожелению я не нашел хост для Back-end. <br> В этом проекте используются фреймворки: <br><br> front-end - "React 18" <br> back-end - "Laravel 10" <br><br> Конект осуществляется через Axios <br>В стадии реализации Админка на Laravel через ".blade" <br> Присутствует тема (light/dark), и мультиязычность (русский/англиский)'
        },
        // {
        //     id: 5,
        //     imgSmall: null,
        //     title: 'В разработке',
        //     link: null,
        //     skills: null,
        //     text: null
        // },
    ]
    const portfolio = document.querySelector('.portfolio__content');
    contents.forEach(content => {
        portfolio.innerHTML += 
                `<div class="card">
                    <div class="card__img__wrap">
                    ${(content.imgSmall)?
                        `<img src="images/${content.imgSmall}" alt="site ${content.id}" class="card__img">`
                        :
                        `<img src="images/no-photo.jpg" alt="site ${content.id}" class="card__img">`
                    }
                        
                    
                    </div>
                    <h4>${content.title}</h4>   
                    <a href="${(content.link)? content.link :''}" class="card__link ${(content.link)? '' :'card__link_null'}">Перейти</a>
                    <button type="button" class="card__link" onclick="onModal(${content.id})">Подробнее</button>
                </div>`
    });

    function onModal(i) {
        modal.classList.add('modal_active');
        const modalLeft = modal.querySelector('.modal__left');
        const modalRight = modal.querySelector('.modal__right');
        i -= 1;
        modalLeft.innerHTML = '';
        modalRight.innerHTML = '';
    
        modalRight.innerHTML += 
            `<div class='modal__right-header'>
                ${(contents[i].link == null) ?
                    `<button type='button' class="modal__link modal__link_disabled" disabled>Перейти на сайт</button>` 
                    :
                    `<a href="${contents[i].link}" class="modal__link">Перейти на сайт</a>`
                }
                <h4 class='modal__title'>${contents[i].title}</h4>
            </div>
            <div class='modal__skill'>
                <h5 class='modal__title-sub'>Использовались:</h5>
                <ul id='modal-list'></ul>
            </div>
            <div class='modal__text'>
                <h5 class='modal__title-sub'>Описание:</h5>
                <p>${(contents[i].text == null) ? 'Информация временно отсутствует :(' : contents[i].text}</p>
            </div>
            `;
    
        const list = modalRight.querySelector('#modal-list');
        if (contents[i].skills && contents[i].skills.length > 0) {
            contents[i].skills.forEach(skill => {
                list.innerHTML += `<li><i class='${skill.awesome}'></i> ${skill.name}</li>`;
            });
        } else {
            list.innerHTML = "<li> Информация временно отсутствует :( </li>";
        }
    
        if (contents[i].link != null) {
            modalLeft.innerHTML = `<iframe src="${contents[i].link}" frameborder="0"></iframe>`;
        } else {
            modalLeft.innerHTML = `<img src="images/${contents[i].imgSmall}" alt="site ${i}" class="modal__img">`;
        }
    }
    
    function onModalClose() {
        modal.classList.remove('modal_active');
    }
    // function Portfolio(){

    // }

// header для пракрутки 

const header = document.querySelector('#header-scroll');
window.addEventListener('scroll', function(){
    (window.scrollY >= 100)?

        header.classList.add('header-fixed')
    :
        header.classList.remove('header-fixed')
    ;
});

// Кнопка nav burger

const burger = document.querySelector('#nav-burger');
const menu = document.querySelector('#menu');
const menuLinks = menu.querySelectorAll('a');

function toggleMenu() {
    burger.classList.toggle('open');
};

burger.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function (e) {
    var target = e.target;
    var its_menu = target == menu || menu.contains(target);
    var its_burger = target == burger;
    var its_menu_link = false;
    menuLinks.forEach(link => {
        var links = target == link || link.contains(target);
        if(links == true){
            its_menu_link = true;
        }
        
    });
        
    var menu_is_open = burger.classList.contains('open');
    // console.log(!its_burger+' && '+ menu_is_open+' ('+!its_menu+' || '+its_menu_link+')')
    if (!its_burger && menu_is_open) {
        if(!its_menu || its_menu_link){
            toggleMenu();
        } 
    }
});


// плавный якорь

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 65; // отступ сверху

        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Копирование ссылки в буфер обмена


function Copy(text){

    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Успешно скопировано');
        alert('Успешно скопированно');
        
    })
    .catch(error => {
        console.error(`Текст не скопирован ${error}`)
  })
}