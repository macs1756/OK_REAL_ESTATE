let HEADER = document.querySelector('header');

window.addEventListener('scroll', ()=>{
  if(scrollY > 30){
    HEADER.classList.add('scroll');
  }else{
    HEADER.classList.remove('scroll');
  };
});
