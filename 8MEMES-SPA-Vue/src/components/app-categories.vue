<template>
  <div class="catnav">
    <h3>Categories</h3>
    <ul style="list-style:none;">
      <li>
        <a href="/animals">
          <img src="../assets/categories/animals.webp" />
          <p>Animals</p>
        </a>
      </li>
      <li>
        <a href="/anime">
          <img src="../assets/categories/anime.webp" />
          <p>Anime</p>
        </a>
      </li>
      <li>
        <a href="/awesome">
          <img src="../assets/categories/awesome.webp" />
          <p>Awesome</p>
        </a>
      </li>
      <li>
        <a href="/funny">
          <img src="../assets/categories/funny.webp" />
          <p>Funny</p>
        </a>
      </li>
      <li>
        <a href="/gaming">
          <img src="../assets/categories/gaming.webp" />
          <p>Gaming</p>
        </a>
      </li>
      <li>
        <a href="/nsfw">
          <img src="../assets/categories/nsfw.webp" />
          <p>NSFW</p>
        </a>
      </li>
      <li>
        <a href="/anime">
          <img src="../assets/categories/wtf.webp" />
          <p>NSFW</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appCategories",
  props: {}
};
</script>


<style scoped>
.catnav {
  z-index: 1;
  overflow-x: hidden;
  padding: 10px 0;
  display: flow-root;
  text-align: center;
}

.catnav a {
  text-decoration: none;
  font-size: 15px;
  color: gray;
  display: block;
  text-align: center;
}

.catnav a:hover {
  color: #064579;
}
img {
  width: 80px;
}
ul {
  width: 100%;
  text-align: center;
  font-size: 20px;
  display: inline-block;
  padding: 0;
}
li {
  display: list-item;
  padding: 5px;
}
p {
  padding-top: 5px;
}
</style>
