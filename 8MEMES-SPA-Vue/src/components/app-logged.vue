<template>
  <div>
    <div class="row">
      <div class="col-sm-4 center">
        <div class="container">
          <div>
            <div>
              <p>
                <span>You are already logged in</span>

                <img
                  src="https://media3.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif?cid=ecf05e4780238f623037582fb573c0c386a2983f9b2cb48c&rid=giphy.gif"
                  height="400px"
                  alt
                />
              </p>
            </div>
            <div>
              <span>
                <router-link class="button" to="/">Go Home</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
      if (!this.loggedIn) {
        this.$router.replace({ name: "appHome" });
      }
    });
  },
  name: "appHome",
  props: {},
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
div {
  text-align: center;
}

.container {
  text-align: center;
  display: inline;
}

.button {
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  width: 115px;
  background: black;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: #f5860a;
  font-weight: bold;
  border: none;
}

.button:hover {
  text-decoration: none;
  opacity: 0.7;
}
span {
  padding: 20px;
}
p {
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;

  span {
    font: 700 2em/1 "Oxanium", cursive;
    letter-spacing: 0;
    padding: 0.25em 0 0.325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
    background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png)
      repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #ca6b126e;
    -webkit-animation: aitf-data-v-00ddd0ca 80s linear infinite;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
  }
}
@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
h1 {
  text-align: center;
  color: #f5860a;
}
</style>
