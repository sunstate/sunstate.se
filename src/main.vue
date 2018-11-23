<template>
  <div class="app">
    <div class="test" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "sunstate-main"
})
export default class Home extends Vue {}
</script>

<style src="normalize.css" />
