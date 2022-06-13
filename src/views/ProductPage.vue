<template>
  <div class="product-page">
    <div @click="backToProducts()" class="back"><img src="../assets/back.svg"> </div>
    <div class="name">{{ $store.state.currentProduct.name }}</div>
    <div class="description">{{ $store.state.currentProduct.description }}</div>
  </div>
</template>

<script>

export default {
  name: 'ProductsPage',
  methods:{
    backToProducts(){
      this.$router.push({ name: 'productsList'})
    }
  }
}


</script>

<style scoped lang="scss">
.product-page{
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 36px 3% 0px 3%;

  .back{
    text-align: left;
    cursor: pointer;
  }

  .name{
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  .description{
    margin-top: 42px;
    max-width: 375px;
  }
}
</style>
