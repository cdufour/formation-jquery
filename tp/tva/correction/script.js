/*
  TP: tva - correction
*/

// ciblage du DOM
const txtHt = $("#txtHt");
const selectTax = $("#selectTax");
const spanTva = $("#spanTva");
const spanTtc = $("#spanTtc");
const btnCalculate = $("#btnCalculate");

// autres globales
let isTaxSelected = false;
let isHtLenEnough = false;

// écoute événementielle
btnCalculate.click(calculate);
selectTax.change(onChange);
txtHt.keyup(onKeyup);

function calculate() {
  let selectedTax = selectTax.val();
  let tva = txtHt.val() * (selectedTax / 100);
  let ttc = parseFloat(txtHt.val()) + tva;
  
  spanTva.text(tva.toFixed(2));
  spanTtc.text(ttc.toFixed(2));
}

function onChange() {
  // le retour de l'évaluation booléenne est stockée dans la variable
  isTaxSelected = selectTax.val() != "";
  btnCalculate.attr("disabled", !isTaxSelected || !isHtLenEnough);
}

function onKeyup() {
  isHtLenEnough = txtHt.val().length > 0;
  btnCalculate.attr("disabled", !isTaxSelected || !isHtLenEnough);
}

