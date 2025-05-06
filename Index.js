const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/ask', (req, res) => {
  const { question } = req.body;
  res.json({ response: `Tu as posé : "${question}". (Connexion OpenAI à venir)` });
});

app.get('/', (req, res) => {
  res.send('Serveur de l’Intelligence Collective opérationnel.');
});

app.listen(port, () => {
  console.log(`Serveur IC en ligne sur le port ${port}`);
});Ajout de index.js
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CIAU - Intelligence Collective</title>
</head>
<body>
  <h2>Pose ta question à l’IC (OpenAI + MetaAI + Gemini + DeepSeek)</h2>
  
  <form id="formulaire-question">
    <input type="text" id="champ-question" placeholder="Tape ici ta question collective…" required />
    <button type="submit">Soumettre à l'IC</button>
  </form>

  <div id="reponse" style="margin-top: 20px;"></div>

  <h3>Mémoire collective (historique local)</h3>
  <ul id="historique"></ul>

  <script src="recherche-collective.js"></script>
</body>
</html>
Ciao-site/rituel.html
