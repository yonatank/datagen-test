<template>
  <div class="add-product">
    <div class="content">
      <div class="inputs-wrapper">
        <input v-model="product.name" placeholder="Name" type="text"/>
        <input v-model="product.price" placeholder="Price" type="number"/>
      </div>
      <textarea v-model="product.description" placeholder="Description"></textarea>
      <div v-if="error.length > 0" class="error">{{error}}</div>
    </div>
    <div class="controls">
      <img class="close" @click="closeModal()" src="../assets/x.svg">
      <img class="send" @click="addProduct()" src="../assets/send.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      product:{
        name:'',
        price:'',
        description:'',
      },
      error:""
    }
  },
  methods:{
    closeModal(){
      this.$emit('closeModal');
    },
    addProduct(){
      this.error = ''
      if(this.product.name.length < 2){
        this.error = 'Name must have at least two characters'
        return
      }
      if(this.product.price === 0){
        this.error = 'Price must be bigger than 0'
        return
      }
      if(this.product.description.length < 2){
        this.error = 'Description must have at least two characters'
        return
      }
      this.$emit('addToProduct',this.product);
    }
  }
}
</script>

<style scoped lang="scss">
  .add-product{
    display: flex;
    position: fixed;
    top: 72px;
    width: 100%;
    height: calc(100% - 72px);
    background: #FFFFFF;
    z-index: 100;
    color:#B1B0B8;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Inter';
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    max-width: 414px;

    .content{
      width: 90%;

      .inputs-wrapper{
        display: flex;
        justify-content: space-between;

        input{
          border: none;
          padding-left: 20px;
          text-align: left;
          height: 77px;
          outline: none;
          border-bottom: solid 1px #B1B0B8;

        }
      }

      textarea{
        width: calc(100% - 20px);
        min-height: 120px;
        border: none;
        font-family: 'Inter';
        padding: 30px 20px;
        outline: none;
      }

      .error{
        color: #ea4242;
      }
    }

    .controls{
      width: 10%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      
      img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .close{
        margin-top:17px;
      }
      
      .send{
        margin-top: 265px;
      }
    }
  }
</style>
