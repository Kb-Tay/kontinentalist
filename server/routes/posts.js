const express = require("express")
const router = express.Router()
const { GETPosts, GETPostsWithID, POSTPost, PATCHPost, DELETEPost } = require('../controllers/postsController')

/*
Route "/post" for the API
*/
router.get("/posts", GETPosts)
router.get("/posts/:id", GETPostsWithID)
router.post("/posts", POSTPost)
router.patch("/posts/:id", PATCHPost)
router.delete("/posts/:id", DELETEPost)

module.exports = router