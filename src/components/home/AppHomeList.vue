<template>
    <div class="app-home-good-list">
        <el-container>
            <el-header>
                <h1>推荐商品</h1>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span="6" v-for="item in lists" :key="item.id">
                        <app-home-item :info='item'></app-home-item>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div> 
</template>
<script>
import AppHomeItem from './AppHomeItem'
export default {
    async beforeCreate(){
        let result = await this.$jsonp({
            url:'http://mbrand.xiu.com/brand/brandGoodsSearchByParams',
            params: {
                bId: 1308,
                sort: 11,
                p: 1,
            }
        })
        this.lists=result.goodsItems
    },
    data(){
        return {
            lists:[]
        }
    },
    components:{
       AppHomeItem 
    }
}
</script>
<style lang="scss">

</style>


