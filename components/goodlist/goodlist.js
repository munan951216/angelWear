// components/goodlist/goodlist.js
const {
  getGood
} = require('../../http/lp_api')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
 
  ready() {
    getGood().then((res)=>{
      // console.log(res)
      this.setData({
        good:res
      })
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    good: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toCate(e){
      console.log(e)
     let id = e.currentTarget.dataset.id
      wx.reLaunch({
        url:`/pages/cate/cate?id=${id}`
      })
    },
  }
})