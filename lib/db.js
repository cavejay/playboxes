const log = require("console-log-level")({ prefix: "DB - " });
const datastore = require("nedb-promise");

let file = "./.data.db";
let db = new datastore({ filename: file, autoload: true });

dbstuff = {};

// This just makes and stores a game
dbstuff.makeGame = async function makeGame() {
  let id = Math.floor(Math.random() * 1000);
  let gameInit = {
    type: "gamedata",
    gameid: id
  };
  await db.insert(gameInit);
  return id;
};

// ez way to see what's running
dbstuff.getGames = async function getGames() {
  let l = await db.find({ type: "gamedata" }, { gameid: 1 });

  let r = [];
  l.forEach(e => {
    r.push(e.gameid);
  });

  return r;
};

module.exports = dbstuff;
