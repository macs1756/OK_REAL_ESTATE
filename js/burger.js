
const BURGER_BUTTON = document.querySelector('.header__burger');
const BURGER_BODY = document.querySelector('.burger__body');

BURGER_BUTTON.addEventListener('click', function(){
	this.classList.toggle('active');
	BURGER_BODY.classList.toggle('active');
});


