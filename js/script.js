
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
            img:'site1.jpg',
            skill: null,
            text: null
        },
        {
            img:'site2.jpg',
            skill:null,
            text: null
        },
        {
            img:'site3.jpg',
            skill: null,
            text: null
        },
        {
            img:'site4.jpg',
            skill: null,
            text: null
        },
        {
            img:'site5.jpg',
            skill: null,
            text: null
        },
    ]

    function onModal(i){
        modal.classList.add('modal_active');
        let modalImg = modal.querySelector('.modal__img');
        modalImg.innerHTML = `<img src="images/${contents[i].img}" alt="site_${i}"></img>`;
        console.log(contents[i].img+' '+i);
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
