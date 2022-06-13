<template>
  <div class="product-page">
    producttttt
<!--    <div class="back"><img src="../assets/edit.svg"> </div>-->
<!--    <div class="product-name">{{product.name}}</div>-->
<!--    <div class="product-name">{{product.description}}</div>-->
  </div>
</template>

<script>

export default {


  name: 'ProductsPage',
  data() {
    return {

    }
  },
  created() {
    console.log("here")
    console.log( this.$route.params.product)

  }
}


</script>

<style scoped>
.product-page{
  display: flex;
  flex-direction: column;
}
</style>
