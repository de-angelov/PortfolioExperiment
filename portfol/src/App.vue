<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/cv">CV</router-link>|
      <router-link to="/about">About me</router-link>
    </div>
    <router-view />
    <Background />
  </div>
</template>
<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import "./style/main.scss";
import Background from "@/components/Background.vue";
import Vue from "vue";
import VueAnime from "vue-animejs";

Vue.use(VueAnime);

@Component({
  components: { Background }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
