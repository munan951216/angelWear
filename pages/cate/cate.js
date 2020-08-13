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

// 获取左侧数据
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
    // 分类右侧
    lcjCateR().then((res)=>{
      this.shop = res
                let {id}  =  this.catelist[0]
                // console.log(id)
                this.lcjcate = this.shop.filter((item)=>{
                  return item.categoryId == id
                })
                // console.log( this.data.lbj_arr)
                this.setData({
                  shop:this.shop,
                  lcjcate :this.lcjcate 
                })
    })
    // this.lcj_cateLeft()
  },


  //关闭弹出层
  onClose() {
    this.setData({ show: false });
  },

// 点击左侧列表对应右侧商品
  lcj_cateLeft(e){
      console.log(e)
      let {id} = e.currentTarget.dataset
      this.data.lcjcate = this.data.shop.filter((item)=>{
        return item.categoryId == id
      })
      this.setData({
          lcjcate:this.data.lcjcate
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