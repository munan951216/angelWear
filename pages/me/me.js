// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
        txt: "待付款",
        icon: "pending-payment"
      },
      {
        txt: "待发货",
        icon: "send-gift-o"
      },
      {
        txt: "待收货",
        icon: "logistics"
      },
      {
        txt: "待评价",
        icon: "flower-o"
      },
      {
        txt: "售后",
        icon: "after-sale"
      },
    ],
    jbn_origin: false,
    hidden: true,
    avatarUrl:"",
    nickName:""
  },
  // 跳转到我的资产页面
  toAssets() {
    wx.navigateTo({
      url: "/pages/meAssets/meAssets"
    })
  },
  // 跳转到积分明细页面
  toIntegral() {
    wx.navigateTo({
      url: '/pages/meIntegral/meIntegral'
    })
  },
  // 跳转到成长值明细页面
  toGrow() {
    wx.navigateTo({
      url: "/pages/meGrow/meGrow"
    })
  },
  // 跳转到我的订单页面
  toOrder() {
    wx.navigateTo({
      url: "/pages/order/order"
    })
  },
  // 跳转到优惠买单页面
  toDiscount() {
    wx.navigateTo({
      url: "/pages/meDiscount/meDiscount"
    })
  },
  // 跳转到发票申请页面
  toInvioce() {
    wx.navigateTo({
      url: '/pages/meInvioce/meInvioce',
    })
  },
  // 跳转到发票申请记录页面
  toInv() {
    wx.navigateTo({
      url: '/pages/meInv/meInv',
    })
  },
  // 跳转到收货地址页面
  toAddress() {
    wx.navigateTo({
      url: '/pages/meAddress/meAddress',
    })
  },
  // 点击立即登录，进行登录授权
  goLogin() {
    this.setData({
      jbn_origin:true
    })
  },
  // 点击退出登录，取消登录
  cancelLogin(){
    this.setData({
      jbn_origin: false
    })
  },
  // 点击允许，进行登录
  processLogin(e) {
    console.log(e)
    if (!e.detail.userInfo) {
      wx.showToast({
        title: '已取消',
        icon: "none"
      })
      return
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})