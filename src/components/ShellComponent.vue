<template id="shell">
  <p>Salut {{ date }}</p>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import moment from "../../../moment";

@Component({
  name: "ShellComponent"
})
export default class ShellComponent extends Vue {
  date = moment().format("MMMM Do YYYY, h:mm:ss a");
  mounted() {
    console.log("saluts");
  }
}
</script>
<style scoped></style>
