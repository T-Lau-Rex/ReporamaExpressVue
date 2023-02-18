<template>
  <nav id="nav">
  </nav>
  <router-view/>
</template>

<script>
// importación js Bootstrap
import "./assets/bootstrap.bundle.min.js";
export default {
  
}
</script>

<style lang="sass">
// importación css Bootstrap
@import "./assets/bootstrap.min.css"


#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50


nav 
  padding: 30px
  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
</style>
