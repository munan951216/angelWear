const {
  getSeconds,getKan,getGoodList,getBaopin,getTuan
} = require('../../http/lp_api')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  ready() {
    getSeconds().then((res)=>{
        this.setData({
          bargain:res
        })
    }),
    getKan().then((res)=>{
      this.setData({
         kanjia:res
      })
    }),
    getGoodList().then((res)=>{
      this.setData({
          list:res
      })
    }),
     getBaopin().then((res)=>{
       this.setData({
         hotgood:res
       })
     }),
     getTuan().then((res)=>{
        this.setData({
          tuan:res
        })
     })
  },
  /**
   * 组件的初始数据
   */
  data: {
    bargain: [],
    kanjia:[],
    list:[],
    hotgood:[],
    tuan:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toGoodDetail(e){
         let id = e.currentTarget.dataset.id
         wx.navigateTo({
           url: `/pages/catexq/catexq?id=${id}`,
         })
    },
    toGOOd(e){
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/catexq/catexq?id=${id}`,
      })
    },
    toDetailGood(e){
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/catexq/catexq?id=${id}`,
      })
    }
  }
})