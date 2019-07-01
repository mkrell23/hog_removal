var wildButton = document.querySelector('.wildButton');
var text = document.querySelectorAll('p')
var wild = false
var tameButton = document.querySelector('.tameButton')


wildButton.addEventListener("click", wildinOut, wildinIn);



function wildinOut(){
  // if (wild = false) {
  document.body.style.backgroundColor = '#f6841b';
  document.body.style.color= 'rgb(255, 255, 255)';
  wildButton.innerHTML = 'WILD BACK IN';

  wildButton.style.color = 'black';
  wildButton.className = 'tameButton';
  wild = true;
}
//
function wildinIn () {
  // if (wild = true) {
  document.body.style.backgroundColor = 'rgb(255, 255, 255)'
  document.body.style.color= 'black';
  tameButton.innerHTML = 'Wild Out!';
  tameButton.className = 'wildButton';
  wild = false;
}
// }
//
// h
// g
//
// H
