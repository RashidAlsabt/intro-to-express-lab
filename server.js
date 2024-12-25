const express = require('express');
const app = express();

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there ${username}!`);
});

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (isNaN(number)) {
        res.send("You must specify a number.");
    } else {
        const randomNumber = Math.floor(Math.random() * (parseInt(number) + 1));
        res.send(`You rolled a ${randomNumber}`);
    }
});
//q3, to be completed this weekend
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

// q4, tbc this weekend
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
