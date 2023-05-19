// First web-Application = logic runs on the server

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    // res.send("<h1>Calculator</h1>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight); 
    console.log(height);
    console.log(weight);
    res.send(bmiCalculator(weight, height));
})

app.post("/", function(req, res) {
    // res.send("<h1>Calculator</h1>");
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of "+ num1 + " + " + num2 + " = " + result);
});



app.listen(3000, ()=> console.log('Example app listening on port 3000!'));

function bmiCalculator (weight, height) {
    var bmi = (weight / (height * height));
    console.log("weight = " + weight + " & height = " + height);
    var roundedBMI = Math.round(bmi);
    if (roundedBMI <= 18.5) {
        console.log("Your BMI is " + roundedBMI + ", so you are underweight.");
        return "Your BMI is " + roundedBMI + ", so you are underweight.";
    } else if (roundedBMI > 18.5 && roundedBMI < 25 ) {
        console.log("Your BMI is " + roundedBMI + ", so you have a normal weight.");
        return "Your BMI is " + roundedBMI + ", so you have a normal weight.";
    } else if (roundedBMI >= 25) {
        console.log("Your BMI is " + roundedBMI + ", so you are overweight.");
        return "Your BMI is " + roundedBMI + ", so you are overweight.";
    }
}
