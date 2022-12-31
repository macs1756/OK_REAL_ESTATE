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
};

isWebp();



let CONSULTATION_BUTTON = document.querySelectorAll('.consultation');
let MODAL_WRAPPER = document.querySelector('.consultation__wr');
let MODAL_BODY = document.querySelector('.consultation__body');


if(CONSULTATION_BUTTON.length > 0){

  CONSULTATION_BUTTON.forEach(consultationItem =>{
    consultationItem.addEventListener('click', ()=>{
      MODAL_WRAPPER.classList.toggle('active');
    });
});

}

MODAL_WRAPPER.addEventListener('click', ()=>{
  MODAL_WRAPPER.classList.remove('active');
});

MODAL_BODY.addEventListener('click', function(e){
  e.stopPropagation();
});



const CONSULTATUON_NAME = document.querySelector('#consultationName');
const CONSULTATUON_TELL= document.querySelector('#consultationTell');
const CONSULTATUON_BUTTON = document.querySelector('#consultationBtn');

let regTell = /^\+?[0-9]{10,15}$/;

let regName = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{4,}$/;


CONSULTATUON_BUTTON.addEventListener('click', ()=>{
    if(regName.test(CONSULTATUON_NAME.value)){
      CONSULTATUON_NAME.nextElementSibling.classList.remove('invalid');
    }else{
      CONSULTATUON_NAME.nextElementSibling.classList.add('invalid');
    }

    if(regTell.test(CONSULTATUON_TELL.value)){
      CONSULTATUON_TELL.nextElementSibling.classList.remove('invalid');
    }else{
      CONSULTATUON_TELL.nextElementSibling.classList.add('invalid');
    }



    if(regName.test(CONSULTATUON_NAME.value) && regTell.test(CONSULTATUON_TELL.value)){
      MODAL_WRAPPER.classList.remove('active');

//--------------------------//DATA FOR BACKEND//-----------------------------//
//FETCH // AJAX

      console.log(CONSULTATUON_NAME.value);
      console.log(CONSULTATUON_TELL.value);

    }
});