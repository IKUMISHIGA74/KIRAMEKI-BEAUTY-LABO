// スライダー
$('.voice__list').slick({
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    infinite: true,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '32px',
                dots: true,
                infinite: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
