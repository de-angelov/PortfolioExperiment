<style lang="scss">
.test {
  border: 10px solid red;
  background: red;
  width: 50px;
  margin: auto;
}
</style>

<template>
  <!-- <div v-anime="{ rotate: '1turn', color: 'red', duration: 2000, loop: true }">!AAA!</div> -->
  <div v-anime="animation.container" class="test">
    <div>
      <div v-anime="animation.name">Denis Angelov</div>
      <div v-anime="animation.picture">{picture}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const logoProps = Vue.extend({
  props: {
    propMessage: String
  }
});

@Component({
  components: {},
  props: {},
  filters: {}
})
export default class Logo extends logoProps {
  private msg!: string;
  private animation: any = {
    name: {
      keyframes: [
        {
          scale: "0"
        },
        {
          translateY: -100,
          translateX: 0,
          scale: "0",
          delay: 400
        },
        { translateY: 0, translateX: 0, color: "#324fea", scale: "1" }
      ],
      duration: 100,
      easing: "easeOutElastic(1, .8)"
    },
    picture: {
      keyframes: [
        { translateY: -400, translateX: 0, scale: "0" },
        { translateY: 0, translateX: 0, color: "#324fea", scale: "1" }
      ]
    },
    container: {
      width: ["20px", "100%"],
      duration: 1000,
      easing: "linear"
    }
  };

  // created() {}
  // mounted() {}
  // updated() {}
  // destroyed() {}
}
</script>
