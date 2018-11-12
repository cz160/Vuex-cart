//引入lodash工具库
import _ from 'lodash'

import {UPDATE_CAR_GOODS} from './mutation-type'

const mutations = {
    //更改购物车数据
    [UPDATE_CAR_GOODS]:(state,payload)=>{
        //预防引用类型地址传递的问题，进行深拷贝
        state.goods = _.cloneDeep(payload.goods)
    }
}
export default mutations