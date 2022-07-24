const newsRoute = require('./news')
const siteRoute = require('./site')

function route(app) {


    app.use('/news', newsRoute)

    app.use('/',siteRoute)   
}
module.exports = route;

// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('/new', (req, res) => {
//     res.render('news')
// })

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.render('search')
// })

// app.post('/search', (req, res) => {
//     console.log(req.body);
//     res.send ('')
// })

