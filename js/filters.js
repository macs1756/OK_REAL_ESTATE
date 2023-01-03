const MAIN_FILTER_AKARDEON = document.querySelector('.main__category-label');
const CHILDREN_FILTER_AKARDEON = document.querySelectorAll(".filter__children");
const MIN_SIZE_FILTER = document.querySelector('.min-size');
const MAX_SIZE_FILTER = document.querySelector('.max-size');
const MIN_PRICE_FILTER = document.querySelector('.min-price');
const MAX_PRICE_FILTER = document.querySelector('.max-price');
const AKARDEON_VALUE = document.querySelectorAll('.filter__children-item');

if(MAIN_FILTER_AKARDEON){
	MAIN_FILTER_AKARDEON.addEventListener('click', ()=>{
		MAIN_FILTER_AKARDEON.nextElementSibling.classList.toggle('active');
	});
}

if(CHILDREN_FILTER_AKARDEON.length > 0){
	CHILDREN_FILTER_AKARDEON.forEach(button=>{
		button.addEventListener('click', ()=>{
			button.nextElementSibling.classList.toggle('active');
		});
	});
}

//rangeSIZE
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 10;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {

    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);


		MIN_SIZE_FILTER.innerHTML = minVal + 'm2';
		MAX_SIZE_FILTER.innerHTML = maxVal + 'm2';

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

//rangePrice
const rangeInput2 = document.querySelectorAll(".range-input2 input"),
  priceInput2 = document.querySelectorAll(".price-input2 input"),
  range2 = document.querySelector(".slider2 .progress2");
let priceGap2 = 100;

priceInput2.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput2[0].value),
      maxPrice = parseInt(priceInput2[1].value);

    if (maxPrice - minPrice >= priceGap2 && maxPrice <= rangeInput2[1].max) {
      if (e.target.className === "input-min") {
        rangeInput2[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput2[1].value = maxPrice;
        range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput2.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput2[0].value),
      maxVal = parseInt(rangeInput2[1].value);


		MIN_PRICE_FILTER.innerHTML = minVal + '$';
		MAX_PRICE_FILTER.innerHTML = maxVal + '$';

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput2[0].value = maxVal - priceGap;
      } else {
        rangeInput2[1].value = minVal + priceGap;
      }
    } else {
      priceInput2[0].value = minVal;
      priceInput2[1].value = maxVal;
      range2.style.left = (minVal / rangeInput2[0].max) * 100 + "%";
      range2.style.right = 100 - (maxVal / rangeInput2[1].max) * 100 + "%";
    }
  });
});

if(AKARDEON_VALUE.length > 0){
  AKARDEON_VALUE.forEach(value=>{
    value.addEventListener('click', ()=>{
      value.parentElement.classList.remove('active');
    });
  });
}
