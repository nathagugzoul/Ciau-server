document.getElementById("formulaire-collectif").addEventListener("submit", function(e) {
  e.preventDefault();
  const question = document.getElementById("champ-question").value;

  fetch("https://ciau-backend.onrender.com/api/collective-response", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: question })
  })
  .then(response => response.json())
  .then(data => {
    const reponse = document.createElement("div");
    reponse.innerHTML = `<strong>Réponse collective IC :</strong><br>${data.answer}`;
    document.body.appendChild(reponse);
    localStorage.setItem("dernièreQuestion", question);
  })
  .catch(error => {
    console.error("Erreur :", error);
  });
});
