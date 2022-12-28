function isWebp() {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebp(function (support) {
    let className = (support = true ? "webp" : "no-webp");
    document.documentElement.classList.add(className);
  });
}

isWebp();

const aboutSwiper = new Swiper(".about-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: 'fade',

  thumbs: {
    swiper: {
      el: ".slider__thumbs",
      direction: "vertical",
      slidesPerView: 3,
		spaceBetween: 25,
		mousewheel: {
				eventTarget: '.slider__thumbs',
		}
    },
  },
});

let HEADER = document.querySelector('header');

window.addEventListener('scroll', ()=>{
  if(scrollY > 30){
    HEADER.classList.add('scroll');
  }else{
    HEADER.classList.remove('scroll');
  }
})

