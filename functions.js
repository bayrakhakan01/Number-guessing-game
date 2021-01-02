let myButton = document.querySelector('button');
let MyHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    MyHeading.textContent = 'Mozilla is cool,' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }