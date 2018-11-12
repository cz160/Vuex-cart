import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

export default {
    //使用命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}