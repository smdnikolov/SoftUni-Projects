<template>
  <div class="catnav">
    <h3>Categories</h3>
    <ul style="list-style:none;">
      <li v-for="(category,index) in categories" :key="index">
        <router-link :to="category.link">
          <img :src="category.src" />
          <p>{{category.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appCategories",
  props: {},
  data() {
    return {
      categories: [
        {
          name: "Animals",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100wp.webp",
          link: "/animals"
        },
        {
          name: "Anime",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310356.2625_y8EVa2_100x100wp.webp",
          link: "/anime"
        },
        {
          name: "Awesome",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557217995.2799_bYQyJU_100x100wp.webp",
          link: "/awesome"
        },
        {
          name: "Funny",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp",
          link: "/funny"
        },
        {
          name: "Gaming",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557286928.6604_uTYgug_100x100wp.webp",
          link: "/gaming"
        },
        {
          name: "NSFW",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557297099.4728_VeSAvU_100x100wp.webp",
          link: "/nsfw"
        },
        {
          name: "WTF",
          src:
            "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100wp.webp",
          link: "/wtf"
        }
      ]
    };
  }
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
.catnav a:active {
  color: #064579;
  text-decoration-style: dashed;
}
img {
  width: 45px;
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
