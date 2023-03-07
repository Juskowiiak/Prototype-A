//fiz deste jeito, porque de tanto estudar esqueci-me de algumas coisas xD

//*******************       DECLARAR AS INFOS
let imagem = document.getElementById("car-model");
let marca = document.querySelector(".article-visual-guide-text h2");
let guide = document.getElementById("informacao");
let info = document.getElementById("#car-info");

//*******************       DECLARAR OS MODELOS
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let car3 = document.querySelector(".car3");
let car4 = document.querySelector(".car4");
let car5 = document.querySelector(".car5");
let cars = document.getElementsByClassName("article-picture-li");

//*******************       DECLARAR AS STATS
let Acc = document.querySelector(".Acc");
let Spd = document.querySelector(".Spd");
let Hdl = document.querySelector(".Hdl");

//********************      FUNCAO CLICK
car1.addEventListener("click", function () {
  imagem.src = "./image/model1.png";
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car1.style.cssText = "opacity:1";
  marca.innerHTML = "Tuatara";
  guide.innerHTML =
    "The SSC Tuatara is a sports car designed, developed and manufactured by American automobile manufacturer SSC North America (formerly Shelby SuperCars Inc.). The car is the successor to the Ultimate Aero and is the result of a design collaboration between Jason Castriota and SSC";
  Acc.style.cssText = "width: 60%";
  Spd.style.cssText = "width: 80%";
  Hdl.style.cssText = "width: 60%";
});
car2.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car2.style.cssText = "opacity:1";
  imagem.src = "./image/model2.png";
  marca.innerHTML = "Regera";
  guide.innerHTML =
    "The Koenigsegg Regera is a limited production, plug-in hybrid grand touring sports car manufactured by Swedish automotive manufacturer Koenigsegg. It was unveiled at the March 2015 Geneva Motor Show. The name Regera is a Swedish verb, meaning to reign or to rule.";
  Acc.style.cssText = "width: 70%";
  Spd.style.cssText = "width: 65%";
  Hdl.style.cssText = "width: 85%";
});
car3.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car3.style.cssText = "opacity:1";
  imagem.src = "./image/model3.png";
  marca.innerHTML = "Aventador";
  guide.innerHTML =
    "Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. ";
  Acc.style.cssText = "width: 90%";
  Spd.style.cssText = "width: 60%";
  Hdl.style.cssText = "width: 45%";
});
car4.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car4.style.cssText = "opacity:1";
  imagem.src = "./image/model4.png";
  marca.innerHTML = "Venom F5";
  guide.innerHTML =
    "The Hennessey Venom F5 is a sports car developed and manufactured by the American vehicle-manufacturing company Hennessey Special Vehicles which was established in 2017. Hennessey has contracted with Delta Motorsport of Silverstone";
  Acc.style.cssText = "width: 70%";
  Spd.style.cssText = "width: 80%";
  Hdl.style.cssText = "width: 65%";
});
car5.addEventListener("click", function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].style.cssText = "opacity: .3";
  }
  car5.style.cssText = "opacity:1";
  imagem.src = "./image/model5.png";
  marca.innerHTML = "Nevera";
  guide.innerHTML =
    "The Rimac Nevera is an all-electric sports car designed and manufactured by the Croatian automotive manufacturer Rimac Automobili. The first production prototype car was released in August 2021. Nevera production has been limited to 150 vehicles.";
  Acc.style.cssText = "width: 70%";
  Spd.style.cssText = "width: 75%";
  Hdl.style.cssText = "width: 55%";
});
