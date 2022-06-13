<template>
  <RouterView/>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss">
  body{
    display: flex;
    justify-content: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 812px;
    background: #FFFFFF;
    border-radius: 30px;
  }
</style>
