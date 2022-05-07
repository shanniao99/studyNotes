// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ["全部", "待付款", "待发货", "待收货", "已完成", ],
    navStyle: 0,
    orderList: [{
      orderNumber: 6029342543633,
      orderState: "待付款",
      orderImage: "../../images/my_order/1.jpg",
      orderTitle: "左右鞋店春夏爆款凉拖",
      orderSize: 35,
      orderColor: "粉",
      orderPrice: "149",
      orderProductNum:1,
      orderBtn:"去支付"
    }, {
      orderNumber: 6029342543633,
      orderState: "待发货",
      orderImage: "../../images/my_order/2.jpg",
      orderTitle: "左右鞋店春夏爆款凉拖",
      orderSize: 35,
      orderColor: "粉",
      orderPrice: "149",
      orderProductNum:1,
      orderBtn:"提醒店家"
    }, {
      orderNumber: 6029476239716,
      orderState: "待收货",
      orderImage: "../../images/my_order/3.jpg",
      orderTitle: "左右鞋店春夏爆款凉拖",
      orderSize: 35,
      orderColor: "粉",
      orderPrice: "149",
      orderProductNum:1,
      orderBtn:"查看物流"
    }, {
      orderNumber: 6029476239716,
      orderState: "已完成",
      orderImage: "../../images/my_order/4.jpg",
      orderTitle: "左右鞋店春夏爆款凉拖",
      orderSize: 35,
      orderColor: "粉",
      orderPrice: "149",
      orderProductNum:1,
      orderBtn:"查看订单"
    }, ],
  },

  changeNav(e){
    if(this.data.navStyle != e.currentTarget.dataset.index){
      this.setData({
        navStyle: e.currentTarget.dataset.index
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.index != undefined) {
      this.setData({
        navStyle: parseInt(options.index) + 1
      })
    }
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