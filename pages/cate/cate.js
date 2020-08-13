// pages/cate/cate.js
const { lcjCateL, lcjCateR } = require("../../http/lcj_cate.js")
Page({


  /**
   * 页面的初始数据
   */
  data: {
    // 左侧列表
    activeKey: 0,
    // 右侧商品刚获取的数据
    shop: [],
    // 分类左侧列表数据
    catelist: [],


    id: "",
    // 获取商品对应列表的数据
    lcjcate: [],
    // 弹出层
    show: false,
  },
  //添加购物车弹出层显示
  lcj_cateGwc() {
    console.log(1111)
    this.data.show = true
    this.setData({
      show: this.data.show
    })
    console.log(this.data.show)
  },


  onLoad: function (options) {
    // this.list()
    // this.shoplist()
    lcjCateL().then((res) => {
      console.log(res)
      this.catelist = res
      // console.log(res.data.data)
      this.setData({
        catelist: this.catelist,
      })
    })
    lcjCateR().then((res) => {
      this.shop  =  res
      let  { id }   =   this.catelist[0]
      // console.log(id)
      this.lcjcate  =  this.shop.filter((item) => {
        return  item.categoryId  ==  id
      })
      // console.log( this.data.lbj_arr)
      this.setData({
        shop: this.shop,
        lcjcate : this.lcjcate
      })
    })
    // this.lcj_cateLeft()
  },


  //关闭弹出层
  onClose() {
    this.setData({ show: false });
  },


  lcj_cateLeft(e) {
    // console.log(e)
    let  { id }  =  e.currentTarget.dataset
    this.data.lcjcate  =  this.data.shop.filter((item) => {
      return  item.categoryId  ==  id
    })
    this.setData({
      lcjcate: this.data.lcjcate
    })
  },
  //点击分类商品进入商品详情
  lcj_shoplist(e) {
    console.log(1111)
    let { id } = e.currentTarget.dataset;

    console.log('id', id)
    wx.navigateTo({
      url: `/pages/catexq/catexq?id=${id}`,
    })
  },


  //获取商品数据
  // // 左侧导航栏数据
  // list() {


  //   wx.request({
  //     url: 'https://api.it120.cc/jbn1995/shop/goods/category/all',
  //     //设置请求头
  //     header: {
  //       'content-type': 'application/text'
  //     },
  //     //成功请求
  //     success: (res) => {
  //       //  console.log(res)
  //       this.data.catelist = res.data.data
  //       // console.log(res.data.data)
  //       this.setData({
  //         catelist: this.data.catelist,
  //       })
  //     }
  //   })
  // },


  // 右侧列表数据
  // shoplist() {


  //   wx.request({
  //     url: `https://api.it120.cc/jbn1995/shop/goods/list${this.data.id}`,
  //     //设置请求头
  //     header: {
  //       'content-type': 'application/text'
  //     },
  //     //成功请求
  //     success: (res) => {
  //       // console.log(res)
  //       this.data.shop = res.data.data
  //       // console.log(res.data.data)
  //       this.setData({
  //         shop: this.data.shop,
  //       })
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  // lcj_cateLeft(e) {
  //   console.log(e)
  //   let {
  //     id
  //   } = e.currentTarget.dataset


  //   this.data.lcjcate = this.data.shop.filter(item => {
  //     return item.categoryId == id
  //   });


  //   if (this.data.lcjcate.length > 0) {
  //     // lcjcate:this.data.lcjcate
  //     this.setData({
  //       lcjcate: this.data.lcjcate
  //     })
  //     console.log(this.data.lcjcate)
  //   } else {
  //     this.setData({
  //       lcjcate: [],
  //     })
  //     console.log(this.data.lcjcate)
  //   }
  //   console.log(this.data.lcjcate)
  // },






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