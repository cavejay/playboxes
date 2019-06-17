<template>
  <div id="app">
    <pb-header msg="playboxes"/>
    <section class="section">
      <div class="container content">
        Boxes' or 'Dots and Dashes' is a game of strategy played by many around the world with pen and paper!
        playboxes is a site for to take this online, keeping friends in touch and using the digital platform to make game boards larger than ever!
        Only the owner of a game needs an account, so start a game now and send invites
      </div>
    </section>
    <section class="section">
      <div>
        <a href="/new" class="button is-primary" style="float: left; margin-right: 1em">New Game</a>
        <!-- <a href="/user/continue" class="button is-success">Continue</a> -->
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
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
