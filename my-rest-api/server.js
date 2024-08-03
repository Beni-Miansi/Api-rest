// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger la configuration
dotenv.config({ path: './config/.env' });

// Connecter à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.log(err));

// Initialiser Express
const app = express();

// Middleware pour analyser le JSON
app.use(express.json());

// Routes des utilisateurs
app.use('/users', require('./routes/userRoutes'));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));




