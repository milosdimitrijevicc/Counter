const increaseBtn = document.querySelector('#increase');
const decreseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const counterText = document.querySelector('#counter');

let counter = 0;

increaseBtn.addEventListener('click' , function() {
  counter++;
  counterText.textContent = counter;
})

decreseBtn.addEventListener('click' , function() {
  counter--;
  counterText.textContent = counter;
})

resetBtn.addEventListener('click' , function() {
  counter = 0;
  counterText.textContent = counter;
})

