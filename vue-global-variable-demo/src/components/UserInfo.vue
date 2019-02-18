<template>
  <div class="hello">
    <p>
      User Info (Component 2):
    </p>
    <p>
      Name: {{$user.name}}
    </p>
    <p>
      Role: {{$user.isAdmin()?'Admin':'User'}}
    </p>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
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
