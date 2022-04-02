import express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { resourcesTalents } from './constants/talents/resources.js'
import { json } from 'stream/consumers'

// fs.readFileSync(new URL('myfile.txt', import.meta.url))
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 3000
// const engine = new Liquid({
//   root: path.resolve(__dirname, '../assets/views'),
//   extname: '.liquid'
// })

// app.engine('liquid', engine.express())
// app.set('views', './assets/views')
// app.set('view engine', 'liquid')

app.use(express.static(path.resolve(__dirname, '../client/src/App.jsx')));
app.use(express.static('assets/style'))
app.use('/img', express.static('assets/img'))
app.use('/views', express.static('views'))
app.use(express.static("client"));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('assets/views/index.htm'))
})

// app.get('', (req, res) => {
//   res.json({ resourcesTalents });
// })

app.get('/resources_talents', (req, res) => {
  res.json({ resourcesTalents });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})