//模拟后端，用localStorage模拟数据库
import _ from 'lodash'

const api = {
    //添加商品到购物车数据库中
    addGoods({id,name,price,num=1,imgUrl}){
        return new Promise(resolve=>{
            setTimeout(async()=>{
                let { goods } = await this.getCarGoods()
                //判断没有没这个商品
                let good = _.find(goods,item=>item.id===id)
                if(good){
                    good.num+=num
                }else{
                    //如果是新商品
                    goods.push({
                        id,name,price,imgUrl,num
                    })
                }
                //修改数据中中商品信息
                this.changeCarGoods(goods)
                resolve({status:200,goods})
            },200)
        })
    },
    //获取用户的所有购物车商品的信息
    getCarGoods(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve({
                    status:200,
                    goods:localStorage.goods?JSON.parse(localStorage.goods):[]
                })
            },200)
        })
    },
    //改变数据中的商品信息
    changeCarGoods(goods){
        localStorage.goods = JSON.stringify(goods)
    },
    //更改数据库中商品的数目
    controlGoodNumber({id,c_type}){
        return new Promise(resolve=>{
            setTimeout(async ()=>{
                let { goods } = await this.getCarGoods()
                //找到对应的商品
                let good = _.find(goods,item=>item.id==id)
                //判断为加还是减
                good.num+= c_type?1:-1
                //如果商品数量为0去掉该商品
                if(good.num<=0){
                    _.remove(goods,item=>item.id==id)
                }
                this.changeCarGoods(goods)
                resolve({
                    status:200,
                    goods
                })
            },200)
        })
    }
}
export default api