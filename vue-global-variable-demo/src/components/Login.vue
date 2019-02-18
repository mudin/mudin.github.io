<template>
  <div class="hello">
    <p>
      Login (Component 1):
    </p>
    Name: <input type="text" v-model="username" placeholder="Enter any name">
    <br>
    Password: <input type="password">
    <br>
    <button
      @click="login"
      placeholder="Enter any pwd"
      :disabled='isUserNameEmpty()'>Login</button>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    isUserNameEmpty() {
      return this.username === '' || this.username === undefined || this.username === null;
    },
    login() {
      this.$user.copy(
        {
          name: this.username,
          logged: true,
        },
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
