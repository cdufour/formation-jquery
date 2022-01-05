let students = [
  { name: "Djibril", grade1: 0 },
  { name: "Yasmine", grade1: 18 },
  { name: "Youssra", grade1: 10 }
];


students.forEach((s) => {
  
  // affiche le prénom de l'étudiant dans la console
  console.log(s.name);

  // crée un paragraphe ayant pour texte le prénom de l'étudiant
  let p = document.createElement("p");
  p.innerText = s.name;

  // si l'étudiant a une note inférieure à 10 on modifie le parapraphe
  if (s.grade1 < 10) {
    p.innerText += " (mauvais élève)";
    p.style.color = "red";
  }

  // ajoute le paragraphe dans le DOM en tant que balise fille de la balise body
  document.body.appendChild(p);

})