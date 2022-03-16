import express from 'express'
import { html, render } from 'lit-html'
import * as path from 'path'

const app = express()
const port = 3000

app.use(express.static('img')) // for images
app.use('/img', express.static('img'))
app.use(express.static('templates')) // for CSS 

app.get('/', (req, res) => {
  console.log(`Request received, headers: ${JSON.stringify(req.headers)}`)
  console.log(`Rendering: ${path.resolve("templates/index.htm")}`)
  res.sendFile(path.resolve("templates/index.htm"))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})