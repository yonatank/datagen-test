<template>
  <div class="app-title">Shopping List</div>
<!--  <ProductsList/>-->
  <RouterView/>
</template>

<script>
// import ProductsList from "@/views/ProductsList";

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
  margin-top: 60px;
  width: 375px;
  height: 812px;
  background: #FFFFFF;
  border-radius: 30px;

  .app-title{
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #585666;
  }
}
</style>
