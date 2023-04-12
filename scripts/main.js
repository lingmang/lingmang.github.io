const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-nightly-seeklogo.png") {
    myImage.setAttribute("src", "images/fire.png");
  } else {
    myImage.setAttribute("src", "images/firefox-nightly-seeklogo.png");
  }
};

let myButton = document.querySelector("button");
let  myHeading =document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    if (!myName) {
      setUserName();
    }
    else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `mozilla is cool, ${myName}`;
    }
}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();

};


