// pages/me/me.js
const WXAPI = require('apifm-wxapi');
const index = require('../../utils/index.js')
WXAPI.init("jbn1995")
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
    avatarUrl: '',
    nickName: ""
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
  // 跳转到我的收藏页面
  toFav(){
    wx.navigateTo({
      url: '/pages/meFav/meFav',
    })
  },
  // 跳转到每日签到页面
  toQian(){
    wx.navigateTo({
      url: '/pages/meQian/meQian',
    })
  },
  // 跳转到积分券兑换积分页面
  toScore(){
    wx.navigateTo({
      url: '/pages/meScore/meScore',
    })
  },
  // 跳转到积分券兑换成长值页面
  toGrowList(){
    wx.navigateTo({
      url: '/pages/meGrowList/meGrowList',
    })
  },
  
  // 点击立即登录，进行登录授权
  goLogin() {
    this.setData({
      jbn_origin: true
    })
  },
  // 点击退出登录，取消登录
  cancelLogin() {
    this.setData({
      jbn_origin: false
    })
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


  },


  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {
    this.setUseRInfo()
    index.checkHasLogined().then(isLogin => {
      if (isLogin) {
        wx.showToast({
          title: "登录成功",
        })
        this.setData({
          jbn_origin: !isLogin,
          hidden: !isLogin
        })
      }
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


  },
  // 页面刷新的时候请求用户数据
  setUseRInfo() {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          avatarUrl: JSON.parse(res.rawData).avatarUrl,
          nickName: JSON.parse(res.rawData).nickName
        })
      }
    })
  },
  // 点击允许，进行登录
  processLogin(e) {
    console.log(e.detail.userInfo)
    if (!e.detail.userInfo) {
      wx.showToast({
        title: '已取消',
        icon: "none"
      })
      return false
    }
    this.setData({
      avatarUrl: e.detail.userInfo.avatarUrl,
      nickName: e.detail.userInfo.nickName
    })
    console.log(this.data.avatarUrl)
    console.log(this.data.nickName)


    // 如果有userinfo ,就调用register注册方法
    index.register(this)






  },
  logout(page) {
    wx.clearStorageSync()
    wx.reLaunch({
      url: '/pages/me/me'
    })
  }


})