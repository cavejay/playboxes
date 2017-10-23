const log = require("console-log-level")();
const Cottage = require("cottage");

// nice routes for api using cottage.
const routes = new Cottage();
routes.get("/api", async () => "This would create a new game!");

// the page that redirects people to a new game
routes.get(
  "/api/newgame/redirect",
  async () => "This would create a new game!"
);

module.exports = routes;
