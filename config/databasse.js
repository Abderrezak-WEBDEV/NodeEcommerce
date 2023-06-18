// install. mongoose "npm install -D mongoose"
// Connexion avec l'url que je dois recuperer sur l'application
const mongoose = require("mongoose")
const dbconnexion = ()=>{
    mongoose
    .connect(process.env.DB_URI)
    .then((conn)=>{
        console.log(`Connexion BD réussie : ${conn.connection.host}`)
        //En cas d'erruer 
    }).catch((err) =>{
        console.error(`erreur de connexion à la base de données : ${err} `)
        process.exit(1)
    })
}
module.exports = dbconnexion;