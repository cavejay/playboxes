<template>
  <div id="app">
    <pb-header/>
    <section class="section">
      <div class="container">
        <h1 class="title">Configure your game</h1>
        <div id="newGameConfig">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" :value="randomGameName">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Board Size</label>
            </div>
            <div class="field-body">
              <div class="field">
                <label class="label">Height</label>
                <div class="control">
                  <input class="input" type="number" placeholder="height" value="2">
                </div>
                <!-- <p class="help is-success">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Width</label>
                <div class="control">
                  <input class="input" type="number" placeholder="width" value="2">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <div class="label">
                <label class="label">Players</label>
              </div>
            </div>
            <div class="field-body">
              <div class="control">
                <div class="select">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" v-on:click="submitNewGame">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <pb-footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pbHeader from "../components/pbHeader.vue";
import pbFooter from "../components/pbFooter.vue";

export default Vue.extend({
  name: "app",
  components: {
    pbHeader,
    pbFooter
  },
  data() {
    return {
      randomGameName: "RandomGameName Please Fix me",
      playerrange: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    submitNewGame: async function() {
      console.log("submit stuff");
      // Collect data from form, send it to /api/game/new
      // on response head to that /game/asdfdf
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#newGameConfig {
  max-width: 500px;
}
</style>
