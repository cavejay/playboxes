const log = require("./logFactory").newLog("API");
const Cottage = require("cottage");
const gm = require("./gamemanager").instance();
const db = require("./db");

// nice api by using using cottage.
const api = new Cottage();
api.get("/", async () => "This should be the route of the api interface.");
