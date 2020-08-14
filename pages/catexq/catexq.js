// pages/catexq/catexq.js
const {
  lcjCatexq
} = require("../../http/lcj_cate.js")
const {
 lcjJcart
} = require("../../http/lcj_cate.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品详情数据
    catexqlist: {},
    // 轮播
    swiper: [],
    id: "",

    // 转换html标签
    article: '',
    // 弹出层
    show: false,

    //收藏
    isShow: true,
    // 登录弹框
    jbn_origin: true,
  },



  onLoad: function (options) {
    // 详情页面
    lcjCatexq(options.id).then(res => {
      console.log(res)
      this.catexqlist = res.category
      this.catexqlist = res.basicInfo
      this.setData({
        //获取总的详情数据
        catexqlist: this.catexqlist,
        // 获取轮播数据
        swiper: res.pics,
        article: res.content,
      })
      // 富文本调用
      this.change()

    })


   
  },



  //商品介绍   富文本解析
  change() {
    var WxParse = require('../../wxParse/wxParse.js');
    var that = this;
    WxParse.wxParse('article', 'html', this.data.article, that, 5);
  },

  // 步进器   购物车添加数量
  onChange(event) {
    console.log(event.detail);
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

  // 点击退出登录，取消登录
  cancelLogin() {
    this.setData({
      jbn_origin: false
    })
  },

  //弹出层
  lcj_cateJrgwc() {
    this.data.show = true
    this.setData({
      show: true,
     
    })
     // console.log(this.data.show)
  },
  //关闭弹出层
  onClose() {
    this.setData({
      show: false
    });
  },
  //收藏
  lcj_cateXqSc() {

    this.data.isShow = !this.data.isShow
    this.setData({

      isShow: this.data.isShow,

    })
  },
  //  点击跳转到购物页面
  lcj_cateJrtz() {
    wx.reLaunch({
     
      url: '/pages/cart/cart',
      
    })
    // console.log(123)
    let token = wx.getStorageSync('token')
    let goodsId = this.data.pics[0].goodsId
    let cNumber = 1
    lcjJcart(token, goodsId, cNumber).then(res => {
      console.log(res)
    })



   
   
    // 加入购物车  显示加入成功
    wx.showToast({
      title: '加入成功',
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */


  /**
=======
  /**
   * 生命周期函数--监听页面加载
   */
  
  /**


   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {



    // lcjCatexq().then((res)=>{
    //   console.log("111",res)
    // })

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