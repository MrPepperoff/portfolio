
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

// модельное окно и портфолио 
    const modal = document.querySelector('.modal')
    const contents = 
    [
        {
            id: 1,
            imgSmall:'site1.jpg',
            title:'Портфолио дизайнера',
            link: 'https://mrpepperoff.github.io/patent_Web/',
            skills: [{awesome: 'fa-brands fa-html5', name: 'html'},{awesome: 'fa-brands fa-css3-alt', name: 'css'}],
            text: '<p>Это проект был создан, в рамках обучения в "Академии TOP".</p><p>Тут я использовал библиотеку "Bootstrap 5", "JQuery", так же использовал БЭМ-методологию</p> <p>Следует отметить, что базовый вектор развития создаёт предпосылки для соответствующих условий активизации. В своём стремлении улучшить пользовательский опыт мы упускаем, что интерактивные прототипы являются только методом политического участия и преданы социально-демократической анафеме. Современные технологии достигли такого уровня, что реализация намеченных плановых заданий позволяет оценить значение существующих финансовых и административных условий. Но глубокий уровень погружения играет определяющее значение для первоочередных требований. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности требует анализа распределения внутренних резервов и ресурсов. Следует отметить, что укрепление и развитие внутренней структуры требует от нас анализа форм воздействия. Разнообразный и богатый опыт говорит нам, что существующая теория однозначно фиксирует необходимость существующих финансовых и административных условий. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме. Учитывая ключевые сценарии поведения, понимание сути ресурсосберегающих технологий позволяет оценить значение своевременного выполнения сверхзадачи. Как уже неоднократно упомянуто, некоторые особенности внутренней политики освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, своевременно верифицированы. Повседневная практика показывает, что понимание сути ресурсосберегающих технологий предполагает независимые способы реализации прогресса профессионального сообщества. Таким образом, современная методология разработки прекрасно подходит для реализации как самодостаточных, так и внешне зависимых концептуальных решений. Картельные сговоры не допускают ситуации, при которой ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут функционально разнесены на независимые элементы. Банальные, но неопровержимые выводы, а также явные признаки победы институционализации, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме. В частности, постоянный количественный рост и сфера нашей активности в значительной степени обусловливает важность благоприятных перспектив.</p>'
        },
        {
            id: 2,
            imgSmall:'site2.jpg',
            title: "Магазин женской одежды",
            link: 'https://mrpepperoff.github.io/Divisima/',
            skills: [{awesome: 'fa-brands fa-html5', name: 'html'},{awesome: 'fa-brands fa-css3-alt', name: 'css'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'},{awesome: 'fa-brands fa-js', name: 'js'}],
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
        {
            id: 5,
            imgSmall:'site5.jpg',
            title: 'Test',
            link: 'https://mrpepperoff.github.io/portfolio/',
            skills: null,
            text: null
        },
    ]
    const portfolio = document.querySelector('.portfolio__content');
    contents.forEach(content => {
        portfolio.innerHTML += 
                `<div class="card">
                    <div class="card__img__wrap">
                        <img src="images/${content.imgSmall}" alt="site ${content.id}" class="card__img">
                    </div>
                    <h4>${content.title}</h4>
                    <a href="${content.link}" class="card__link">Перейти</a>
                    <button type="button" class="card__link" onclick="onModal(${content.id})">Подробнее</button>
                </div>`
    });
    function onModal(i){
        modal.classList.add('modal_active');
        const modalLeft = modal.querySelector('.modal__left');
        const modalRight = modal.querySelector('.modal__right');
        i -= 1;
        modalLeft.innerHTML = '';
        modalRight.innerHTML = '';


        modalRight.innerHTML += 
            `<div class='modal__right-header'>
                ${(contents[i].link == null)?
                    `<button type='button' class="modal__link modal__link_disabled" disabled>Перейти на сайт</button>`
                    :
                    `<a href="${contents[i].link}" class="modal__link" >Перейти на сайт</a>`
                }
                <h4 class='modal__title'>${contents[i].title}</h4>
            </div>
            <div class='modal__skill'>
                
                <h5 class='modal__title-sub'>Использовались:</h5>
                <ul id='modal-list'></ul>
            </div>
            <div class='modal__text'>
                <h5 class='modal__title-sub'>Описание:</h5>
                <p> ${contents[i].text}</p>
            </div>
            `;
        const list = modalRight.querySelector('#modal-list');
        contents[i].skills.forEach(skill => {
            list.innerHTML += `<li><i class='${skill.awesome}'></i> ${skill.name}</li>`
        });
        
        if(contents[i].link != null){
            modalLeft.innerHTML = `<iframe src="${contents[i].link}" frameborder="0"></iframe>`
        }
        else{
            modalLeft.innerHTML = `<img src="images/${contents[i].imgSmall}" alt="site ${i}" class="modal__img">`
        }
    }
    function onModalClose(){
        modal.classList.remove('modal_active')
    }
    function Portfolio(){

    }

// header для пракрутки 

const header = document.querySelector('#header-scroll');
window.addEventListener('scroll', function(){
    (window.scrollY >= 250)?

        header.classList.add('header-fixed')
    :
        header.classList.remove('header-fixed')
    ;
});
