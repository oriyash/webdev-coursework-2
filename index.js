import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// set a static folder 
app.use(express.static(path.join(__dirname, 'public')))

// GET req for index
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// GET req for about
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

// GET req for login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/login.html'));
})

// GET req for register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
})

// POST req for login
app.post('/home', (req, res) => {
    res.send('Login Worked')
})

// POST req for sign up 
app.post('/register', (req, res) => {
    res.redirect('/login.html')
})


app.listen(PORT, () => {console.log('Server started on port ' + PORT)})