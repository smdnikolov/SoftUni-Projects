<template>
  <div class="sidenav">
    <a href="/hot">
      <span>
        <img class="hot" src="../assets/hot.png" width="24" height="24" />
      </span> Hot
    </a>
    <a href="/trending">
      <span>
        <img src="../assets/trending-up-1486430-1257239.png" width="24" height="24" />
      </span> Trending
    </a>
    <a href="/fresh">
      <span>
        <img src="../assets/fresh.png" width="24" height="24" />
      </span>
      Fresh
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
  display:inline;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: gray;
  display: inline-block;
}

.sidenav a:hover {
  color: #064579;
}
</style>
