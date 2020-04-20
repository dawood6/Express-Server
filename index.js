const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send({name: 'dawood'})
})

app.listen(3001, () => console.log('server is running on port 3001'))