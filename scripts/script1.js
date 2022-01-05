let students = ["Djibril", "Yasmine", "Youssra"];

students.forEach((s) => {
  
  // affiche le prénom de l'étudiant dans la console
  console.log(s);

  // crée un paragraphe ayant pour texte le prénom de l'étudiant
  let p = document.createElement("p");
  p.innerText = s;

  // ajoute le paragraphe dans le DOM en tant que balise fille de la balise body
  document.body.appendChild(p);

})