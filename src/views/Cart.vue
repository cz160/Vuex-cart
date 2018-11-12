<template>
  <div class="app-car">
      <template v-if = "cart.goods.length > 0">
        <app-cart-item
          v-for = "good in cart.goods"
          :key  = "good.id"
          :info = "good"
        ></app-cart-item>
        <app-all-info></app-all-info>
      </template>
      <el-alert
        v-else
        title="没有更多数据"
        type="warning">
      </el-alert>
  </div>
</template>
<script>
import AppCartItem from '@/components/cart/AppCartItem'
import AppAllInfo from '@/components/cart/AppAllInfo'
import { mapState } from 'vuex'
  export default{
     computed:{
        ...mapState(['cart'])
     },
     components:{
       AppCartItem,
       AppAllInfo
     }
  }
</script>
<style lang="scss">

</style>


