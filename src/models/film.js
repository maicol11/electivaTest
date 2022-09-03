const mongoose = require('mongoose')
const film_schema = mongoose.Schema({
    movie_name: {
        type: String,
        unique: true
    },
    season: {
        type: Number,
        require: true
    },
    autors: {
        type: Array
    }
    
})

module.exports = mongoose.model('FilmCollection', film_schema)