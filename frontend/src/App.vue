<template >
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <router-link to="/tareas">Tareas</router-link> |
    <router-link to="/contador">Contador</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/registro">Registro</router-link> |
    <router-link to="/desarrollo">Desarrollo</router-link> 
  </nav>
  <RouterView />
  <hr>
</template>

<script lang="js">

  export default { 
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: rgb(228, 184, 241);
}
nav {
  padding: 30px;
  background-color: rgb(225, 235, 142);

  a {
    font-weight: bold;
    color: #ec47ad;

    &.router-link-exact-active {
      color: #7b87f1;
    }
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
