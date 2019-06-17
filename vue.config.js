// vue.config.js
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/index/main.ts",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "playboxes",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    new: {
      // entry for the page
      entry: "src/new/main.ts",
      // the source template
      template: "public/new.html",
      // output as dist/index.html
      filename: "new.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "playboxes | New Game"
    },
    game: {
      // entry for the page
      entry: "src/game/main.ts",
      // the source template
      template: "public/game.html",
      // output as dist/index.html
      filename: "game.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "playboxes"
    }
  }
};
