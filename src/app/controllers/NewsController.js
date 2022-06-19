class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /:slug
          slug(req, res) {
        res.send('ok');
    }

        // [GET] /show
    show(req, res) {
                  res.send('day laf show');
            }     
  }

module.exports = new NewsController();
