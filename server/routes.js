var controllers = require('./controllers');
const path = require('path');
module.exports = function (app) {
    //users
    app.post('/author/new', controllers.register);
    app.delete('/author/:id', controllers.remove);
    app.get('/author/all', controllers.showAuthors);
    app.get('/author/:id', controllers.showOne);
    app.put('/author/:id', controllers.updateAuthor);

    app.post('/quote/:id', controllers.addQuote);
    app.put('/quote/:id', controllers.VoteQuote);
    app.delete('/quote/:id/:`id2', controllers.removeQuote);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./authors/dist/authors/index.html"));
    });
};
