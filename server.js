const Boxes = require('./lib/boxes').default;
const Cottage = require('cottage');
const app = new Cottage();

// app.get('/game/', async () => 'Hello world!');
// app.listen(8080);

var Game = new Boxes(4,4,['player1', 'player2']);

console.log(Game.showMap())

