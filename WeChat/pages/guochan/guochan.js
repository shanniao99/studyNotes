// pages/guochan/guochan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		list: [
			{ name: '热门', id: 0},
			{ name: '上衣女', id: 1},
			{ name: '上衣男', id: 2},
			{ name: 'T恤', id: 3},
			{ name: '短裙', id: 4},
			{ name: '长裙', id: 5},
			{ name: '连衣裙', id: 6},
			{ name: '夏季凉鞋', id: 7},
			{ name: '冬季短靴', id: 8},
			{ name: '包包饰品', id: 9},
			{ name: '休闲裤', id: 10},
			{ name: '西装', id: 11},
		],
		i: 0,
		id:null,
		top: 0,
		scrollTop: 0,
		page: 1,
		nomore: false,
		stopLoadingmoreTiem: false,
	},
	onLoad(){
		let _this = this;
        wx.getSystemInfo({
            success: function (res) {
                _this.setData({
                    allHeight: res.windowHeight * 750 / res.windowWidth
                })
            }
        })
	},
	clicklf(e){
		let _this = this,
			i = e.currentTarget.dataset.id,
            lasttop = parseInt(_this.data.lasttop),
            scrollTop = parseInt(_this.data.scrollTop);
        this.setData({
            i: i,
            nomore: false,
            top: 0,
            id: i,
            cate_id: i
        })
        wx.createSelectorQuery().select('.cont .lf .item.active').boundingClientRect(rect => {
            _this.setData({
                conttop: rect.top + scrollTop + 12 - lasttop
            })
        }).exec()
        //在这里请求接口获取数据
    },
    viewscroll(e){
        this.setData({
            scrollTop: e.detail.scrollTop
        })
	},
	onShow: function () {
        let _this = this,
            lasttop = _this.data.lasttop;
        wx.createSelectorQuery().select('.cont .active').boundingClientRect(rect => {
            // console.log(rect);
            lasttop = rect.top;
            _this.setData({
                lasttop: lasttop
            })
        }).exec();
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})