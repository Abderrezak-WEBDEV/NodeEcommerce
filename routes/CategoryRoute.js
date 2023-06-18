const express = require("express")
// j'import mon controller
const {getCategory, createCategory} = require('../controllers/CategoryController')

const router  = express.Router();
//test mon app si elle est branchée sur le navigateur 'browser'
// Routes
// get et  post
router.get('/ ',getCategory).post("/", createCategory)

module.exports = router;