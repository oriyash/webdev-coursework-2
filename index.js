import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// set a static folder 
app.use(express.static(path.join(__dirname, 'public')))




// route to index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/info.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/signup.html'));
});

// POST req for login
app.post('/home', (req, res) => {
    res.send('Login Worked')
})

// POST req for sign up 
app.post('/register', (req, res) => {
    res.redirect('/login.html')
})


// Handle 404 
app.use((req, res, next) => {
    const error = new Error('404: File Not Found')
    error.status = 404;
    res.send('404: File Not Found' );
    next(error);
      
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });   
});

app.listen(PORT, () => console.log('Server started on port ' + PORT))