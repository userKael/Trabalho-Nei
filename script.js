$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');

        $(".menu").toggleClass('active');
    });
})

const menuItems = document.querySelectorAll('.menu a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
   


    window.scroll({
        top: to - 80,
        behavior: "smooth"

    });
}