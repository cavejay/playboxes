<template>
  <div>
    <main id="gamespace" class="noselect"></main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Boxes from "../lib/Boxes";
import Point from "../lib/Corner";

var Box1 = new Boxes().initialiseBoard(9, 9);

function lineClick(from: String, to: String) {
  console.log(from + " " + to);
  let o = "horizontal";
  if (from.split("-")[0] != to.split("-")[0]) {
    o = "vertical";
  }

  let px: number = parseInt(from.split("-")[1]);
  let py: number = parseInt(from.split("-")[0]);

  let p = new Point(px, py);
  Box1.updateLine(p, o[0]);

  // drawGame(Box1.strExport());
}

// drawGame(Box1.strExport());

export default Vue.extend({
  name: "pb-header",
  props: {
    gid: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gamespace {
  z-index: 0;

  border: 1em;
  border-color: blueviolet;
  border-style: solid;
  padding: 1em;

  font-family: monospace;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  line-height: 14px;

  cursor: pointer;
  white-space: nowrap;
}

main {
  position: absolute;
  top: 50%;
  display: block;
  left: 50%;
  transform: translate(-50%, -50%);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome and Opera */
}

.dot:hover {
  color: red;
}

.hlineInvs:hover,
.vlineInvs:hover {
  opacity: 1;
  font-weight: 900;
}

.hlineInvs,
.vlineInvs {
  opacity: 0;
  font-weight: 900;
}

.boxFill {
  background-color: blue;
}
</style>
