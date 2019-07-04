$(document).ready(function() {
    const $subNav = $('.subNav');
    $subNav.on('click', function() {
        $(this).toggleClass('active');
    });
    $subNav.hover(function() {
        $(this).toggleClass('active');
    });




    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots:false,
        items: 1

    })
});