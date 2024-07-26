const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {
    request:0
};
setInterval(() => {
    numberOfRequestsForUser = {
        request:0
    };
}, 10000)

app.use(function (req, res, next) {
    const Id = req.headers["userId"];
    if (numberOfRequestsForUser) {
        numberOfRequestsForUser.request=numberOfRequestsForUser.request+1;
        if (numberOfRequestsForUser.request > 5)
            res.status(404).json({
                msg: "You have exceed the entry request"
            });
        else
            next();
    }
    else {
        numberOfRequestsForUser.request = 1;
        next();
    }
})
app.get('/user', function (req, res) {
    const Id = req.headers["userId"];
    console.log(numberOfRequestsForUser.request);
    res.status(200).json({
        name: 'john',
        requests: numberOfRequestsForUser.request
    });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);
module.exports = app;