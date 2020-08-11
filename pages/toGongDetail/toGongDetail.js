const {getGDetail} = require('../../http/lp_api');
var WxParse = require('../../wxParse/wxParse.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
       detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
    // console.log(options)
      getGDetail(options.id).then((res)=>{
      console.log("888",res)
      this.setData({
        detail:res
      })
      var content = this.data.detail.content
      console.log(content)
      WxParse.wxParse('content', 'html', content,that, 5);
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
  
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