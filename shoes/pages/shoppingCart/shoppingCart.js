// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheck: false, //是否全选
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    totalPrice: 0, //总金额
    startX: 0, // 开始X坐标
    startY: 0, // 开始Y坐标
    shoppingCartData: [{
      title: "左右鞋店春夏爆款凉拖",
      imgUrl: "../../images/shoppingCart/1.jpg",
      color: "粉",
      size: 38,
      price: 149,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款福利",
      imgUrl: "../../images/shoppingCart/2.jpg",
      color: "黑",
      size: 35,
      price: 169,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款凉拖",
      imgUrl: "../../images/shoppingCart/1.jpg",
      color: "粉",
      size: 38,
      price: 149,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款福利",
      imgUrl: "../../images/shoppingCart/2.jpg",
      color: "黑",
      size: 35,
      price: 169,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款凉拖",
      imgUrl: "../../images/shoppingCart/1.jpg",
      color: "粉",
      size: 38,
      price: 149,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款福利",
      imgUrl: "../../images/shoppingCart/2.jpg",
      color: "黑",
      size: 35,
      price: 169,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款凉拖",
      imgUrl: "../../images/shoppingCart/1.jpg",
      color: "粉",
      size: 38,
      price: 149,
      num: 1,
      selected: false
    }, {
      title: "左右鞋店春夏爆款福利",
      imgUrl: "../../images/shoppingCart/2.jpg",
      color: "黑",
      size: 35,
      price: 169,
      num: 1,
      selected: false
    }, ]
  },

  //单选
  radioChange(e) {
    var total = 0
    var temp = this.data.shoppingCartData
    for (let i = 0; i < temp.length; i++) {
      temp[i].selected = false
    }
    e.detail.value.forEach(index => {
      total = total + this.data.shoppingCartData[index].price * this.data.shoppingCartData[index].num
      temp[index].selected = true
    });
    if (e.detail.value.length == this.data.shoppingCartData.length) {
      this.setData({
        isCheck: true,
      })
    } else {
      this.setData({
        isCheck: false,
      })
    }
    this.setData({
      totalPrice: total,
      shoppingCartData: temp
    })
  },

  //全选
  changeCheck() {
    var temp = this.data.shoppingCartData
    var total = 0
    if (this.data.isCheck) {
      for (let i = 0; i < temp.length; i++) {
        temp[i].selected = false
      }
    } else {
      for (let i = 0; i < temp.length; i++) {
        temp[i].selected = true
        total = total + temp[i].price * temp[i].num
      }
    }
    this.setData({
      isCheck: !this.data.isCheck,
      shoppingCartData: temp,
      totalPrice: total
    })
  },

  /* 点击减号 */
  bindMinus: function (e) {
    var index = e.currentTarget.dataset.index;
    var num = this.data.shoppingCartData[index].num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    var temp = this.data.shoppingCartData
    temp[index].num = num
    // console.log(num,1)
    var total = this.data.totalPrice
    if (temp[index].selected) {
      total = 0
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].selected) {
          total = total + temp[i].price * temp[i].num
        }
      }
    }
    this.setData({
      shoppingCartData: temp,
      minusStatus: minusStatus,
      totalPrice: total
    });
  },
  /* 点击加号 */
  bindPlus: function (e) {
    var index = e.currentTarget.dataset.index;
    var num = this.data.shoppingCartData[index].num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    var temp = this.data.shoppingCartData
    temp[index].num = num
    // console.log(num,2)
    var total = this.data.totalPrice
    if (temp[index].selected) {
      total = 0
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].selected) {
          total = total + temp[i].price * temp[i].num
        }
      }
    }
    this.setData({
      shoppingCartData: temp,
      minusStatus: minusStatus,
      totalPrice: total
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var index = e.currentTarget.dataset.index;
    var temp = this.data.shoppingCartData
    console.log(e)
    if (e.detail.value != 0) {
      var num = e.detail.value;
      // console.log(num,3)
    } else {
      var num = temp[index].num
      // console.log(num,4)
    }
    // console.log(num,5)
    // 将数值与状态写回
    temp[index].num = num
    var total = this.data.totalPrice
    if (temp[index].selected) {
      total = 0
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].selected) {
          total = total + temp[i].price * temp[i].num
        }
      }
    }
    this.setData({
      shoppingCartData: temp,
      totalPrice: total
    });
  },

  //手指开始点击
  touchStart(e) {
    let that = this;
    //开始触摸时 重置所有删除
    that.data.shoppingCartData.forEach(function (v, i) {
      if (v.isTouchMove) v.isTouchMove = false; // 只操作为true的
    })
    // 记录手指触摸开始坐标
    that.setData({
      startX: e.changedTouches[0].clientX, // 开始X坐标
      startY: e.changedTouches[0].clientY, // 开始Y坐标
      shoppingCartData: that.data.shoppingCartData
    })
  },

  //手指开始移动
  touchMove(e) {
    let that = this,
      index = e.currentTarget.dataset.index, // 当前下标
      startX = that.data.startX, // 开始X坐标
      startY = that.data.startY, // 开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, // 滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, // 滑动变化坐标
      // 获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    // 判断滑动角度
    that.data.shoppingCartData.forEach(function (v, i) {
      v.isTouchMove = false
      // 滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        // 右滑
        if (touchMoveX > startX)
          v.isTouchMove = false
        // 左滑
        else
          v.isTouchMove = true
      }
    })
    // 更新数据
    that.setData({
      shoppingCartData: that.data.shoppingCartData
    })
  },

  // 计算滑动角度
  angle: function (start, end) {
    let that = this,
      _X = end.X - start.X,
      _Y = end.Y - start.Y;
    // 返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  // 删除
  delList: function (e) {
    let that = this,
      index = e.currentTarget.dataset.index; // 当前下标
    var total = that.data.totalPrice
    if (that.data.shoppingCartData[index].selected) {
      // 切割当前下标元素，更新数据
      that.data.shoppingCartData.splice(index, 1);
      total = 0
      for (let i = 0; i < that.data.shoppingCartData.length; i++) {
        if (that.data.shoppingCartData[i].selected) {
          total = total + that.data.shoppingCartData[i].price * that.data.shoppingCartData[i].num
        }
      }
    } else {
      // 切割当前下标元素，更新数据
      that.data.shoppingCartData.splice(index, 1);
    }
    that.setData({
      shoppingCartData: that.data.shoppingCartData,
      totalPrice: total
    })
  },

  routerToPayed(){
    wx.navigateTo({
      url: '../payed/payed',
    })
  },
  routerToProduct(){
    wx.navigateTo({
      url: '../product/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   **/
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "购物车"
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