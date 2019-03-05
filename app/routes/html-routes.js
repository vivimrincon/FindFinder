//html-routes
const express = require('express');
const path = require('path');
let router = express.Router(); //A Router instance is a complete middleware and routing system.

//middleware test
router.use(function timelog(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'), function(err){
        if (err) next(err); 
    });
})

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
});

module.exports = router;