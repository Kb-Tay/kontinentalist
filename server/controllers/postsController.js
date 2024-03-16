const postsDB = require('../db/postDB')
const { getAllPosts, getPost, createPost, updatePost, deletePost } = require('../db/utils')

/*
Controllers handling request related to "/post" route
*/

const GETPosts = (req, res, next) => {
  const posts = getAllPosts()

  return res.status(200).send(posts)
}

const GETPostsWithID = (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const post = getPost(id)
    return res.status(200).send(post)

  } catch(err) {
    console.log(err)
    return res.status(403).json({ error: err.message })
  }
}

const POSTPost = (req, res, next) => {
  const {title, content} = req.body
  createPost(title, content)

  return res.status(201).send(getAllPosts())
}

const PATCHPost = (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const { title, content } = req.body

    updatePost(id, title, content)
    res.status(200).send("Post Updated")

  } catch(err) {
    console.log(err)
    return res.status(403).json({ error: err.message })
  } 
}

const DELETEPost = (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    deletePost(id)

    return res.status(200).send("Post Deleted")
  } catch(err) {
    console.log(err)
    return res.status(403).json({ error: err.message })
  }
}

module.exports = {
  GETPosts,
  GETPostsWithID,
  POSTPost,
  PATCHPost,
  DELETEPost
}