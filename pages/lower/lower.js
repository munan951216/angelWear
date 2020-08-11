const {
  getLower
} = require('../../http/lp_api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  toZhan(e){
    let id = e.currentTarget.dataset.id;
    console.log("id",id)
    wx.navigateTo({
       url:`/pages/toGongDetail/toGongDetail?id=${id}`
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    getLower().then((res) => {
      console.log("lplplp", res)
      this.setData({
        title: res
      })
    })
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