const {request}=require("./request.js")
module.exports={
  // 商品分类搜索
  jjbnSearch:()=>{
    return request("shop/goods/list","POST","",true)
  },
  // 加入购物车
  jbnAddCart:()=>{
    return request("shopping-cart/add","POST",{id,num,token},true)
  }
}