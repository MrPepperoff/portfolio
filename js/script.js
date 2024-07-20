
// Dark-mode
let body =document.querySelector('html');
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const button = document.querySelector(".darkMode")


if(!localStorage.getItem('screen')){
    localStorage.setItem('screen', 'light');
}
if(localStorage.getItem('screen') == 'dark'){
    body.classList.add('dark');
    sun.classList.remove("visible");
    moon.classList.add("visible");
    
}
function onDark(){
    switch(localStorage.getItem('screen')){
        case 'light': 
                body.classList.add('dark');
                localStorage.setItem('screen', 'dark');
                break;
        case 'dark':
                body.classList.remove('dark');
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
    
    // line.attributes('data-skill')
});