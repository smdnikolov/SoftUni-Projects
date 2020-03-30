<template>
  <div class="sidenav">
    <a href="/hot">
      <img class="hot" src="../assets/hot.png" />Hot
    </a>
    <a href="/trending">
      <img class="trending" src="../assets/trending-up-1486430-1257239.png" /> Trending
    </a>
    <a href="/fresh">
      <img class="fresh" src="../assets/fresh.png" />Fresh
    </a>
  </div>
</template>

<script>
export default {
  name: "appSideNavigation",
  props: {}
};
</script>


<style scoped>
.sidenav {
  width: 130px;
  position: fixed;
  z-index: 1;
  top: 80px;
  left: 160px;
  overflow-x: hidden;
  padding: 8px 0;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: gray;
  display: block;
}

.sidenav a:hover {
  color: #064579;
}

.main {
  margin-left: 140px; /* Same width as the sidebar + left position in px */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
.trending {
  position: fixed;
  width: 24px;
  height: 24px;
  left: 150px;
  top: 146px;
  margin-left: -20px;
}
.hot {
  position: fixed;
  width: 24px;
  height: 24px;
  left: 150px;
  top: 100px;
  margin-left: -20px;
}
.fresh {
  position: fixed;
  width: 24px;
  height: 24px;
  left: 150px;
  top: 190px;
  margin-left: -20px;
}
.sidenav a:active {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
 
}
</style>
