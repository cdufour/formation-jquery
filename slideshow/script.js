// ciblage du DOM
const cityname = $("#cityname");
const cityimg = $("#cityimg");

// autres globales
const IMAGES = ["paris", "rio", "rome", "lisbonne"];
let index = 0; // index le l'image

function animation1() {
  setInterval(() => {
    let imagepath = "cities/" + IMAGES[index] + ".jpg";
    cityimg.attr("src", imagepath);
    cityname.text(IMAGES[index].toUpperCase());
    index++; // on incrémente l'index

    if (index == IMAGES.length) index = 0;
    
  }, 3000)
}

// équilavent natif du cityimg.fadeOut(); de jQuery
function animation2() {
  let opacity = 1;
  let interval;

  interval = setInterval(() => {
    opacity -= 0.1; // 1 => 0.9 => 0.8 => ...
    cityimg.css("opacity", opacity);

    // arrêt de l'interval (boucle infinie) quand l'opacité
    // de l'image est inférieure ou égale à 0
    if (opacity <= 0) {
      clearInterval(interval);
    }

  }, 100)
}

// animation par jQuery
function animation3() {
  cityimg.animate({ left: '300px' }, 5000, animation2);
}

//animation1();
//animation2();
animation3();
