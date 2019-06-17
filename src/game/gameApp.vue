<template>
  <div id="app">
    <pb-header/>
    <pb-game :gid="gameID"/>
    <pb-footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import pbHeader from "../components/pbHeader.vue";
import pbGame from "../components/pbGame.vue";
import pbFooter from "../components/pbFooter.vue";

export default Vue.extend({
  name: "app",
  components: {
    pbHeader,
    pbFooter,
    pbGame
  },
  data() {
    return {
      gameID: "asdfasdf"
    };
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
