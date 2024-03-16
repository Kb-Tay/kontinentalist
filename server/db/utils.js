const postDB = require('./postDB')

/*
Utility functions that handled CRUD operations for the db
*/

function createPost(title, content) {
  postDB.push({
    title:  title,
    content: content
  })

  return
}

function getAllPosts() {
  return postDB
}

function getPost(id) {
  if (id - 1 >= postDB.length || id < 0) {
    throw new Error('invalid post id')
  }
  
  return postDB[id - 1]
}

function updatePost(id, title, content) {
  if (id - 1 >= postDB.length || id < 0) {
    throw new Error('invalid post id')
  }

  const postToUpdate = postDB[id - 1]

  if (title) {
    postToUpdate.title = title
  }

  if (content) {
    postToUpdate.content = content
  }

  return
}

function deletePost(id) {
  if (id - 1 >= postDB.length || id < 0) {
    throw new Error('invalid post id')
  } 

  postDB.splice(id - 1, 1)
  return
}

module.exports = { createPost, getAllPosts, getPost, updatePost, deletePost }