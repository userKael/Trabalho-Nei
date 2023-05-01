

$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');

        $(".menu").toggleClass('active');
    });
})


/* 

function toggleMenu(){
    const menu = document.getElementsByClassName("menu")[0]
    const hamburguer = document.getElementsByClassName("hamburguer")[0]
    hamburguer.classList.toggle('active')
    menu.classList.toggle('active')
}

*/



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

