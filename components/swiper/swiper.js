// components/swiper/swiper.js
const {getBanner} = require('../../http/lp_api');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    banner: [] //l轮播
  },


  //请求轮播接口的数据
  ready() {
    getBanner().then((res)=>{
        this.setData({
          banner:res.slice(0, 3)
        })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})