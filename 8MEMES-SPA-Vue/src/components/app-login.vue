<template>
  <div class="row">
    <div class="col-sm-4 center">
      <div v-if="error" class="error">{{error.message}}</div>
      <form @submit.prevent="logIn()">
        <div class="container">
          <h1>Login</h1>
          <div class="email">
            <input type="email" v-model="email" placeholder="email" />
          </div>
          <div class="password">
            <input type="password" v-model="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async logIn() {
      window.localStorage.setItem("email", `${this.email}`);
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "appHome" });
      } catch (err) {
        alert(err);
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.container {
  width: 100%;
}
</style>