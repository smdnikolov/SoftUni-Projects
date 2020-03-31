<template>
  <div>
    <app-navigation />
    <div class="container-fluid" id="app">
      <div class="row">
        <div class="col-sm-4 left">
          <app-side-navigation />
          <app-categories />
          <app-footer />
        </div>
        <div class="col-sm-4 center">
          <app-container />
        </div>
        <div class="col-sm-4 right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import appNavigation from "./components/app-navigation.vue";
import appFooter from "./components/app-footer.vue";
import appContainer from "./components/app-container";
import appSideNavigation from "./components/app-side-navigation";
import appCategories from "./components/app-categories.vue";

export default {
  name: "App",
  components: {
    appNavigation,
    appFooter,
    appContainer,
    appSideNavigation,
    appCategories
  }
};
</script>

<style>
body {
  font-family: "Oxanium", cursive;
}
.left {
  float: left;
  position: fixed;
  text-align: center;
}
.center {
  position: relative;
  left: 33.3333%;
}
.row {
  margin-top: 100px;
}
</style>
