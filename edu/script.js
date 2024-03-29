// ciblage du DOM
let app = $("#app");
let result = $("#result");

// autres variables globales
let sums = [];
let points = 0;
const NUM_OPS = 5;

function start_game() {

  for (let i=0; i<NUM_OPS; i++) {
    create_operation();
  }

  // bouton de validation
  let btn = $("<button>Corriger</button>");
  btn.click(check);
  app.append(btn);
}

function create_operation() {
  let operand1 = random(1,100);
  let operand2 = random(1,100);
  let sum = operand1 + operand2;
  sums.push(sum);

  let div = $("<div></div>");
  div.html(
    `
      <span>${operand1}</span> + <span>${operand2}</span> = 
      <input type="text" class="game">
      <span class="correction"></span>
    `
  );

  app.append(div);
}

function check() {
  let inputs = $(".game");
  let spans = $(".correction");

  // itération sur la collection d'élements jQuery par la méthode .each
  inputs.each((i) => {
    
    let answer = parseInt(inputs[i].value);
    spans[i].innerText = sums[i];

    // vérification de la réponse
    if (answer == sums[i]) {
      points++;
      spans[i].style.color = "green";
    } else {
      spans[i].style.color = "red";
    }
  
  })

  // affichage des points
  result.text(points + "/" + NUM_OPS);

}

// retourne un entier aléatoire compris entre min et max
function random(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

// Démarrage du jeu
start_game();



