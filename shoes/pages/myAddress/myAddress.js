// pages/myAddress/myAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myAddressList: [{
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: true
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, {
      userName: "张三",
      userTelephone: "135659875689",
      userAddress: "江苏省 南京市 鼓楼区 华桥路街道 管家桥85号华容大厦1705",
      isDefault: false
    }, ],
  },

  radioChange(e) {
    var addressData = this.data.myAddressList
    addressData.forEach((val, index) => {
      if (val.isDefault == true) {
        if (e.currentTarget.dataset.index != index) {
          val.isDefault = false
          addressData[e.currentTarget.dataset.index].isDefault = true
        }
      }
    })
    this.setData({
      myAddressList: addressData
    })
  },
  routerToDeliveryAddress(e) {

    wx.navigateTo({
      url: '../deliveryAddress/deliveryAddress?name=' + e.currentTarget.dataset.name,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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