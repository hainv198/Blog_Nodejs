const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'Public')))

const morgan = require('morgan')

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'))
// console.log('path' ,path.join(__dirname,'resources','views') )
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/new', (req, res) => {
    res.render('news')
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.render('search')
})
app.post('/search', (req, res) => {
    console.log(req.query);
    res.render('search')
})

app.listen(port, () => {
    console.log(`server dang chay o cong ${port}`);
})