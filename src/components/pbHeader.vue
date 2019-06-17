<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <h2 class="navbar-item">playboxes</h2>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <span class="icon has-text-info">
          <i class="mdi face-profile"></i>
        </span>
        <b-dropdown position="is-bottom-left" aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>Login</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item aria-role="menu-item" custom paddingless>
            <form action>
              <div class="modal-card" style="width:300px;">
                <section class="modal-card-body">
                  <b-field label="Email">
                    <b-input type="email" placeholder="Your email" required></b-input>
                  </b-field>

                  <b-field label="Password">
                    <b-input type="password" password-reveal placeholder="Your password" required></b-input>
                  </b-field>

                  <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-primary">Login</button>
                </footer>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

export default Vue.extend({
  name: "pb-header",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
