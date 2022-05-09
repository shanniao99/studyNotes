// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:["全部","国产精品","进口精品","网红零食","礼盒专区","送货上门","补差价0.1"],
    num:0,
    right:[
      {img:"../../images/imgs/1.png",tit:"【榴莲肉】特级泰国金枕榴莲...",price:"29.5",oldprice:"￥48",id:"liulian"},
      {img:"../../images/imgs/r1.png",tit:"【鲁艺金典蛋糕】10元三个！...",price:"10",oldprice:"￥16",id:"cake"},
      {img:"../../images/imgs/2.png",tit:"【海南香菠萝】8元一个！",price:"8",oldprice:"￥15",id:"boluo"},
      {img:"../../images/imgs/3.png",tit:"【澳洲无籽红提】21.8一斤...",price:"21.8",oldprice:"￥32",id:"redti"},
      {img:"../../images/imgs/r2.png",tit:"【美国手指黑提】19.8一斤...",price:"39.6",oldprice:"￥48",id:"blackti"},
      {img:"../../images/imgs/r3.jpg",tit:"【轩妈蛋黄酥】32一盒，非...",price:"32",oldprice:"￥39",id:"eggsu"},
    ],
    arr:[]
  },
  //tab选项切换效果
  check(event){
    console.log(event)
    this.setData({
      num:event.currentTarget.dataset.id
    })
    
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
    if(date){
      this.data.arr=date
    }
    let i=event.currentTarget.dataset.index;
    let img=this.data.right[i].img;  //水果图片
    let txt=this.data.right[i].tit;   //标题
    let price=this.data.right[i].price; //价格
    let num=1;   //数量，默认为1
    let id=this.data.right[i].id;
    let obj={
      img,txt,price,num,id
    }
    let res=this.data.arr.findIndex(v=>v.id==id);  //findIndex遍历判断是否有重复数据，返回索引值
    if(res>=0){
      this.data.arr[res].num++;
    }else{
      this.data.arr.push(obj)
    }
    //数据存入本地存储中
    wx.setStorage({
      key:"cart",
      data:this.data.arr,
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