const BURGER_BUTTON = document.querySelector('.header__burger');
const BURGER_BODY = document.querySelector('.burger__body');
const ALL_LINK = BURGER_BODY.querySelectorAll('li');

BURGER_BUTTON.addEventListener('click', function(){
	this.classList.toggle('active');
	BURGER_BODY.classList.toggle('active');
});

if(ALL_LINK.length> 0){
	ALL_LINK.forEach(link=>{
		link.addEventListener('click', ()=>{
			BURGER_BODY.classList.remove('active');
		});
	});
}
