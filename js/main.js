var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 1,
        depth: 200,
        modifier: 1,
        slidesShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});