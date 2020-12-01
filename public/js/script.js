let zoomButton = document.querySelector('.zoom-button')
let hiddenInput = document.querySelector('.hidden-input')
zoomButton.addEventListener('click', () => {
    hiddenInput.classList.add("slideLeft-animation")
})

// Main slider init

$('.main-slider-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: `<img src="../img/icons/arrow_left-black.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -50px; top: 45%; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/icons/arrow_right-black.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -50px; top: 45%; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

// Partners sliders

$('.rus-partners-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: `<img src="../img/icons/arrow_left-black.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 30px; top: 40%; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/icons/arrow_right-black.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 30px; top: 40%; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

$('.de-partners-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: `<img src="../img/icons/arrow_left-black.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 30px; top: 40%; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/icons/arrow_right-black.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 30px; top: 40%; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

// Sticky nav

$(window).scroll(function() {
  let sticky = $('.bg-light'),
    scroll = $(window).scrollTop();

  if (scroll >= 40) {
    sticky.addClass('fixed'); }
  else {
   sticky.removeClass('fixed');

}
});