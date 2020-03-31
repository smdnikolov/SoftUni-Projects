<template>
  <div class="sidenav">
    <div class="form-wrapper">
      <button v-if="loggedIn" @click="signOut()">Log Out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },
  name: "appSideNavigation",
  props: {},
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>


<style scoped>
.sidenav {
  display: inline;
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
.container {
  width: 100%;
}
</style>
