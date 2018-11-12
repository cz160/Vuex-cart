import api from '@/util/api'
import {
    namespace,
    UPDATE_CAR_GOODS
} from './mutation-type'
const actions = {
    //添加商品
    async addGoods(context,payload){
        //与后端交互，模拟异步动作
        let result = await api.addGoods(payload)
        if(result.status===200){
            //提交mutations
            context.commit({
                type:UPDATE_CAR_GOODS,
                goods:result.goods
            })
        }
    },
    //初始化数据
    async initialCarGoods(context){
        let result = await api.getCarGoods()
        if(result.status===200){
            //提交mutation
            context.commit({
                type:UPDATE_CAR_GOODS,
                goods:result.goods
            })
        } 
    },
    //操作商品的数量
    async controlGoodNumber(context,payload){
        let result = await api.controlGoodNumber(payload);
        if(result.status===200){
            context.commit({
                type:UPDATE_CAR_GOODS,
                goods:result.goods
            })
        }
    } 
}
export default actions