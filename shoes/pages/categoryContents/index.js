// pages/categoryContents/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLists: ["综合", "最热", "新品", "价格", ],
    index_focus: 0,
    upArrowUrl: "../../images/upArrow.png",
    downArrowUrl: "../../images/downArrow.png",
    productData: [{
      title: "左右鞋垫春夏爆款福利169",
      imgUrl: "../../images/products/5.png",
      sell: "8",
      views: "529",
      price: "349",
      discountPrice: "169"
    }, {
      title: "左右鞋垫春夏爆款福利209",
      imgUrl: "../../images/products/6.png",
      sell: "30",
      views: "357",
      price: "429",
      discountPrice: "209"
    }, {
      title: "左右鞋垫春夏爆款福利200",
      imgUrl: "../../images/products/7.png",
      sell: "34",
      views: "357",
      price: "409",
      discountPrice: "200"
    }, {
      title: "左右鞋垫春夏爆款福利175",
      imgUrl: "../../images/products/8.png",
      sell: "25",
      views: "593",
      price: "369",
      discountPrice: "175"
    }, {
      title: "左右鞋垫春夏爆款福利169",
      imgUrl: "../../images/products/9.png",
      sell: "49",
      views: "436",
      price: "349",
      discountPrice: "169"
    }, {
      title: "左右鞋垫春夏爆款福利169",
      imgUrl: "../../images/products/5.png",
      sell: "8",
      views: "529",
      price: "349",
      discountPrice: "169"
    }, {
      title: "左右鞋垫春夏爆款福利209",
      imgUrl: "../../images/products/6.png",
      sell: "30",
      views: "357",
      price: "429",
      discountPrice: "209"
    }, {
      title: "左右鞋垫春夏爆款福利200",
      imgUrl: "../../images/products/7.png",
      sell: "34",
      views: "357",
      price: "409",
      discountPrice: "200"
    }, {
      title: "左右鞋垫春夏爆款福利175",
      imgUrl: "../../images/products/8.png",
      sell: "25",
      views: "593",
      price: "369",
      discountPrice: "175"
    }, {
      title: "左右鞋垫春夏爆款福利169",
      imgUrl: "../../images/products/9.png",
      sell: "49",
      views: "436",
      price: "349",
      discountPrice: "169"
    }, ],
  },
  changeNav(e) {
    this.setData({
      index_focus: e.currentTarget.dataset.index,
    })
    if (this.data.index_focus == 3) {
      if (this.data.upArrowUrl == "../../images/upArrow.png" && this.data.downArrowUrl == "../../images/downArrow.png") {

        this.setData({
          upArrowUrl: "../../images/upArrow_select.png",
        })
      } else if (this.data.upArrowUrl == "../../images/upArrow_select.png") {
        this.setData({
          upArrowUrl: "../../images/upArrow.png",
          downArrowUrl: "../../images/downArrow_select.png",
        })
      } else if (this.data.downArrowUrl == "../../images/downArrow_select.png") {
        this.setData({
          upArrowUrl: "../../images/upArrow_select.png",
          downArrowUrl: "../../images/downArrow.png",
        })
      }
    } else {
      this.setData({
        upArrowUrl: "../../images/upArrow.png",
        downArrowUrl: "../../images/downArrow.png",
      })
    }
  },
  routerToProduct(){
    wx.navigateTo({
      url: "../product/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', data => {
      wx.setNavigationBarTitle({
        title: data.name,
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