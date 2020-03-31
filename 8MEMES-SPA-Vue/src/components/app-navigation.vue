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
  top:10%;
  position: fixed;
  top: 0; 
  width: 100%; 
  z-index: 1;
  padding:5px;
}
.navbar-header {
  display: list-item;
  margin: auto;
  width: 100%;
}
.navbar-default {
  border-color: black;
}
</style>
