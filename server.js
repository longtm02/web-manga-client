const path = require('path')
const express = require('express')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/build'))
app.listen(port)

console.log('server started')

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'))
})
