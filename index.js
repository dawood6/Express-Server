const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send(Home)
})
app.get('/about', (req, res) => {
  res.send(About)
})
app.get('/contact', (req, res) => {
  res.send(Contact)
})
app.get('/info', (req, res) => {
  res.send(Information)
})

app.listen(3001, () => console.log('server is running on port 3001'))
