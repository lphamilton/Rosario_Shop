const express = require('express')
const app = express()
const port = 3000

app.use('/',express.static('shop/dist'));

app.listen(port, () => console.log(`Shop app listening on port ${port}!`))