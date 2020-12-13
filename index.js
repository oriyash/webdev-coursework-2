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
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

// GET req for about
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

// GET req for login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
})

// GET req for register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/signup.html'));
})
app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/info.html'));
});

// POST req for login
app.post('/home', (req, res) => {
    res.send('Login Worked')
})

// POST req for sign up 
app.post('/register', (req, res) => {
    res.redirect('/login')
})



/// 404 - error for invalid address
app.use(function(req, res, next) {
    return res.status(404).send({ message: 'ERROR 404 : Not found. <a href="https://nodejs.org/en/about/">this</a> ' });
  });
  
  // 500 - catch all error
  app.use(function(err, req, res, next) {
    return res.status(500).send({ error: err });
  });

app.listen(PORT, () => console.log('Server started on port ' + PORT))
