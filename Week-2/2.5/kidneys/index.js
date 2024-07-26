const express = require("express");
const port = 3000;
const app = express();
const users = [{
    name: "Tayyab",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    }]
}];

app.use(express.json());

//Displaying the kidneys
app.get('/', function (req, res) {
    const tayyabKidneys = users[0].kidneys;
    const numberOfKidneys = tayyabKidneys.length;
    let healthykidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++)
        if (tayyabKidneys[i].healthy)
            healthykidneys++;
    const unhealthyKidneys = numberOfKidneys - healthykidneys;
    res.json({
        tayyabKidneys,
        numberOfKidneys,
        healthykidneys,
        unhealthyKidneys
    });
})

//adding a new kidney
app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

//updating all kidneys as healthy
app.put('/', function (req, res) {
    const kidneys = users[0].kidneys;
    for (let i = 0; i < kidneys.length; i++)
        if (kidneys[i].healthy == false) kidneys[i].healthy = true;
    res.json({
        msg: "all kidneys are fine now"
    })
})

//deleting unhealthy kidneys
app.delete('/', function (req, res) {
    let unhealthyKidneysCount = 0;
    for (let i = 0; i < users[0].kidneys.length; i++)
        if (users[0].kidneys[i].healthy)
            unhealthyKidneysCount++;
    for (let i = 0; i < users[0].kidneys.length; i++)
        if (users[0].kidneys[i].healthy == false) users[0].kidneys[i].healthy = true;
    for (let i = 0; i < unhealthyKidneysCount; i++) users[0].kidneys.pop();

    res.json({
        msg: "Unhealthy kidneys removed"
    });
})

app.listen(port);