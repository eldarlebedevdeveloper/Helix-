$( function() {
    $( ".section-with-tabs" ).tabs();
} )



$( ".accordion" ).accordion({
    activate: function( event, ui ) {
        $('.accordion-pictures img').addClass('none')
        let activeItem =  $('.ui-accordion-content-active').attr('data-item')
        $(`.accordion-pictures img[data-picture="${activeItem}"]`).removeClass('none')
    }
})

const swiper = new Swiper('.swiper', {
    // Default parameters
    // slidesPerView: 1.7,
    // spaceBetween: 10vw,
    // Responsive breakpoints
    pagination: {
        el: '.swiper-pagination',
      },
    breakpoints: {
    //   when window width is >= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 20
    slidesPerView: 1.35,

      },
      // when window width is >= 480px
      480: {
        // slidesPerView: 3,
        // spaceBetween: 30
        slidesPerView: 1.5,

      },
      // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    }
  })


$('.menu-icon').on('click', () => {
    $('.navigation_menu').removeClass('nav-hidden')
    $('.navigation_menu').addClass('nav-show')
})
$('.navigation-close').on('click', () => {
    $('.navigation_menu').removeClass('nav-show')
    $('.navigation_menu').addClass('nav-hidden')
})