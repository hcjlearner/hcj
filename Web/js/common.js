$(document).ready(function() {
    const $subNav = $('.subNav');
    $subNav.on('click', function() {
        $(this).toggleClass('active');
    });
    $subNav.hover(function() {
        $(this).toggleClass('active');
    });
});