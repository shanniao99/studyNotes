// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPivot: false,
    weekStyle: Number,
    integralProgressDowm: 1000,
    integralProgressMiddle: 1980,
    integralProgressUp: 2000,
    integralProgress: Number,
    leftStyle: "100rpx",
    signDateList: [{
      week: "一",
      integral: "+5",
      isSign: true
    }, {
      week: "二",
      integral: "+5",
      isSign: true
    }, {
      week: "三",
      integral: "+5",
      isSign: false
    }, {
      week: "四",
      integral: "+5",
      isSign: true
    }, {
      week: "五",
      integral: "+5"
    }, {
      week: "六",
      integral: "+5"
    }, {
      week: "日",
      integral: "+10"
    }, ],
    taskContentList: [{
      title: "浏览20件宝贝",
      allNum: 20,
      progressNum: 3,
      awardIntegral: "奖励积分+200",
      isOver: false
    }, {
      title: "收藏10件宝贝",
      allNum: 10,
      progressNum: 0,
      awardIntegral: "奖励积分+100",
      isOver: false
    }, {
      title: "收藏10件宝贝",
      allNum: 10,
      progressNum: 0,
      awardIntegral: "奖励积分+100",
      isOver: false
    }, {
      title: "购买1件宝贝",
      allNum: 1,
      progressNum: 1,
      awardIntegral: "奖励积分+500",
      isOver: true
    }, ],
  },

  routerToHome(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //得到当日星期
    var date = new Date()
    var week = date.getDay()
    this.setData({
      weekStyle: week
    })
    //计算积分进度
    var progress = (this.data.integralProgressMiddle - this.data.integralProgressDowm) / (this.data.integralProgressUp - this.data.integralProgressDowm) * 100
    if (progress > 20 && progress < 80) {
      var computeLeft = progress * 630 / 100 - 25 + "rpx"
      this.setData({
        leftStyle: computeLeft
      })
    } else if (progress > 80) {
      this.setData({
        leftStyle: "480rpx"
      })
    }
    this.setData({
      integralProgress: progress
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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