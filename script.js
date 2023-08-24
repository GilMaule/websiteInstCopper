$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 140) {
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        }
    });

});

function carregarPagina(busca) {
    let local = document.querySelector('#paginas')

    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = () => {
        if (requisicao.readyState == 4 && requisicao.status == 200) {
            local.innerHTML = requisicao.response
        }
    }
    window.scrollTo(0, 0);
    requisicao.open('GET', `${busca}.html`)
    requisicao.send()
}

document.addEventListener('DOMContentLoaded', function() {
    carregarPagina('home');
});

$(document).ready(function() {
    var lastScrollTop = 0;

    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        
        if (st < lastScrollTop) {
            // Se estiver rolando para cima
            $('.custom-navbar').removeClass('navbar-hidden');
        } else {
            // Se estiver rolando para baixo
            $('.custom-navbar').addClass('navbar-hidden');
        }

        lastScrollTop = st;
    });
});