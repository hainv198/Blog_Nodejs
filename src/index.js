const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars');
const app = express();
const route = require('./routes')
const port = 3000;

const morgan = require('morgan')
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'Public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources','views'))

// Route init khoi tao tuyen duong
route(app)

// console.log('path' ,path.join(__dirname,'resources','views') )

app.listen(port, () => {
    console.log(`server dang chay o cong ${port}`);
})