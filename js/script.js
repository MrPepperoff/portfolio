
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
            skill: '<ul><li><i class="fa-brands fa-html5"></i> HTML</li><li><i class="fa-brands fa-css3-alt"></i> Css</li><li><i class="fa-brands fa-sass"></i> Scss</li><li><i class="fa-brands fa-square-js"></i> JS</li></ul><p> также прочие Библиотеки</p>',
            text: '<p>Это проект был создан, в рамках обучения в "Академии TOP".</p><p>Тут я использовал библиотеку "Bootstrap 5", "JQuery", так же использовал БЭМ-методологию</p> <p>Следует отметить, что базовый вектор развития создаёт предпосылки для соответствующих условий активизации. В своём стремлении улучшить пользовательский опыт мы упускаем, что интерактивные прототипы являются только методом политического участия и преданы социально-демократической анафеме. Современные технологии достигли такого уровня, что реализация намеченных плановых заданий позволяет оценить значение существующих финансовых и административных условий. Но глубокий уровень погружения играет определяющее значение для первоочередных требований. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требует анализа распределения внутренних резервов и ресурсов. Следует отметить, что укрепление и развитие внутренней структуры требует от нас анализа форм воздействия. Разнообразный и богатый опыт говорит нам, что существующая теория однозначно фиксирует необходимость существующих финансовых и административных условий. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме. Учитывая ключевые сценарии поведения, понимание сути ресурсосберегающих технологий позволяет оценить значение своевременного выполнения сверхзадачи. Как уже неоднократно упомянуто, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы. Повседневная практика показывает, что понимание сути ресурсосберегающих технологий предполагает независимые способы реализации прогресса профессионального сообщества. Таким образом, современная методология разработки прекрасно подходит для реализации как самодостаточных, так и внешне зависимых концептуальных решений. Картельные сговоры не допускают ситуации, при которой ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы. Банальные, но неопровержимые выводы, а также явные признаки победы институционализации, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме. В частности, постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность благоприятных перспектив.</p>'
        },
        {
            imgSmall:'site2.jpg',
            title: "Магазин женской одежды",
            link: 'https://mrpepperoff.github.io/Divisima/',
            skill: null,
            text: null
        },
        {
            imgSmall:'site3.jpg',
            title: 'Магазин спорт товаров',
            link: 'https://mrpepperoff.github.io/bicycle/',
            skill: null,
            text: null
        },
        {
            imgSmall:'site4.jpg',
            title: 'Decor Elegant',
            link: 'https://decor-elegant.netlify.app/',
            skill: '<ul><li><i class="fa-brands fa-react"></i> React 18</li><li><i class="fa-brands fa-laravel"></i> Laravel 10</li></ul>',
            text: 'Этот сайт реализуется как свой пет-проект. Возможно в будущем будет работать. <br> К сожелению я не нашел хост для Back-end. <br> В этом проекте используются фреймворки: <br><br> front-end - "React 18" <br> back-end - "Laravel 10" <br><br> Конект осуществляется через Axios <br>В стадии реализации Админка на Laravel через ".blade" <br> Присутствует тема (light/dark), и мультиязычность (русский/англиский)'
        },
        {
            imgSmall:'site5.jpg',
            title: 'Test test test test test test test test test test test tezt test ets test test',
            link: 'https://mrpepperoff.github.io/portfolio/',
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


        modalRight.innerHTML += `<div class='modal__right-header'>${(contents[i].link == null)?`<button type='button' class="modal__link modal__link_disabled" disabled>Перейти на сайт</button>`:`<a href="${contents[i].link}" class="modal__link" >Перейти на сайт</a>`}<h4 class='modal__title'>${contents[i].title}</h4></div>`;
        // modalRight.innerHTML += (contents[i].link == null)?`<button type='button' class="modal__link modal__link_disabled" disabled>Перейти на сайт</button>`:`<a href="${contents[i].link}" class="modal__link" >Перейти на сайт</a>`;

        modalRight.innerHTML += `<div class='modal__skill'><h5 class='modal__title-sub'>Использовались:</h5><p> ${contents[i].skill}</p></div>`;
        modalRight.innerHTML += `<div class='modal__text'><h5 class='modal__title-sub'>Описание:</h5><p> ${contents[i].text}</p></div>`;
        
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
