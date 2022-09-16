window.onload = function () {
  const lifeSw = new Swiper('.life-sw', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      prevEl: '.life-sw-prev',
      nextEl: '.life-sw-next'
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  })
}