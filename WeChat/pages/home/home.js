// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruit:[
      {img:"../../images/imgs/1.png",tit:"【榴莲肉】特级泰国金枕榴莲果肉  29.5半斤！多退少补！",mark:"￥",price:"29.5",oldprice:"￥48",look:"3880 浏览",buy:"856 人购买",id:"liulian"},
      {img:"../../images/imgs/2.png",tit:"【海南香菠萝】8元一个！",mark:"￥",price:"8",oldprice:"￥15",look:"1312 浏览",buy:"749 人购买",id:"boluo"},
      {img:"../../images/imgs/3.png",tit:"【特级大樱桃】40半斤！超级新鲜，口感巅峰！！",mark:"￥",price:"40",oldprice:"￥55",look:"1156 浏览",buy:"107 人购买",id:"yingtao"},
      {img:"../../images/imgs/4.jpg",tit:"【新西兰佳沛金果】9元一个27三个;最好吃的奇异果",mark:"￥",price:"27",oldprice:"￥36",look:"1758 浏览",buy:"531 人购买",id:"qiyiguo"},
    ],
    arr:[]

  },
  //加入购物车功能
  Tocar(event){
    //event.target.dataset当前元素传递的值
    //event.currentTarget.dataset底层元素传递的值
    //this.data  data中的数据
    let date;
    wx.getStorage({
      key:"cart",
      success(res){
        date=res.data;
      }
    })
    if(date){
      this.data.arr=date;
    }

    let i=event.target.dataset.index;
    let img=this.data.fruit[i].img;  //水果图片
    let txt=this.data.fruit[i].tit;   //标题
    let price=this.data.fruit[i].price; //价格
    let num=1;   //数量，默认为1
    let id=this.data.fruit[i].id
    let obj={
      img,txt,price,num,id
    }
    let res=this.data.arr.findIndex(v=>v.id==id);  //findIndex遍历判断是否有重复数据，返回索引值
    console.log(res)
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
    // console.log("隐藏首页页面")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("卸载首页页面")
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