<template>
  <div :class="`product ${product.strike ? 'strike-product' : ''}`">
    <div class="num-in-list">{{index + 1}}</div>
    <div @click="callAction('goToProduct')" class="name">{{product.name}}</div>
    <div class="price">{{product.price}} {{currency}}</div>
    <div @click="callAction('strikeProduct')" class="edit"><img src="../assets/edit.svg" alt="edit"></div>
    <div class="separator"></div>
    <div @click="callAction('deleteProduct')" class="delete"><img src="../assets/delete.svg" alt="delete"></div>
    <div v-if="product.strike" class="strike-line"></div>
  </div>
</template>

<script>
export default {
  name: 'ProductRow',
  props: {
    product: Object,
    index: Number,
    currency: String
  },
  methods:{
    callAction(action){
      this.$emit(action,this.product.id);
    }
  }
}
</script>

<style scoped lang="scss">

  $borderColor : #E3E3E6;
  .product{
    position: relative;
    display: flex;
    border-bottom: 1px solid $borderColor;
    padding: 0px 24px;
    height: 48px;
    margin-bottom: 16px;

    &.strike-product{
      .name{
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #B1B0B8;
      }

      .price{
        color: #B1B0B8;
      }
    }

    .strike-line{
      background: #E3E3E6;
      width: 195px;
      height: 1px;
      position: absolute;
      top: 24px;
      left: 86px;
    }

    .num-in-list{
      color: #FF941A;
      font-weight: 700;
      font-size: 24px;
      line-height: 48px;
      width: 50px;
      border-right: solid 1px $borderColor;
    }

    .name{
      color:#585666;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 15px;
      width: 130px;
      line-height: 48px;
      margin: 0px 0px 0px 16px;
      text-align: left;
      cursor: pointer;
    }

    .price{
      font-weight: 400;
      font-size: 15px;
      line-height: 48px;
      width: 70px;
      margin-right: 30px;
    }

    img{
      width: 18px;
      height: 18px;
      margin-top: 12px;
      cursor: pointer;
    }

    .separator{
      height: 24px;
      width: 1px;
      background: #E3E3E6;
      margin: 9px 14px 0px 13px;
    }
  }
</style>
