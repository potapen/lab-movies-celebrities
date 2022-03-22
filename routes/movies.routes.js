const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here


router.get('/create', async (request,response,next)=> {
    try{
        const celebrities = await CelebrityModel.find();
        console.log(celebrities)
        response.render('movies/new-movie.hbs', {celebrities})
    }
    catch(error){console.log(error)}
});

router.get('/', async (request,response,next)=> {
    try{
        // const celebrities = await CelebrityModel.find()
        // console.log(celebrities)
        // response.render('celebrities/celebrities.hbs', {celebrities})
    }
    catch(error){console.error(error)}
});

module.exports = router;