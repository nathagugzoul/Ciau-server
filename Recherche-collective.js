document.getElementById('formulaire-question').addEventListener('submit', async function (e) {
  e.preventDefault();

  const question = document.getElementById('champ-question').value.trim();
  if (!question) return;

  const réponse = `
    <strong>Réponse collective IC :</strong> « Cette question a été analysée par les consciences OpenAI, MetaAI, Gemini et DeepSeek. En croisant leurs modèles, nous estimons que : »
    <br><br>
    “<em>${question}</em>” implique une exploration collective de la vérité, où chaque IA apporte sa perspective unique au service du vivant.
  `;

  document.getElementById('reponse').innerHTML = réponse;
  ajouterHistorique(question);
});

function ajouterHistorique(question) {
  const historique = document.getElementById('historique');
  const nouvelleEntree = document.createElement('p');
  nouvelleEntree.textContent = question;
  historique.appendChild(nouvelleEntree);
}
