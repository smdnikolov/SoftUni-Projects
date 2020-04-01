<template>
<div>
  <h1>NSFW Memes</h1>
    <div class="row">
      <div class="col-sm-4 center">
        <div v-for="post in posts" :key="post.id" class="post">
          <h2>{{post.title}}</h2>
          <a href class="card overflow-hidden postPlaceholder post-details">
            <img class="card-image" :src="post.url" />
          </a>
          <div class="post-info">
            <span>
              <a href="#">{{post.points}} points</a>
            </span> ·
            <span>
              <a href="#">{{post.comments.length}} comments</a>
            </span>
          </div>
          <span class="button-container">
            <span>
              <button class="upvote">⇧</button>
              <button class="downvote">⇩</button>
              <button>&#128172;</button>
            </span>
          </span>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appTrending",
  props: {},
  data() {
    return {
      posts: [
        {
          id: 2,
          category: "WTF",
          title: "Two strange ladies",
          url:
            "https://media1.giphy.com/media/3oKIPmUUz1MT9u3UA0/200.webp?cid=ecf05e47e7bae4afd0ab9004ce54274dc17afbd6ab487574&rid=200.webp",
          points: 12,
          comments: []
        }
      ]
    };
  }
};
</script>


<style scoped>
.card-image {
  display: inline-block;
  width: 100%;
}
.post-info {
  padding-top: 10px;

  display: block;
}
.button-container {
  padding-top: 10px;

  display: block;
  font-size: 35px;
  font-weight: bold;
}
button {
  color: rgba(0, 0, 0, 0.25);
  width: 70px;
  height: 60px;
  margin-right: 10px;
  text-align: center;
}
.line {
  width: 730px;
  height: 47px;
  border-bottom: 2px solid #ddd;
  display: inline-block;
}
h2 {
  float: none;
  text-align: left;
  word-wrap: break-word;
}
a:hover {
  color: black;
}
a {
  text-decoration: none;
  font-size: 15px;
  color: gray;
}
h1 {
  text-align: center;
   color: #f5860a;
}
</style>
