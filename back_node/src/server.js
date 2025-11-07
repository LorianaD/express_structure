const app = require('./app');

// change les variables d'environnement de .env
require('dotenv').config();

// recupère le PORT
const PORT = process.env.PORT;

// Vérification que le port existe
if(!PORT) {

    console.log("PORT absent veuillez completer le fichier .env");
    // stop le programme de lancement de node
    process.exit(1);

}

app.listen(PORT, ()=>{
    console.log(`server lancé sur le port ${PORT}`); 
})

