<template>
  <div class="home">
    <Logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";
@Component({
  components: { Logo }
})
export default class Home extends Vue {}
</script>
