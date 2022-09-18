window.onload = function () {
  new Swiper('.life-sw', {
    loop: true,
    slidesPerView: 3,
    navigation: {
      prevEl: '.life-sw-prev',
      nextEl: '.life-sw-next'
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  })
}