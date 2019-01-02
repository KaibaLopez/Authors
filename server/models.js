const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Authors', { useNewUrlParser: true });
var QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "there must be a quote to quote"],
        minLength: [3, "must be greater than 3 characters"]
    },
    votes: { type: Number, default: 0 }
}, { timestamps: true });
var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "there must be a name"],
        minLength: [3, "must be greater than 3 characters"]
    },
    quotes: [QuoteSchema]
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);