

let REVIEW_BUTTON = document.querySelectorAll('.review__create-review');
let REVIEW_MODAL_WR = document.querySelector('.review__modal-wr');
let REVIEW_BODY = document.querySelector('.review__modal-body');

if(REVIEW_BUTTON.length > 0){
	REVIEW_BUTTON.forEach(button=>{
		button.addEventListener('click', ()=>{
			REVIEW_MODAL_WR.classList.add('active');
		});
	});
}


REVIEW_MODAL_WR.addEventListener('click', ()=>{
	REVIEW_MODAL_WR.classList.remove('active');
 });
 
 REVIEW_BODY.addEventListener('click', function(e){
	e.stopPropagation();
 });
 



const REVIEW_NAME = document.querySelector('#reviewName');
const REVIEW_TEXT = document.querySelector('#reviewText');
const REVIEW_MODAL_BUTTON = document.querySelector('#reviewButton');


let regNameR = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}$/;


REVIEW_MODAL_BUTTON.addEventListener('click', ()=>{
    if(regNameR.test(REVIEW_NAME.value)){
		REVIEW_NAME.nextElementSibling.classList.remove('invalid');
    }else{
      REVIEW_NAME.nextElementSibling.classList.add('invalid');
    }

    if(regNameR.test(REVIEW_TEXT.value)){
      REVIEW_TEXT.nextElementSibling.classList.remove('invalid');
    }else{
      REVIEW_TEXT.nextElementSibling.classList.add('invalid');
    }



    if(regNameR.test(REVIEW_NAME.value) && regNameR.test(REVIEW_TEXT.value)){
      REVIEW_MODAL_WR.classList.remove('active');

//--------------------------//DATA FOR BACKEND//-----------------------------//
//FETCH // AJAX

      console.log(REVIEW_NAME.value);
      console.log(REVIEW_TEXT.value);

    }
});