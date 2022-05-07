// pages/category/category.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showData: [],
    categoryTitleStyle: "",
    categoryList: [],
  },

  changeCatrgory(e) {
    db.collection("category").where({
      TopID: e.currentTarget.dataset.id
    }).get().then(res => {
      this.setData({
        categoryTitleStyle: e.currentTarget.dataset.id,
        showData: res.data
      })
    })
  },
  routerTo(e) {
    wx.navigateTo({
      url: "../categoryContents/index"
    }).then(res => {
      res.eventChannel.emit("acceptDataFromOpenerPage", {
        // 获得点击分类的name
        name: this.data.showData[e.currentTarget.dataset.index].name,
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var firstID = ""
    db.collection("category").where({
      TopID: null
    }).get().then(res => {
      firstID = res.data[0]._id
      this.setData({
        categoryTitleStyle: firstID,
        categoryList: res.data
      })
      db.collection("category").where({
        TopID: firstID
      }).get().then(res => {
        this.setData({
          showData: res.data
        })
      })
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