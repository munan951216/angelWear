const {
  request
} = require("./request.js")
module.exports = {
  // 商品分类左侧列表
  lcjCateL: () => {
    return request('shop/goods/category/all', 'GET', true)
  },
  // 商品分类右侧列表
  lcjCateR: () => {
    return request('shop/goods/list', 'GET', true)
  },
  //商品详情接口
  lcjCatexq: (id) => request('shop/goods/detail', 'GET', {
    id
  }, true),

}