const log = require("console-log-level")({ prefix: "API - " });
const Cottage = require("cottage");
const db = require("./db");

// nice api by using using cottage.
const api = new Cottage();
api.get("/", async () => "This should be the route of the api interface");

// the page that redirects people to a new game
api.get("/newgame", async () => {
  return db.makeGame();
});

api.get("/listgames", async () => {
  return db.getGames();
});

module.exports = api;
