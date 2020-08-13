// pages/meDiscount/meDiscount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    discountList:[
      {
        mj:"消费满10000元",
        dis:"减500元"
      },
      {
        mj:"消费满2000元",
        dis:"减300元"
      },
      {
        mj:"消费满1000元",
        dis:"减150元"
      },
      {
        mj:"消费满500元",
        dis:"减60元"
      },
      {
        mj:"消费满200元",
        dis:"减22元"
      },
      {
        mj:"消费满100元",
        dis:"减10元"
      },
    ]
  },
  // 返回上一个页面
  onClickLeft() {
    wx.navigateBack({
      delta: 1
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