let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nao.jpg') {
      myImage.setAttribute('src','images/nao2.jpg');
    } else if(mySrc === 'images/nao2.jpg') {
      myImage.setAttribute('src','images/nao3.png');
    } else {
        myImage.setAttribute('src','images/nao.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Stay cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Stay cool, ' + storedName;
  }
  
myButton.onclick = function() {
    setUserName();
  }

