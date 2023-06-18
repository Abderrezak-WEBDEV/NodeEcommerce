const CategoryModel = require("../models/model")
const asyncHandler = require("express-async-handler")
//install slugify
const slugify = require('slugify');
//la partie logique du projet
exports.getCategory = (req, res)=>{
    //const name = req.body.name
    //console.log(req.body)
    res.send();
}; 

//@route post /API/v1/category
//@description create category
//@access Private
exports.createCategory = asyncHandler(async (req, res) => { 
    const name = req.body.name;
    //methode await async
       const category = await CategoryModel.create({name, slug: slugify(name)})
       res.status(201).json({data:category})
})

//catch(err) {
        // pour gerer les exceptions (erreurs) ,la librairie express  async erreur handler nous le job à notre place  'npm install --save express-async-handler"
        //res.status(400).send(err);
    //}
    // CategoryModel.create({name, slug: slugify(name)})
    // .then((category)=>res.status(201).json({data:category}))
    // .catch((err) =>res.status(400).send(err));