<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商品列表页面</router-link> |
      <router-link to="/cart">购物车</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  //进入应用初始化购物车数据
  beforeCreate(){
    this.$store.dispatch('cart/initialCarGoods')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
