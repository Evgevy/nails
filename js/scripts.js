const prodBtn = document.querySelectorAll('.about__btn');
const tabsInfo = document.querySelectorAll('.about__info');


for (let item of prodBtn) {

    item.addEventListener('click', function() {
        

        for (let element of tabsInfo) {
            element.classList.remove('about__info--active')
        }

        

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('about__info--active') 
        

        
    })
}

/*for (let item of prodBtn) {

    item.addEventListener('click', function() {

        for (let element of tabsBox) {
            element.classList.remove('about__box--active')
        }

        const cont = document.querySelector('#' + item.dataset.tab);
        cont.classList.add('about__box--active')
    })
}*/

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.about__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('about__btn--active'));
          btn.classList.add('about__btn--active');
        });
 
    });

});



$(document).ready(function(){
    $(".foto__items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    })
})

$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("header__nav--open")
        $(this).toggleClass("header__burger--open")
        /*$(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")*/
    })

})
$(document).ready(function(){
    $(".master__items").slick({
        //prevArrow:".more__button-prev",
        //nextArrow:".more__button-next",
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
    })
})
$(document).ready(function(){
    $(".portfolio__items").slick({
        prevArrow:".portfolio__button-prev",
        nextArrow:".portfolio__button-next",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
    })
})



