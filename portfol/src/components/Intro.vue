<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueAnime from "vue-animejs";

export default class Logo extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
</style>
