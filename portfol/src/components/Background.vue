<template>
  <div>
    <canvas class="zdog-canvas" width="1000" height="1000"></canvas>
  </div>
</template>
<style>
.zdog-canvas {
  border: 11px solid red;
}
</style>

<script lang="ts">
import Vue from "vue";
import Zdog from "zdog";
// import Component from "vue-class-component";
import Component from "vue-class-component";

@Component({})
export default class Background extends Vue {
  mounted() {
    console.log("mounted");
    console.log(document.querySelectorAll(".zdog-canvas"));
    const illo = new (Zdog.Illustration as any)({
      element: ".zdog-canvas"
    });

    new (Zdog.Ellipse as any)({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: "#636"
    });

    // update & render
    illo.updateRenderGraph();
  }
}
</script>

