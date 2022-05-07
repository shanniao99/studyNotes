Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [{
      url: "../../images/banner_1.png"
    }, {
      url: "../../images/banner_1.png"
    }, {
      url: "../../images/banner_1.png"
    }],
    goodsClassify: [{
      iconUrl: "../../images/classify_icon/1.png",
      name: "女鞋"
    }, {
      iconUrl: "../../images/classify_icon/2.png",
      name: "男鞋"
    }, {
      iconUrl: "../../images/classify_icon/3.png",
      name: "真皮包"
    }, {
      iconUrl: "../../images/classify_icon/4.png",
      name: "女款包包"
    }, {
      iconUrl: "../../images/classify_icon/5.png",
      name: "皮带"
    }, {
      iconUrl: "../../images/classify_icon/6.png",
      name: "饰品"
    }, {
      iconUrl: "../../images/classify_icon/7.png",
      name: "女款凉拖"
    }, {
      iconUrl: "../../images/classify_icon/8.png",
      name: "男款凉拖"
    }],
    jingpinList: [{
      imgUrl: "../../images/jingpin/1.png",
      title: "2022春季新款男鞋",
      price: "249"
    }, {
      imgUrl: "../../images/jingpin/2.png",
      title: "2022春季新款女鞋",
      price: "169"
    }, {
      imgUrl: "../../images/jingpin/3.png",
      title: "2022春季新款女包",
      price: "269"
    }, {
      imgUrl: "../../images/jingpin/1.png",
      title: "2022春季新款男鞋2022春季新款男鞋",
      price: "249"
    }, {
      imgUrl: "../../images/jingpin/2.png",
      title: "2022春季新款女鞋2022春季新款女鞋",
      price: "169"
    }, {
      imgUrl: "../../images/jingpin/3.png",
      title: "2022春季新款女包2022春季新款女包",
      price: "269"
    }, ],
    productList: [{
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/1.png",
      price: "349",
      discountPrice: "169"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/2.png",
      price: "289",
      discountPrice: "139"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/3.png",
      price: "439",
      discountPrice: "259"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/4.png",
      price: "539",
      discountPrice: "349"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/1.png",
      price: "349",
      discountPrice: "169"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/2.png",
      price: "289",
      discountPrice: "139"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/3.png",
      price: "439",
      discountPrice: "259"
    }, {
      title: "左右鞋垫春夏爆款福利",
      imgUrl: "../../images/products/4.png",
      price: "539",
      discountPrice: "349"
    }, ]
  },
  routerTo(e) {
    wx.navigateTo({
      url: "../categoryContents/index"
    }).then(res => {
      res.eventChannel.emit("acceptDataFromOpenerPage", {
        // 获得点击分类的name
        name: this.data.goodsClassify[e.currentTarget.dataset.index].name,
      })
    })
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
    wx.setNavigationBarTitle({
      title: "左右鞋包"
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