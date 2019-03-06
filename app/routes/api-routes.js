//This is a file to route all data sources.
const express = require('express');

let data = require('../data/friends.js');
let router = express.Router();

router.get('/api/matching', function(req, res){
    return res.json(data)
});
router.post('/api/matching', function(req,res){
    //An object holding the 'best match' from friend.js. 
    let bestMatch = {
        firstName: "",
        lastName: "",
        photo:"",
        hobby: "",
        age: "",
        buddyDifference: Infinity
    };

    //The results of the user's survey
    let userData = req.body;
    let userScores = userData.scores;

    //Calculate the difference between user scores and database
    let matchDifference;
    for (let i = 0; i < data.length; i++) {
        let currentbuddy = data[i];
        matchDifference = 0;

        console.log(currentbuddy.firstName);

        //Loop through scores
        for (let s = 0; s < currentbuddy.scores.length; s++) {
            let currentbudscore = currentbuddy.scores[j];
            let currentuserscore = userScores[j];

            matchDifference += Math.abs(parseInt(currentuserscore) - parseInt(currentbudscore));
        }

        if (matchDifference <= bestMatch.buddyDifference) {
            bestMatch.firstName = currentbuddy.firstName;
            bestMatch.lastName =currentbuddy.lastName;
            bestMatch.photo = currentbuddy.photo;
            bestMatch.hobby = currentbuddy.hobby;
            bestMatch.age = currentbuddy.age;
            bestMatch.buddyDifference = matchDifference;
        }
    }
    //adds user's data to the database
    friends.push(userData);
    //return user's bestmatch buddy
    res.json(bestMatch);
})

module.exports = router;