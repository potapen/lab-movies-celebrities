//  Add your code here
const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Celebrity' }]
})

const MovieModel = mongoose.model('Movie',movieSchema)

module.exports = MovieModel

/*
The Movie model should have:
    title - String
    genre - String
    plot - String
    cast - Array of object IDs referencing the Celebrity model (basically, the array of celebrities' IDs)
*/
