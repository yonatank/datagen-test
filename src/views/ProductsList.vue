<template>
  <div class="products-list">
    <div class="title">Shopping List</div>
    <ProductRow
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :index="index"
        :currency="currency"
        @goToProduct="goToProduct(product)"
        @deleteProduct="deleteProduct"
        @strikeProduct="strikeProduct"
    />

    <div class="total-amount-wrapper">
      <div class="total-text">Total:</div>
      <div class="amount">{{ getTotalAmount }} {{ currency }}</div>
    </div>
    <div class="add-product-wrapper" @click="toggleAddProduct()">
      <div class="plus">+</div>
      <div class="text">Add product</div>
    </div>
  </div>

  <AddProduct @addToProduct="addToProduct" @closeModal="toggleAddProduct" v-if="isShowAddProduct"/>
</template>

<script>
import ProductRow from "@/components/ProductRow";
import AddProduct from "@/components/AddProduct";

export default {
  name: 'ProductsList',
  components: {
    ProductRow,
    AddProduct
  },
  data() {
    return {
      currency: "NIS",
      isShowAddProduct: false,
      products: [
        {
          id: 1,
          name: "Tomatos",
          price: 5,
          description: "The tomato is the edible berry of the plant Solanum lycopersicum"
        },
        {
          id: 2,
          name: "Cucumbers",
          price: 3,
          description: "Cucumber (Cucumis sativus) is a widely-cultivated creeping vine plant in the Cucurbitaceae family that bears usually cylindrical fruits"
        },
        {
          id: 3,
          name: "Bread",
          price: 10,
          description: "Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking."
        },
        {
          id: 4,
          name: "Grapes",
          price: 4,
          description: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis."
        },
        {id: 6, name: "Onions", price: 4},
      ]
    }
  },
  computed: {
    getTotalAmount() {
      return this.products.reduce((acc, product) => acc + product.price, 0);
    }
  },
  methods: {
    goToProduct(product) {
      this.$store.dispatch('setCurrentProduct', product)
      this.$router.push({name: 'product', params: {product}})
    },
    toggleAddProduct() {
      this.isShowAddProduct = !this.isShowAddProduct
    },
    addToProduct(product) {
      this.products.push(product)
      this.toggleAddProduct()
    },
    deleteProduct(productId){
      let newProducts =  this.products.filter(product => product.id !== productId )
      this.products = newProducts
    },
    strikeProduct(productId){
      let indexToStrike =  this.products.findIndex(product => product.id === productId )
      this.products[indexToStrike].strike = true
    }
  }
}


</script>

<style scoped lang="scss">
.products-list {
  margin-top: 50px;
  color: #585666;

  .title {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 40px;
  }

  .total-amount-wrapper {
    width: 200px;
    display: flex;
    margin-left: 92px;

    .total-text{
      margin-right: 98px;
    }
  }

  .add-product-wrapper{
    display: flex;
    color: #FF941A;
    padding-left: 43px;
    margin-top: 40px;
    cursor: pointer;

    .plus{
      font-weight: 700;
      font-size: 24px;
    }

    .text{
      font-weight: 400;
      font-size: 15px;
      line-height: 36px;
      margin-left: 34px;
    }
  }
}
</style>
