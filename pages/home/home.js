const {getGong} = require('../../http/lp_api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //跳到开张页面
  toDetail(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
       url:`/pages/toGongDetail/toGongDetail?id=${id}`
    })
  },

  toLower(){
    wx.navigateTo({
      url: '/pages/lower/lower',
    })
  },

  //礼品中心
  toGift(){
    wx.navigateTo({
      url: '/pages/gifts/gifts',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    getGong().then((res)=>{
      this.setData({
        content:res.dataList
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