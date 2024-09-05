const yearSpan = document.getElementById('copyright');
const copyright = new Date().getFullYear();
yearSpan.textContent = copyright;


/*  typing text code */

var sliderCounter = 0;
var sliderContent = [
  "Developer",
  "Designer",
  "youtube",
  "Code"
];

var sliderValue = document.querySelector("#SliderValue");

function slide() {

  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = ""
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");

  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == "") {
      letterDiv.innerHTML = "&nbsp;";
    }

    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv)
  }

  sliderCounter++;

}

slide()
setInterval(slide, 2000);