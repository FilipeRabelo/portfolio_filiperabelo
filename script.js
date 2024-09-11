
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


/* Toggle menu */

$('.menu-btn').click(function () {
  $('.menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

$(document).ready(function () {
  $('.menu-btn').click(function () {
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});

/* Scroll animation */

const sr = ScrollReveal({
  origin: "top",
  disance: "80px",
  duration: 2000,
  reset: true
});

sr.reveal(".featured-text", {});
sr.reveal(".home-img", { delay: 200 });

sr.reveal(".heading", {})


//   /* ///////////////////////////////////// */

//   (function () {
//     emailjs.init('YOUR_USER_ID');  // Substitua 'YOUR_USER_ID' pelo seu ID de usuário do EmailJS
//   })();

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault();  // Evita o comportamento padrão de recarregar a página

//   emailjs.sendForm('service_en95kxs', 'template_1bvpmxq', this)
//     .then(function () {
//       alert('Mensagem enviada com sucesso!');
//     }, function (error) {
//       alert('Erro ao enviar, tente novamente!');
//     });
// });