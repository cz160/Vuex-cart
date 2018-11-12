<template>
    <div class="app-home-good-item">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="info.imgUrl" class="image">
                <div style="padding: 14px;">
                    <span>{{info.name}}</span>
                    <div class="bottom clearfix">
                    <time class="time">￥{{info.mktPrice}}</time>
                </div>
                <div style="padding: 14px;">
                     <el-input-number size="mini" v-model="num"  :min="1"  ></el-input-number>
                     <el-button @click="addGoodsHandler" style="margin-left: 15px;" type="danger" size = "mini">加入购物车</el-button>
                </div>
                </div>
            </el-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:['info'],
    data(){
        return {
            num:1
        }
    },
    methods:{
        ...mapActions({
            addGoods: 'cart/addGoods'
        }),
        addGoodsHandler(){
            //发送请求 - 》存储在store中
            // this.$store.dispatch({
            //     type:'cart/addGoods',  
            // })
            let { id, imgUrl, name, mktPrice: price }  = this.info
            this.addGoods({
                id, imgUrl, name, price, num: this.num
            })
        }   
    }
}
</script>
<style lang="scss">
    .app-home-good-item {
     text-align: left;
     .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
 }
</style>


