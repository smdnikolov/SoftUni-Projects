<template>
  <footer>
    <div class="copyright">
      <p>Copy 2013 - Organisation</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "appFooter",
  props: {}
};
</script>


<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  margin: 0;
  padding: 0;
}

footer {

  position:fixed;
  display: inline-block;
  height: 70px;

  background-color: #999;
  .copyright {
    width: 250%;
    p {
      display: inline-block;
      padding-left: 10%;
      color: white;
      font-size: 1em;
      line-height: 70px;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }
}
</style>
