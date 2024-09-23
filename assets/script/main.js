// スライダー
$('.voice__list').slick({
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        infinite: true,
        swipe: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true,
                    infinite: true,
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {

            }
        ]
    });