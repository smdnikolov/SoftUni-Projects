<template>
  <div id="app">
    <app-navigation />
    <app-side-navigation />
    <app-container />
    <app-footer />
  </div>
</template>

<script>
import appNavigation from "./components/app-navigation.vue";
import appFooter from "./components/app-footer.vue";
import appContainer from "./components/app-container";
import appSideNavigation from "./components/app-side-navigation";

export default {
  name: "App",
  components: {
    appNavigation,
    appFooter,
    appContainer,
    appSideNavigation
  }
};
</script>

<style>
</style>
