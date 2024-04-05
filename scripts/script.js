function showMenu() {
    let menuBar = document.querySelector('.menu')
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
        menuBar.innerHTML = '<i class="fa-sharp fa-solid fa-bars"></i>'
    }else{
        itens.style.display = 'block'
        menuBar.innerHTML = '<i class="fa-sharp fa-solid fa-x"></i>'
    }
}

window.addEventListener('resize', function() {
    var menu = document.getElementById('itens');
    var screenSize = window.innerWidth;

    if (screenSize > 992) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

//ScrollReveal

window.sr = ScrollReveal({ reset: true })

sr.reveal('.reveal-1', {
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
    easing: 'ease-in-out',
})

sr.reveal('.reveal-2', 
{
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
    easing: 'ease-in-out',
}
)

//Slide

let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 10000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}