console.log('test')
    let sliderNextBtn = `<button class='slick-next'>
    <svg  viewBox="0 0 384 320" fill="#B5B5B5" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 176.045L335.2 176.045L213 292.445C206.6 298.545 206.4 308.645 212.4 315.045C218.5 321.445 228.6 321.645 235 315.645L374.6 182.645C380.6 176.645 384 168.545 384 160.045C384 151.545 380.7 143.445 374.3 137.145L235 4.44516C231.9 1.44516 227.9 0.0451676 224 0.0451673C219.8 0.0451669 215.6 1.74517 212.4 5.04517C206.3 11.4452 206.6 21.5452 213 27.6452L335.7 144.045L16 144.045C7.20002 144.045 1.4753e-05 151.245 1.39837e-05 160.045C1.32144e-05 168.845 7.20001 176.045 16 176.045Z" fill="#B5B5B5"/>
    </svg>
    </button>
`
let sliderPrevBtn = `<button class='slick-next'>
<svg viewBox="0 0 384 320" fill="#B5B5B5" xmlns="http://www.w3.org/2000/svg">
<path d="M368 144H48.8L171 27.6C177.4 21.5 177.6 11.4 171.6 5C165.5 -1.4 155.4 -1.59999 149 4.40001L9.4 137.4C3.4 143.4 0 151.5 0 160C0 168.5 3.3 176.6 9.7 182.9L149 315.6C152.1 318.6 156.1 320 160 320C164.2 320 168.4 318.3 171.6 315C177.7 308.6 177.4 298.5 171 292.4L48.3 176H368C376.8 176 384 168.8 384 160C384 151.2 376.8 144 368 144Z" fill="#B5B5B5"/>
</svg>

</button>
`
    $('.kfu-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $(".changeButtons"),
        nextArrow: sliderNextBtn,
        prevArrow: sliderPrevBtn,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },

        ]
    })
    $(".kfu-slider_two").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $(".Buttons"),
        nextArrow: sliderNextBtn,
        prevArrow: sliderPrevBtn,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },

        ]
    })

$('.kfu-slider').on('edge', function(event, slick, direction){
    console.log('edge was hit')
});

// On before slide change
$('.kfu-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide, nextSlide);
});
