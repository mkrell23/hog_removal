// Select some objects: The two buttons on the page (one is what we really want and the other is hard to read when white) and the text on the page

var wildButton = document.querySelector('.wildButton');
var text = document.querySelectorAll('p')
var wild = false
var tameButton = document.querySelector('.submit')

// If the button hasn't been clicked and the user clicks it set the page backround to orange and the text to white. Else set backround to white and text to black
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
