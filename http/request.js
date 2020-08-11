const {
  baseUrl
} = require('./env.js').prod
//封装ajax

const vipUrl = 'jbn1995'

module.exports = {

  request: function (url, method = "GET", data = {}, isSubDomain = true) {
    let fullUrl = `${baseUrl}/${isSubDomain ? vipUrl : ''}/${url}`;
    wx.showLoading({
      title: '玩命加载中',
    })

    return new Promise((resolve, reject) => {
      wx.request({
        url: fullUrl,
        method,
        data,
        header: {
          'Content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
          // console.log('res::',res)
          if (res.statusCode === 200 && res.data.code === 0) {
            resolve(res.data.data)
            wx.hideLoading()
          } else {
            wx.showToast({
              title: '接口有问题，请检查',
            })
            reject('接口有问题，请检查')
          }
        },
        fail(error) {
          wx.showToast({
            title: '数据接口有问题',
          })
          reject('数据接口有问题',error)

        }
      })


    })


  }



}