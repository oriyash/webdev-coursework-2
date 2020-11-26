import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// set a static folder 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log('Server started on port ' + PORT))