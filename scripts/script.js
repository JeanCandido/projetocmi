function showMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
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
