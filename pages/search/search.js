// pages/search/search.js
const { jjbnSearch,jbnAddCart }=require("../../http/jbn_search.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchNav:[
      "综合","新品","销量","价格"
    ],
    activeIndex:0,
    jbn_search:true,
    jbn_show:false,
    jbnSearchList:[],
    num:1
  },
  // 返回上一个页面
  onClickLeft() {
    wx.navigateBack({
      delta: 1
    })
  },
  // 改变下标
  changeActive(e){
    this.setData({
        activeIndex: e.currentTarget.dataset.index
    })
    if(this.data.activeIndex==3){
      console.log(1)
      let searchList=this.data.jbnSearchList.sort((a,b)=>{
        return a.minPrice-b.minPrice
      })
      this.setData({
        jbnSearchList:searchList
      })
    } else if (this.data.activeIndex == 0){

    }
  },
  jbnSearch(e){
    let k = e.detail
    jjbnSearch().then((res) => {
      let data = res.filter((item) => {
        return item.name.includes(k)
      })
      this.setData({
        jbnSearchList: data
      })
      console.log(this.data.jbnSearchList)
    })
  },
  // 改变页面布局
  change(){
    this.setData({
      jbn_search:false,
      jbn_show:true
    })
  },
  change1(){
    this.setData({
      jbn_search:true,
      jbn_show:false,
      jbnSearchList:[]
    })
  },
  // 点击商品进入商品详情页
  toCatexq(e){
    console.log(e)
    let { id } = e.currentTarget.dataset
    // console.log(id)
    wx.navigateTo({
      url:`/pages/catexq/catexq?id=${id}`,
    })
  },
  // 点击购物车图标将商品加入购物车
  addCart(e){
    wx.showToast({
      title: '加入成功',
    })
    let id = e.currentTarget.dataset.id
    let token=wx.getStorageSync("token")
    let num=1
    // jbnAddCart(id,token,num).then((res)=>{
        
    // })
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