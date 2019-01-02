const Users = require('./models');

module.exports = {
    //register new Author
    register: (req, res) => {
        
        Users.create(req.body)
            .then((named) => {
                return res.json(named);
            })
            .catch((err) => {
                return res.json(err);
            });
    },

    remove: (req, res) => {
        Users.findByIdAndDelete(req.params.id)
            .then((deleted) => {
                return res.json(deleted);
            })
            .catch((err) => {
                return res.json(err);
            });
    },
    showOne: (req, res) => {
        Users.findById(req.params.id)
            .then((people) => {
                return res.json(people);
            })
            .catch((err) => {
                return res.json(err);
            });
    },
    showAuthors: (req, res) => {
        Users.find({})
            .then((authors) => {
                return res.json({ authors });
            })
            .catch((err) => {
                return res.json({ err });
            });
    },
    updateAuthor: (req, res) => {
        Users.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
            .then((updated) => {
                return res.json(updated);
            })
            .catch((err) => {
                return res.json(err);
            });
    },
    addQuote: (req, res) => {
        Users.findOneAndUpdate({ _id:req.params.id }, {
            $push: {
                quotes: { content: req.body.content, votes: 0 }
            }
        }, {runValidators:true})
            .then((updated) => { return res.json(updated); })
            .catch((err) => { return res.json(err); });
    },
    VoteQuote: (req, res) => {
        Users.findById(req.params.id)
            .then((user) => {
                for (let quote of user.quotes) {
                    console.log(req.body.oper);
                    if (quote._id == req.body._id)
                        if(req.body.oper == 0)
                            quote.votes++;
                        else
                            quote.votes--;
                }
                user.save();
                return res.json(user);
            })
            .catch((err) => {
                return res.json(error);
            });      
    },
    removeQuote: (req, res) => {
        console.log(req.params.id);
        console.log(req.params.id2);
        Users.findOneAndUpdate({ _id: req.params.id }, {
            $pull: {
                quotes: { _id: req.params.id2 }
            }
        })
            .then((updated) => {return res.json(updated); })
            .catch((err) => { return res.json(err); });
    }
};