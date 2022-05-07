// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:["全部","国产精品","进口精品","网红零食","礼盒专区","送货上门","补差价0.1"],
    num:0,
    right:[
      {img:"../../images/imgs/r1.png",tit:"【榴莲肉】特级泰国金枕榴莲...",price:"29.5",oldprice:"￥48"},
      {img:"../../images/imgs/r2.png",tit:"【鲁艺金典蛋糕】10元三个！...",price:"10",oldprice:"￥16"},
      {img:"../../images/imgs/r3.png",tit:"【海南香菠萝】8元一个！",price:"8",oldprice:"￥15"},
      {img:"../../images/imgs/r4.png",tit:"【澳洲无籽红提】21.8一斤...",price:"21.8",oldprice:"￥32"},
      {img:"../../images/imgs/r5.png",tit:"【美国手指黑提】19.8一斤...",price:"39.6",oldprice:"￥48"},
      {img:"../../images/imgs/r6.jpg",tit:"【轩妈蛋黄酥】32一盒，非...",price:"32",oldprice:"￥39"},
    ],
    arr:[]
  },

  save(event){  //点击加入购物车
    //event.currentTarget.dataset
    let date;
    wx.getStorage({
      key:"cart",
      success(res){
        date=res.data;
      }
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
console.log("商品页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
console.log("商品页面卸载")
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