// components/homeComponent/homeComponent.js
Component({

  properties: {
    showData: Array,
    boxTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    //暂时没有内部数据，如果有需要通过setData函数修改值
  },
  /**
   * 组件的方法列表
   */
  methods: {
    routerTo(e) {
      wx.navigateTo({
        url: "../categoryContents/index"
      }).then(res => {
        res.eventChannel.emit("acceptDataFromOpenerPage", {
          // 获得点击分类的name
          name: e.currentTarget.dataset.title
        })
      })
    },
    routerToProduct(){
      wx.navigateTo({
        url: "../product/index"
      })
    }
  }
})