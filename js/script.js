
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

// модельное окно
    const modal = document.querySelector('.modal')
    const contents = 
    [
        {
            imgSmall:'site1.jpg',
            title:'Портфолио дизайнера',
            link: 'https://mrpepperoff.github.io/patent_Web/',
            skill: '<p>HTML, CSS, Scss, JS </p><p> также прочие Библиотеки</p>',
            text: 'Это проект был создан, в рамках обучения в "Академии TOP". Тут я использовал библиотеку "Bootstrap 5", '
        },
        {
            imgSmall:'site2.jpg',
            title: null,
            link: 'https://mrpepperoff.github.io/Divisima/',
            skill:null,
            text: null
        },
        {
            imgSmall:'site3.jpg',
            title: null,
            link: 'https://mrpepperoff.github.io/bicycle/',
            skill: null,
            text: null
        },
        {
            imgSmall:'site4.jpg',
            title: null,
            link: 'https://decor-elegant.netlify.app/',
            skill: null,
            text: null
        },
        {
            imgSmall:'site5.jpg',
            title: null,
            link: null,
            skill: null,
            text: null
        },
    ]

    function onModal(i){
        modal.classList.add('modal_active');
        const modalLeft = modal.querySelector('.modal__left');
        const modalRight = modal.querySelector('.modal__right');
        modalLeft.innerHTML = '';
        modalRight.innerHTML = '';


        modalRight.innerHTML += `<h4 class='modal__title'>${contents[i].title}</h4>`;
        modalRight.innerHTML += `<div><h5 class='modal__title-sub'>Использовались:</h5><p> ${contents[i].skill}</p></div>`;
        modalRight.innerHTML += `<div><h5 class='modal__title-sub'>Описание:</h5><p> ${contents[i].text}</p></div>`;
        modalRight.innerHTML += `<a href="${contents[i].link}" class="modal__link">Перейти на сайт</a>`;
        if(contents[i].link != null){
            modalLeft.innerHTML = `<iframe src="${contents[i].link}" frameborder="0"></iframe>`
        }
        else{
            modalLeft.innerHTML = `<img src="images/${contents[i].imgSmall}" alt="site ${i}" class="modal__img">`
        }
        console.log(contents[i].modalLeft+' '+i);
    }
    function onModalClose(){
        modal.classList.remove('modal_active')
    }


// Иконкопереключатель
const wrap = document.querySelector('#words');
        const words = wrap.querySelectorAll('.word');
        const time = wrap.getAttribute('data-time');
        let i = 0;

        function Word(){
            words.forEach(word => {
                setTimeout(()=>{
                    words.forEach(word2 => {
                        word2.classList.remove('active');
                    });
                    word.classList.add('active');
                    word.style.cssText = `animation-duration:${time}s;`;
                }, time*1000*i)
                i++

                // запуск бесконечного цикла с легким костылем чтоб не выдовал ошибки 
                if(i%words.length == 0){
                    setTimeout(()=>{
                        Word();
                    }, 1)
                }
            });
        }
        Word();

// header для пракрутки 

const header = document.querySelector('#header-scroll');
window.addEventListener('scroll', function(){
    (window.scrollY >= 250)?

        header.classList.add('header-fixed')
    :
        header.classList.remove('header-fixed')
    ;
});
