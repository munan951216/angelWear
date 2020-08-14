const {getCartList,removeCart,updateCount} = require('../../http/lp_api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     cartItem:[],
     totalPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let token = wx.getStorageSync('token')
    getCartList(token).then((res)=>{
      console.log(res)
      this.setData({
        cartItem:res.items,
        totalPrice:res.price
      })
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //删除购物车数据
  delete(e){
    console.log(e)
    let key= e.currentTarget.dataset.item.key;
    let index = e.currentTarget.dataset.item.index;
    console.log(this.data.cartItem)
    this.data.cartItem.splice(index,1)
    this.setData({
      cartItem:this.data.cartItem
    })
    let token = wx.getStorageSync('token')
    removeCart(key,token).then((res)=>{
        this.setData({
          cartItem:res,
          totalPrice:res.price
        })
    })
  },

  //增加购物车的物品的数量
  addCount(e){
    let token = wx.getStorageSync('token')
    let key = e.currentTarget.dataset.item.key;
    let number =  e.currentTarget.dataset.item.number+1
    updateCount({
      key,number,token
    }).then((res)=>{
       this.setData({
         cartItem:res.items,
         totalPrice:res.price
       })
    })
  },

  //减少购物车的数据
  lowerCount(e){
    console.log("555",e)
    let token = wx.getStorageSync('token')
    let key = e.currentTarget.dataset.item.key;
    let number =  e.currentTarget.dataset.item.number-1;
    updateCount({key,number,token}).then((res)=>{
      this.setData({
        cartItem:res.items,
        totalPrice:res.price
      })
    })
  },

  //跳转到计算数据页面
  toTotal(){
    let price = this.data.totalPrice
    wx.navigateTo({
      url: `/pages/cart_detail/cart_detail?price=${price}`,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})