const { request }=require('./request.js');

//项目中用到的各种业务接口的封装

module.exports={

  //banner图接口
  getBanner:()=>{
    return request('banner/list',"GET",'',true)
  },

  //首页九宫格商品
  getGood:()=>{
    return  request('shop/goods/category/all','GET','',true)
  },
  //限时秒杀接口
  getSeconds:()=>{
    return request('shop/goods/list','GET',{ miaosha:true},true)
  },
   
  //封装砍价商品
  getKan:()=>{
    return request('shop/goods/list','GET',{ kanjia:true},true)
  },

  //商品列表
  getGoodList:()=>{
    return request('shop/goods/list','GET','',true)
  },

  //封装爆品推荐商品
  getBaopin:()=>{
    return request("shop/goods/list",'GET',{recommendStatus: 1},true)
  },
 
  //全民拼团
  getTuan:()=>{
    return  request("shop/goods/list",'GET',{pingtuan:true},true)
  },

  //公告详情
  getGong:()=>{
    return request("notice/list",'GET',{},true)
  },

  //更多里的数据
  getLower:()=>{
    return request("notice/last-one",'GET',{},true)
  },

  //公告详情中的详情
  getGDetail:(id)=>{
    return  request('notice/detail','GET',{id},true)
  },

  //获取礼品卷的内容
  getGifts:()=>{
    return request('discounts/details','GET',{},true)
  },
  
  //读取购物车数据
  getCartList:(token)=>request('shopping-cart/info','GET',{token},true)

}