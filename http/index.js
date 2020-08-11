const { request }=require("./request.js")
// 项目中用到的接口的封装
module.exports={
  // 商品分类接口
  goodCate:()=>{
    return request('shop/goods/category/all', 'GET', '', true)
  },
  // banner轮播图
  getBanner:()=>{
    return request("banner/list","GET","",true)
  },
  // 商品详情
  goodCate:()=>{
    return request("shop/goods/detail","GET",{id:id},true)
  },
  // 添加收藏
  addFav:(goodsId,token)=>{
    return request()
  }

}