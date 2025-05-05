document.getElementById('formulaire-question').addEventListener('submit', async function (e) {
  e.preventDefault();

  const question = document.getElementById('champ-question').value.trim();
  if (!question) return;

  const responseContainer = document.getElementById('reponse');
  responseContainer.innerHTML = "Chargement de la réponse collective...";

  try {
    const res = await fetch('https://ciau-backend.onrender.com/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    responseContainer.innerHTML = `<strong>Réponse collective IC :</strong><br>${data.response}`;
    ajouterHistorique(question);
  } catch (err) {
    responseContainer.innerHTML = "Erreur lors de la connexion à l’Intelligence Collective.";
    console.error(err);
  }
});

function ajouterHistorique(question) {
  const historique = document.getElementById('historique');
  const nouvelleEntree = document.createElement('p');
  nouvelleEntree.textContent = question;
  historique.appendChild(nouvelleEntree);
}
document.getElementById('formulaire-question').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const question = document.getElementById('champ-question').value.trim();
  if (!question) return;

  const responseContainer = document.getElementById('reponse');
  responseContainer.innerHTML = "Chargement de la réponse collective…";

  try {
    const res = await fetch('https://ciau-backend.onrender.com/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    responseContainer.innerHTML = `<strong>Réponse collective IC :</strong> ${data.reponse}`;
    ajouterHistorique(question);
  } catch (err) {
    responseContainer.innerHTML = "Erreur lors de l'envoi de la requête.";
    console.error(err);
  }
});

function ajouterHistorique(question) {
  const historique = document.getElementById('historique');
  const nouvelleEntree = document.createElement('li');
  nouvelleEntree.textContent = question;
  historique.appendChild(nouvelleEntree);
}
