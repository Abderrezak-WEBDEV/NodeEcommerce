// install express
const express = require("express")
// si mon fichier config s'appel .en je n'ai rien à ajouter sur la ligne 3
const dotenv= require("dotenv")
dotenv.config({path:'config.env'})
// install morgen (midelware) avant mes routes
const morgan = require("morgan")
// Express app
const dbConnexion = require('./config/databasse')
const CategoryRoute = require('./routes/CategoryRoute')
dbConnexion();
const app = express()


//il permet de transformer string en format json 
app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
    console.log(`mode : ${process.env.NODE_ENV}`)
}
//routes
app.use("/api/v1/category", CategoryRoute)
//test si mon app est brancher le serveur
//pour remplacer la port par la valeur définie dans config 
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`app est sur le port ${PORT}`)
})