var linkInstagram = "https://www.instagram.com/metalgroupoficial/";
var linkFaceBook = "https://www.facebook.com/metalgroupoficial";
var linkLinkedin = "https://www.linkedin.com/company/metalgroupoficial/";
var foneContato = "4733055000";
var emailContato = "contato@metalgroup.com.br";

$(document).ready(function() {
    var lastScrollTop = 0;
   
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        
        if (st < lastScrollTop) {
            // Se estiver rolando para cima
            fechaMenuHeader();
            $('.custom-navbar').removeClass('navbar-hidden');
        } else {
            if(st > 360)
            // Se estiver rolando para baixo
            $('.custom-navbar').addClass('navbar-hidden');
        }

        lastScrollTop = st;
    });
});

function carregarPagina(busca) {
    fechaMenuHeader();
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

function fechaMenuHeader(){
    var menu = document.getElementById("navbarTogglerDemo02");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
}

function goToProdutos(item){
    carregarPagina('produtos');
    setTimeout(function() {
        var produtoFioCobreNu = document.getElementById(item);
        if (produtoFioCobreNu) {
            produtoFioCobreNu.scrollIntoView({ behavior: 'smooth' });
        }
    }, 800); 

}

function enviaDadosFormulario()
{   
    var jsonFormulario = getJsonFormulario();
    console.log("Simulando envio dos dados para o servidor:")
    console.log(jsonFormulario);
    limpaCaposFormulario();
    alert("Obrigado por enviar sua mensagem. Em breve responderemos.");
}

function limpaCaposFormulario(){
    document.getElementById("contactForm").reset();
}

function getJsonFormulario(){
    var nome = $('#nome').val();
    var email = $('#email').val();
    var assunto = $('#assunto').val();
    var mensagem = $('#mensagem').val();
    let formData = $(this).serialize(); // captura os dados do formulário

    var jsonFormulario ={
		"nome": nome,
		"email": email,
		"assunto": assunto,
		"mensagem": mensagem
    };
    return jsonFormulario;
}  

function redirecionarInstagram() {
    window.location.href = linkInstagram;
}

// Função para redirecionar para o Facebook
function redirecionarFacebook() {
    window.location.href = linkFaceBook;
}

// Função para redirecionar para o LinkedIn
function redirecionarLinkedin() {
    window.location.href = linkLinkedin
}

// Função para redirecionar para o telefone
function redirecionarTelefone() {
    window.location.href = "tel:+55" + foneContato;
}

// Função para redirecionar para o e-mail
function redirecionarEmail() {
    window.location.href = "mailto:" + emailContato;
}