const express = require('express');
const app = express();
const PORT = 3000;


// ==============Configurations
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('Running on all routes!');
    next();
});

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1>')
});
// Contact Route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me</h1>');
});
// Hobbies Route
app.get('/hobbies', (req, res) => {
    res.send('<h1>My Favorite Hobbies are...</h1>')
});
// Food Route
app.get('/food', (req, res) => {
    res.send('<h1>CHICKEN PARM!!!!!!!!!!!!</h1>')
});
// Favorite Anime
app.get('/anime', (req, res) => {
    res.send('<h1>My favorite animes are:</h1> <br /> <p>One Piece,<br /> Fullmetal Alchemist, <br />Fullmetal Panic, <br />InuYasha, <br />Ghost in the Shell, <br />Casshern Sins,<br /> Welcome to the NHK</p>')
});
// Favorite Games
app.get('/games', (req, res) => {
    res.send('<h1>My favorite games are</h1> <p>Battlefield 4, <br /> ELDEN RING!!! <br /> Sonic Adventure 2 Battle, <br /> True Crimes: New York City, <br /> ZELDA BOTW!!! <br /> The Witcher 3 (specifically Hearts of Stone DLC) <br />')
});
// Favorite Website
app.get('/website', (req, res) => {
    res.send('<h1>My favorite Website Is</h1> <br /> <p>Twitter, because it is so community oriented. It is always someone who is talking about a topic you are interested in!</p>')
});
// Favorite Albums
app.get('/albums', (req, res) => {
    res.send('<h1>My favorite albums are</h1> <br /> <p>The Waters by Mick Jenkins. <br /> Beyond Belief by 38 Spesh. <br /> Pieces of A Man by AZ. <br /> The price of Tea In China by Boldy James and The Alchemist. <br /> GARBAGE by Bones.')
});
// Favorite Sports Teams
app.get('/sports', (req, res) => {
    res.send('<h1>My favorite Sports Teams are...</h1> <br /> <p>Miami Heat for Basketball.<br /> Juventus for Soccer (Not a real fan because I do not even know where they are located haha.) <br /> I am still trying to pick a football team to follow for NFL. Not a big grit-iron guy.')
});








app.listen(PORT, () => {
    console.log(`Listening on port #${PORT}`);
});