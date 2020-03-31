<template>
  <div class="row">
    Register
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="clicked()">
      <div class="container">
        <h1>Register</h1>
        <div class="email">
          <input type="email" v-model="email" placeholder="email" />
        </div>
        <div class="password">
          <input type="password" v-model="password" placeholder="password" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
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
    async clicked() {
      window.localStorage.setItem("email", `${this.email}`);
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "appContainer" });
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