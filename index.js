import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// set a static folder 
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.listen(PORT, () => console.log('Server started on port ' + PORT))