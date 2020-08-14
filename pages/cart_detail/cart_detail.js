const {
  getCartList
} = require('../../http/lp_api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    cartItemDetail: [],
  },

  // 关闭按钮
  onClose(){
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      totalPrice: options.price
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var token = wx.getStorageSync('token');
    getCartList(
      token).then((res) => {
      console.log(res)
      this.setData({
        cartItemDetail: res.items
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  toDetailAddress(){
      wx.navigateTo({
        url: '/pages/toAdd/toAdd',
      })
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