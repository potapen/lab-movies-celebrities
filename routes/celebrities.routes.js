const CelebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get('/create', (request,response,next)=> {
    response.render('celebrities/new-celebrity');
});

router.post('/create', async (request,response,next)=> {
    try{
        const inputInfo = request.body;
        console.log('inputInfo: ', inputInfo);
        const celebrity = await CelebrityModel.create(inputInfo);
        response.redirect('/celebrities');
    }
    catch(error){console.log(error)}
});

router.get('/', async (request,response,next)=> {
    try{
        const celebrities = await CelebrityModel.find()
        console.log(celebrities)
        response.render('celebrities/celebrities.hbs', {celebrities})
    }
    catch(error){console.error(error)}
});

module.exports = router;