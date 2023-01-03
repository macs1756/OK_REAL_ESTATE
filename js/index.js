const SELECT = document.querySelectorAll('.about__select');
const POST_SELECT = document.querySelector('#btnSelect');

if(SELECT.length>0){
  SELECT.forEach(someSelect=>{
    someSelect.addEventListener('click', ()=>{
      
      SELECT.forEach(item=>{
       
        if(item != someSelect){
          item.nextElementSibling.classList.remove('active');
        }
      });
      someSelect.nextElementSibling.classList.toggle('active');

      
    });
  });
}

window.addEventListener('click', function(e){
    if(e.target.classList.contains('about__option-item')){
      let currentSelectWrapper = e.target.closest('.about__section');
      let currentSelect = currentSelectWrapper.querySelector('p');
      currentSelect.innerHTML = e.target.innerText;
      currentSelect.classList.add('valid');
      currentSelectWrapper.querySelector('.about__option-wrapper').classList.remove('active'); 
      currentSelect.style.color = 'rgba(0, 0, 0)';
    }
});

POST_SELECT.addEventListener('click', ()=>{
  
  let allCurrentOption = document.querySelectorAll('.current-option');

  if(allCurrentOption.length > 0){
    allCurrentOption.forEach(currentOption=>{

      if(!currentOption.classList.contains('valid')){
        currentOption.style.color = '#B91F28';
      }else{
        currentOption.style.color = 'rgba(0, 0, 0)';
      }
    });
  }

  let allSelectValid = allCurrentOption[0].classList.contains('valid') && allCurrentOption[1].classList.contains('valid') && allCurrentOption[2].classList.contains('valid')

 if(allSelectValid){
  alert('sucses');
  //--------------------FOR BACKEND---------------------//
  let dateForBackend = `Місто: ${allCurrentOption[0].innerText}, Тип: ${allCurrentOption[1].innerText}, Вартість: ${allCurrentOption[2].innerText}`;
  console.log(dateForBackend);
 }
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    tab.classList.add('active')
    target.classList.add('active')
  });
});





