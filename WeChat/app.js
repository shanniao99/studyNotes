// app.js
// var get=getApp;  //获取小程序全局唯一的APP实例
// console.log(get);
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){  //
    console.log("小程序显示或切换前台")
  },
  onHide(){
    console.log("隐藏，监听小程序切换后台")
  },
  globalData: {
    userInfo: null
  }
})
