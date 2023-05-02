
$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');

        $(".menu").toggleClass('active');
    });
})


function getScrollTopByHref(element){

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const menuItems = document.querySelectorAll('.menu a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})


function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 130

    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"

    });
}


const buttons = document.querySelectorAll('.change-feedback div');
const messages = document.querySelectorAll('.text-feedback');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove a classe "active" de todos os botões e mensagens
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    messages.forEach((message) => {
      message.classList.remove('active');
    });
    
    // Adiciona a classe "active" ao botão clicado e à mensagem correspondente
    button.classList.add('active');
    messages[index].classList.add('active');
  });
});


