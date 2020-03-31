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
        <div class="col-sm-4 right">
          <app-side-nav-right />
          <app-register />
          <app-login />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import appNavigation from "./components/app-navigation.vue";
import appFooter from "./components/app-footer.vue";
import appSideNavRight from "./components/app-side-nav-right";
import appSideNavigation from "./components/app-side-navigation";
import appCategories from "./components/app-categories.vue";
import appLogin from "./components/app-login";
import appRegister from "./components/app-register";

export default {
  name: "App",
  components: {
    appNavigation,
    appFooter,
    appSideNavigation,
    appCategories,
    appSideNavRight,
    appRegister,
    appLogin
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
.right {
  position: fixed;
  text-align: center;
  left: 66.6666%;
}
.row {
  margin-top: 100px;
  margin-left: 0px;
  margin-right: 0px;
}
.line {
  width: 100% !important;
}
</style>
