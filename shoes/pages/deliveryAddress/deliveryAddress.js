// pages/deliveryAddress/deliveryAddress.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    region: ['请选择', '请选择', '请选择'],
    customItem: '请选择',
    checked:true
  },

  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onChange(){
    var ischekd = !this.data.checked
    this.setData({
      checked: ischekd
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = ""
    if (options.name == "add") {
      title = "新增收货地址"
    } else if (options.name == "edit") {
      title = "编辑收货地址"
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  showPageMeta() {
    var isShow = !this.data.isShow
    console.log(isShow)
    this.setData({
      isShow: isShow
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