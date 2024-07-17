
// Dark-mode
let body =document.querySelector('html');

if(!localStorage.getItem('screen')){
    localStorage.setItem('screen', 'light');
}
if(localStorage.getItem('screen') == 'dark'){
    body.classList.add('dark');
}
function onDark(){
    switch(localStorage.getItem('screen')){
        case 'light': 
                body.classList.add('dark');
                console.log('light = '+localStorage.getItem('screen'))
                localStorage.setItem('screen', 'dark'); 
                break;
        case 'dark':
                console.log('dark = '+localStorage.getItem('screen'))
                body.classList.remove('dark'); 
                localStorage.setItem('screen', 'light'); 
                break;
    }
}