<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="/">
          <img src="../assets/lоgo.jpg" style="width:100px" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "appNavigation",
  props: {}
};
</script>


<style scoped>
.navbar {
  background: black;
  text-align: center;
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
.navbar-header {
  display: inline-block;
  margin: auto;
  width: 100%;
}
.navbar-default {
  border-color: black;
}
</style>
