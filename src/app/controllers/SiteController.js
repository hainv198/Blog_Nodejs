const Product = require('../model/Product')
const { mutipleMongooseToObject } = require('../../util/mongoose')
// function controller
class SiteController {
    //[GET / news]
    index(req, res, next) {
        Product.find({})
            .then(products => {
                products = products.map(product => product.toObject());
                res.render('home', { products })
            })
            .catch(error => next(error))

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