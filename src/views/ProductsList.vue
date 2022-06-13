<template>
  <div class="products-list">
    <ProductRow
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :index="index"
        :currency="currency"
        @click="goToProduct(product)"
    />
  </div>
  <div class="total-amount">{{getTotalAmount}}</div>
</template>

<script>
import ProductRow from "@/components/ProductRow";

export default {
  name: 'ProductsList',
  components: {
    ProductRow,
  },
  data() {
    return {
      currency: "NIS",
      products:[
        {id:1,name:"Tomatos",price: 5},
        {id:2,name:"Cucumbers",price: 3},
        {id:3,name:"Bread",price: 10},
        {id:4,name:"Grapes",price: 4},
        {id:6,name:"Onions",price: 4},
      ]
    }
  },
  computed:{
    getTotalAmount(){
      return this.products.reduce((acc, product) => acc + product.price, 0);

    }
  },
  methods: {
    goToProduct(product){
      console.log("go to proeuct",product)
      this.$router.push({ name: 'product', params: { product } })
    }
  }
}


</script>

<style scoped>
.products-list{
  margin-top: 50px;
}
</style>
