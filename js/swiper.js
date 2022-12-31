const aboutSwiper = new Swiper(".about-swiper", {
	pagination: {
	  el: ".swiper-pagination",
	},
 
	navigation: {
	  nextEl: ".about-next",
	  prevEl: ".about-prev",
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
	}
 });
const productSwiper = new Swiper(".product__slider", {
	spaceBetween: 35, 
	 navigation: {
		nextEl: ".product__slider-next",
		prevEl: ".product__slider-prev",
	 },
	breakpoints: {
 
		 767:{
			slidesPerView: 2
		 },
		 1050:{
			slidesPerView: 3
		 },
 
		 1300:{
			slidesPerView: 4
		 }
	}
	
 });