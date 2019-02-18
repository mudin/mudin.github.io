<template>
  <div id="app">
    <p>
      <strong>
        This is Vue/Vuex Global Variable plugin example.
        Define any variable, it will be acceptable from any component
      </strong>
    </p>

    <br><br>
    <div v-if="$user.isLogged()">
      <user-info/>
      <br><br>
      <user-edit/>
    </div>
    <div v-else>
      <login/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import UserEdit from './components/UserEdit.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  name: 'app',
  components: {
    UserEdit,
    UserInfo,
    Login,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
