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
