let students = [
  { name: "Djibril", grade1: 0 },
  { name: "Yasmine", grade1: 18 },
  { name: "Youssra", grade1: 10 }
];

// référence à l'élément du DOM portant l'id h2
const h2 = $("#h2");

students.forEach((s) => {
  
  // créé un paragraphe
  let p = $("<p>" + s.name + "</p>");

  // si étudiant a note inférieure à 10, changement css
  if (s.grade1 < 10) {
    p.text(s.name + " (mauvais élève)");
    p.css("color", "red");
  }

  // écoute l'événement clicj
  p.click(() => {
    h2.text(s.name + " a obtenu la note de: " + s.grade1);
  })

  // insère la pagraphe dans body
  $("body").append(p);

})