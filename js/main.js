jQuery(document).ready(function($){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  })
})



$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});