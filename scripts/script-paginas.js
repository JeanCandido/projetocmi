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