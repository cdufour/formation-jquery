let students = [
  { name: "Djibril", grade1: 0 },
  { name: "Yasmine", grade1: 18 },
  { name: "Youssra", grade1: 10 }
];

// référence à l'élément du DOM portant l'id h2
const h2 = document.getElementById("h2");

students.forEach((s) => {
  
  // affiche le prénom de l'étudiant dans la console
  console.log(s.name);

  // crée un paragraphe ayant pour texte le prénom de l'étudiant
  let p = document.createElement("p");
  p.innerText = s.name;


  if (s.grade1 < 10) {
    p.innerText += " (mauvais élève)";
    p.style.color = "red";
  }

  // ajout d'un écouteur d'événement
  p.addEventListener("click", () => {
    //console.log(s.grade1);
    h2.innerText = s.name + " a obtenu la note de: " + s.grade1;
  })

  // ajoute le paragraphe dans le DOM en tant que balise fille de la balise body
  document.body.appendChild(p);

})
