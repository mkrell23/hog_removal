// Select some objects: The two buttons on the page (one is what we really want and the other is hard to read when white)

var wildButton = document.querySelector('.wildButton');
var wild = false
var tameButton = document.querySelector('.submit')

// If the button hasn't been clicked and the user clicks it set the page backround to orange and the text to white. When clicked again sets bg to white and text to black again.

wildButton.addEventListener("click", () => {
  if (wild == false) {
  document.body.style.backgroundColor = '#f6841b';
  document.body.style.color= 'white';
  wildButton.innerHTML = 'GET THOSE HOGS BACK IN';
  wildButton.style.color = 'black';
  tameButton.style.color = 'black';
  wild = true;
} else {
  document.body.style.backgroundColor = 'white';
  document.body.style.color= 'black';
  wildButton.innerHTML = 'Get Hog Wild!';
  wild = false;
}
});
