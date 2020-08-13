const WXAPI = require('apifm-wxapi')
WXAPI.init('jbn1995')




async function register(page) {
  let _this = this;
  wx.login({
    success: function (res) {
      console.log(res)
      let code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
      // 获取用户信息
      wx.getUserInfo({
        success: function (res) {
          wx.setStorageSync('user', res)
          let iv = res.iv;
          let encryptedData = res.encryptedData;
          let referrer = '' // 推荐人
          let referrer_storge = wx.getStorageSync('referrer');
          if (referrer_storge) {
            referrer = referrer_storge;
          }
          // 下面开始调用注册接口
          WXAPI.register_complex({
            code: code,
            encryptedData: encryptedData,
            iv: iv,
            referrer: referrer
          }).then(function (res) {
            console.log(_this.login())
            _this.login(page);
          })
        }
      })
    }
  })
}
async function login(page) {
  const _this = this
  console.log(page)
  
  wx.login({
    success: function (res) {
      WXAPI.login_wx(res.code).then(function (res) {
        if (res.code == 10000) {
          // 去注册
          
          // _this.register(page)
          return;
        }
        if (res.code != 0) {
          // 登录错误
          wx.showModal({
            title: '无法登录',
            content: res.msg,
            showCancel: false
          })
          return;
        }
        wx.setStorageSync('token', res.data.token)
        wx.setStorageSync('uid', res.data.uid)
        if (page) {
          let out =false
          page.onShow(out)
        }
      })
    }
  })
}



async function checkHasLogined() {
  // 判断能能否获取到token值
  const token = wx.getStorageSync('token')
  if (!token) {
    // 如果获取不到就返回false
    return false
  }
  // 如果获取到就返回true
  return true
}

module.exports = {
  login: login,
  register: register,
  checkHasLogined: checkHasLogined
}
