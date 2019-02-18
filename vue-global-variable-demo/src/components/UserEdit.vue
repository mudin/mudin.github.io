<template>
  <div class="hello">
    <p>
      User Edit (Component 3):
    </p>
    Name: <input type="text" v-model="$user.name">
    <br>
    <p>
      Role:
      <button
        v-if="$user.isAdmin()"
        @click="$user.setAsUser()">
          make admin
      </button>
      <button
        v-else
        @click="$user.setAsAdmin()">
          make not admin
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
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
