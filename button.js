var wildButton = document.querySelector('.wildButton');
var text = document.querySelectorAll('p')
var wild = false
var tameButton = document.querySelector('.submit')


wildButton.addEventListener("click", () => {
  if (wild == false) {
  document.body.style.backgroundColor = '#f6841b';
  document.body.style.color= 'rgb(255, 255, 255)';
  wildButton.innerHTML = 'WILD BACK IN';
  wildButton.style.color = 'black';
  tameButton.style.color = 'black';
  wild = true;
} else {
  document.body.style.backgroundColor = 'rgb(255, 255, 255)';
  document.body.style.color= 'black';
  wildButton.innerHTML = 'Get Hog Wild!';
  wild = false;
}
});
