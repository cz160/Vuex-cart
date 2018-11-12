

const getters = {
    allInfo (state) { // 派生出来的是购物车商品的总价钱和总数量
        let allNumber = 0
        let allPrice = 0
        if ( state.goods.length ) {
            state.goods.forEach(good => {
                allNumber += good.num
                allPrice  += good.num * good.price
            });
        }

        return { allNumber, allPrice }
    }
}

export default getters