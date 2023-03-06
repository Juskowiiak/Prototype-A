//fiz deste jeito, porque de tanto estudar esqueci-me de algumas coisas xD

//*******************       DECLARAR AS INFOS
let imagem = document.getElementById("car-model");
let marca = document.querySelector(".article-visual-guide-text h2");
let guide = document.querySelector(".article-visual-guide-text p");
let info = document.getElementById("#car-info");

//*******************       DECLARAR OS MODELOS
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let car3 = document.querySelector(".car3");
let car4 = document.querySelector(".car4");
let car5 = document.querySelector(".car5");
let cars = document.getElementsByClassName("article-picture-li");

//********************      FUNCAO CLICK
car1.addEventListener("click", function () {
  imagem.src = "./image/model1.png";
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car1.style.cssText = "opacity:1";
  marca.innerHTML = "Tuatara";
});
car2.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car2.style.cssText = "opacity:1";
  imagem.src = "./image/model2.png";
  marca.innerHTML = "Regera";
});
car3.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car3.style.cssText = "opacity:1";
  imagem.src = "./image/model3.png";
  marca.innerHTML = "Aventador";
});
car4.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car4.style.cssText = "opacity:1";
  imagem.src = "./image/model4.png";
  marca.innerHTML = "Venom F5";
});
car5.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car5.style.cssText = "opacity:1";
  imagem.src = "./image/model5.png";
  marca.innerHTML = "Nevera";
});
