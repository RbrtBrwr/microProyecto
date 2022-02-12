var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
let mySkills = {
    "Python": 8,
    "C": 6,
    "Lua": 7,
    "Java": 5,
    "JavaScript": 3,
    "Cs": 4,
    "HTML": 3,
    "CSS": 3,
    "Assembler": 7,
    "Git": 7
}

function checkForm(){
    alert("Has enviado el formulario.");
    return false;
}

// function setAttributes(skill, title, progress){
//     skill.innerHTML = title;
//     skill.style.width = progress * 10;
// }

// function setProgress(mySkills){
//     var skill = document.getElementById("skill1");
//     var progress = mySkills.Python;
//     setAttributes(skill, "Python", progress);

//     var skill = document.getElementById("skill2");
//     var progress = mySkills.C;
//     setAttributes(skill, "C", progress);

//     var skill = document.getElementById("skill3");
//     var progress = mySkills.Lua;
//     setAttributes(skill, "Lua", progress);

//     var skill = document.getElementById("skill4");
//     var progress = mySkills.Java;
//     setAttributes(skill, "Java", progress);

//     var skill = document.getElementById("skill5");
//     var progress = mySkills.JavaScript;
//     setAttributes(skill, "JavaScript", progress);

//     var skill = document.getElementById("skill6");
//     var progress = mySkills.Cs;
//     setAttributes(skill, "C#", progress);

//     var skill = document.getElementById("skill7");
//     var progress = mySkills.HTML;
//     setAttributes(skill, "HTML", progress);

//     var skill = document.getElementById("skill8");
//     var progress = mySkills.CSS;
//     setAttributes(skill, "CSS", progress);

//     var skill = document.getElementById("skill9");
//     var progress = mySkills.Assembler;
//     setAttributes(skill, "Assembler", progress);

// }