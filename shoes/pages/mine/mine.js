// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderProcessList: [{
      title: "待付款",
      iconUrl: "../../images/fukuan.png"
    }, {
      title: "待发货",
      iconUrl: "../../images/fahuo.png"
    }, {
      title: "待收货",
      iconUrl: "../../images/shouhuo.png"
    }, {
      title: "已完成",
      iconUrl: "../../images/wancheng.png"
    }, ],
    routerList: [{
      title: "我的消息",
      iconUrl: "../../images/mine_icon/xiaoxi.png"
    }, {
      title: "我的收藏",
      iconUrl: "../../images/mine_icon/shoucang.png"
    }, {
      title: "我的地址",
      iconUrl: "../../images/mine_icon/dizhi.png"
    }, {
      title: "我的足迹",
      iconUrl: "../../images/mine_icon/zuji.png"
    }, {
      title: "我的卡券",
      iconUrl: "../../images/mine_icon/kaquan.png"
    }, {
      title: "我的积分",
      iconUrl: "../../images/mine_icon/jifen.png"
    }, {
      title: "在线客服",
      iconUrl: "../../images/mine_icon/kefu.png"
    }, ]
  },

  routerToSign() {
    wx.navigateTo({
      url: '../sign/sign',
    })
  },
  routerToMyOrder(e) {
    var index = e.currentTarget.dataset.index
    if (index != undefined) {
      wx.navigateTo({
        url: '../myOrder/myOrder?index= ' + index,
      })
    } else {
      wx.navigateTo({
        url: '../myOrder/myOrder',
      })
    }
  },
  routerToOther(e){
    var routerUrl = "";
    switch(e.currentTarget.dataset.index){
      case 0:
        routerUrl = "../myMessage/myMessage"
        break;
      case 1:
        routerUrl = "../myCollection/myCollection"
        break;
      case 2:
        routerUrl = "../myAddress/myAddress"
        break;
      case 3:
        routerUrl = "../myFootprint/myFootprint"
        break;
      case 4:
        console.log(4);
        break;
      case 5:
        console.log(5);
        break;
      case 6:
        console.log(6);
        break;
    }
    
    wx.navigateTo({
      url: routerUrl,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "我的"
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