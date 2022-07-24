// function controller
class NewsController {
    //[GET / news]
    index(req, res) {
        res.render('news');
    }

    // [GET /news:id ]
    show(req, res) {
        res.send( 'news show')
    }
}

module.exports = new NewsController();
