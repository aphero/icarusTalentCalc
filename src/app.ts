import express from 'express'
import { html, render } from 'lit-html'
import * as path from 'path'

const app = express()
const port = 3000

app.use(express.static('templates'))
app.use(express.static('img'))

app.get('/', (req, res) => {
  console.log(`Request received, headers: ${JSON.stringify(req.headers)}`)
  console.log(`Rendering: ${path.resolve("index.htm")}`)
  res.sendFile(path.resolve("index.htm"))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})