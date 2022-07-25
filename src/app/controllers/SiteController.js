const Product = require('../model/Product')

// function controller
class SiteController {
    //[GET / news]
    index(req, res) {
        Product.find({}, (err, products) => {
            if (!err) {
                res.json(products);
                return;
            }
            res.status(400).json({
                error: 'ERROR'
            });
        })
        // res.render('home');
    }

    // [GET /news:id ]
    search(req, res) {
        res.send('search')
    }
}

module.exports = new SiteController()


// class SitesController {

//     // [GET] /
//     home(req, res) {
//         res.render('home')
//     }

//     //[GET] /search
//     search(req, res) {
//         res.render('search')
//     }
// }

// module.exports = new SitesController();