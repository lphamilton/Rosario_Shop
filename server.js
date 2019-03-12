const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/',express.static('shop/dist'));

app.listen(port, () => console.log(`Shop app listening on port ${port}!`))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/shop/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })