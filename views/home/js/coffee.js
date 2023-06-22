const intro = new Swiper(".coffee-intro", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },  
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.coffee-intro .swiper-prev',
        nextEl: '.coffee-intro .swiper-next'
    },
});