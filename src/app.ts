import express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Liquid } from 'liquidjs'
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

app.use(express.static('assets/style'))
app.use('/img', express.static('assets/img'))
app.use('/views', express.static('views'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('assets/views/index.htm'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})