<template>
  <div class="universe">
    <div class="logotype-location">
      <sun-logotype />
    </div>
    <sun-menu />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SunLogotype, SunMenu } from "components/ui";

@Component({
  name: "sunstate-main",
  components: {
    SunMenu,
    SunLogotype
  }
})
export default class Home extends Vue {}
</script>

<style src="normalize.css" />

<style lang="scss">
html,
body {
  background: #2c1f27;
}
</style>

<style lang="scss" scoped>
.universe {
  height: 100%;
}

.logotype-location {
  position: absolute;
  margin: 25px;
}
</style>
