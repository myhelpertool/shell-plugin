<template id="shell">
  <p>Salut</p>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "ShellComponent"
})
export default class ShellComponent extends Vue {
  mounted() {
    console.log("saluts");
  }
}
</script>
<style scoped></style>
