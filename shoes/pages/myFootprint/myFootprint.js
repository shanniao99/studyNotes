// pages/myFootprint/myFootprint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekDayArr: ['日', '一', '二', '三', '四', '五', '六'],
    weekDayList: [],
    mouthDayList: [],
    nowYear: Number,
    nowMouth: Number,
    nowWeek: Number,
    nowDay: Number,
    isShow: "little",
    mouthFirstWeekday: Number,
    mouthLastDay: Number
  },

  changeBig() {
    this.setData({
      isShow: "big"
    })
  },
  changeLittle() {
    this.setData({
      isShow: "little"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    var week = date.getDay()
    var year = date.getFullYear()
    var mouth = date.getMonth() + 1
    var day = date.getDate()
    // console.log(week, year, mouth, day)
    var mouthLastDay = [31, ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 29 : 28,
      31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    // console.log(mouthLastDay[mouth])
    var d = new Date(year, date.getMonth(), 1)
    var mouthFirstWeekday = d.getDay()
    // console.log(mouthFirstWeekday)
    var weekFirstDay = day - week
    var weekList = []
    for (let i = weekFirstDay; i < weekFirstDay + 7; i++) {
      weekList.push(i)
    }
    // console.log(weekList)
    var mouthList = []
    if (mouthFirstWeekday == 7) {
      mouthFirstWeekday = 0
    }
    for (let i = 7; i > 7 - mouthFirstWeekday; i--) {
      mouthList.push(mouthLastDay[mouth - 2] - mouthFirstWeekday + 1)
    }
    for (let j = 1; j <= mouthLastDay[mouth - 1]; j++) {
      mouthList.push(j)
    }
    // console.log(mouthLastDay[mouth - 1] % 7)
    for (let y = 1; y < 7 - (mouthLastDay[mouth - 1] % 7); y++) {
      mouthList.push(y)
    }

    // console.log(mouthList)
    this.setData({
      nowDay: day,
      nowWeek: week,
      nowMouth: mouth,
      nowYear: year,
      weekDayList: weekList,
      mouthDayList: mouthList,
      mouthFirstWeekday: mouthFirstWeekday,
      mouthLastDay: mouthLastDay[mouth]
    })

  },

  lastMouth(){},
  nextMouth(){},

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