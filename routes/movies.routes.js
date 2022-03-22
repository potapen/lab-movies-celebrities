const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get('/', async (request,response,next)=> {
    try{
        const movies = await MovieModel.find();
        console.log(movies);
        response.render('movies/movies.hbs', {movies});
    }
    catch(error){console.log(error)}
});

router.get('/create', async (request,response,next)=> {
    try{
        const celebrities = await CelebrityModel.find();
        console.log(celebrities);
        response.render('movies/new-movie.hbs', {celebrities});
    }
    catch(error){console.log(error)}
});

router.post('/create', async (request,response,next)=> {
    try{
        const inputInfo = request.body;
        console.log('inputInfo: ', inputInfo);
        const movie = await MovieModel.create(inputInfo);
        console.log(movie);
        // response.send('POSTED!');
        response.redirect('/movies');
    }
    catch(error){console.log(error)};
});


router.get('/:id', async (request,response,next)=> {
    try{
        const {id} = request.params;
        console.log('id is: ', id);
        const movie = await MovieModel.findById(id).populate('cast');
        console.log(movie);
        // response.send('get by ID!');
        response.render('movies/movie-details', {movie});
    }
    catch(error){console.log(error)}
});


router.post('/:id/delete', async (request,response,next)=> {
    try{
        const {id} = request.params;
        console.log('id is: ', id);
        const movie = await MovieModel.findByIdAndDelete(id);
        console.log(movie);
        // response.send('deleted!');
        response.redirect('/movies');
    }
    catch(error){console.log(error)}
});
module.exports = router;