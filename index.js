import express from 'express'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// set a static folder 
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: false}))

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

// GET req for info 
app.get('/info', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/info.html'));
});

// POST req for login
app.post('/home', (req, res) => {
    res.send('Login Worked')
})

// POST req for sign up 
app.post('/register', (req, res) => {
    let firstName = req.body.firstName.trim().replace(/^\w/, (c) => c.toUpperCase())
    let lastName = req.body.lastName.trim().replace(/^\w/, (c) => c.toUpperCase())
    let email = req.body.email.trim().toLowerCase()
    console.log(firstName + '\t' + lastName + '\t' + email) 
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
