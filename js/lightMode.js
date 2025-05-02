const html = document.querySelector('html');
const button = document.querySelector(".lightMode")

    // определяет если на сайте метка о режиме
    if(!localStorage.getItem('screen')){
        html.classList.add('light');
        localStorage.setItem('screen', 'light');
    }
    // определение на темную тему
    if(localStorage.getItem('screen') == 'dark'){
        html.classList.add('dark');
        html.classList.remove('light');
        button.classList.add('active');
        
    }
    
    // определение темы на странице при загрузке
    switch(localStorage.getItem('screen')){
        case 'dark': 
                html.classList.add('dark');
                html.classList.remove('light');
                break;
        case 'light':
                html.classList.add('light');
                html.classList.remove('dark');
                break;
    }
    function onLight(){
        console.log('activ')
        switch(localStorage.getItem('screen')){
            case 'dark': 
                    html.classList.remove('dark');
                    html.classList.add('light');
                    localStorage.setItem('screen', 'light');
                    break;
            case 'light':
                    html.classList.remove('light');
                    html.classList.add('dark');
                    localStorage.setItem('screen', 'dark');
                    button.classList.add('show')
                    setTimeout(()=>{
                        button.classList.remove('show')
                    }, 5000)
                    break;
        }
    }
    // выдает или забирает 'active' у кнопки без обнавления
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    })
