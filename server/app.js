const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

//routes
const postsRoutes = require('./routes/posts')


app.use(bodyParser.json());
app.use(postsRoutes)

// app.get('/posts/:id', (req, res) => {
//   res.send('Hello World!' + req.params.id)
// })

// app.post('/posts', (req, res) => {
//   res.send('Got a POST request')
// })

// app.patch('/posts', (req, res) => {
//   res.send('Got a PATCH request')
// })

// app.delete('/posts', (req, res) => {
//   res.send('Got a PATCH request')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})