//fiz deste assim, porque de tanto estudar esqueci-me de algumas coisas xD

//*******************       DECLARAR AS INFOS
let imagem = document.getElementById("car-model");
let marca = document.querySelector(".article-visual-guide-text h2");
let guide = document.querySelector(".article-visual-guide-text p");
let info = document.getElementById("#car-info");

//*******************       DECLARAR OS MODELOS
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");

car1.addEventListener("click", function () {
  car1.style.cssText = "background-color:red";
  imagem.src = "./image/1.png";
});

car2.addEventListener("click", function () {
  car2.style.cssText = "background-color:red";
  imagem.src = "./image/2.png";
});
