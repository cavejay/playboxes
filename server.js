const Boxes = require('./lib/boxes').default;
const Cottage = require('cottage');
const http = require('http')

const app = new Cottage();


app.post('/new/', async () => 'This would create a new game!');

var server = http.createServer(app.callback());


// server.listen(8080);

var Game = new Boxes(4,4,['player1', 'player2']);

console.log(Game.showInfo())
console.log(Game.showMap())

