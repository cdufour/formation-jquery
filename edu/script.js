// ciblage du DOM
let app = $("#app");
let result = $("#result");

// autres variables globales
let sums = [];

function start_game() {

  create_operation();

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
    `
  );

  app.append(div);
}

function check() {
  let inputs = $(".game");

  // itération sur la collection d'élements jQuery par la méthode .each
  inputs.each(() => {
    
    let answer = parseInt(inputs[0].value);

    // vérification de la réponse
  
  })

}

// retourne un entier aléatoire compris entre min et max
function random(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

// Démarrage du jeu
start_game();



