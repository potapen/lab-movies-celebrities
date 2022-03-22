//  Add your code here
const mongoose = require('mongoose')
const celebritySchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const CelebrityModel = mongoose.model('Celebrity',celebritySchema)

module.exports = CelebrityModel

/*

    name - String (like Tom Cruise, Beyonce, Daffy Duck, etc.)
    occupation - String (what the celebrity does, why they are famous. For example actor, singer, comedian, or you can put unknown if your celebrity is someone like Kim Kardashian)
    catchPhrase - String (every celebrity needs a good catch phrase. Well maybe not all of them have one in real life, but all of our celebrities will have a catch phrase. This can be pretty much anything.)

*/
