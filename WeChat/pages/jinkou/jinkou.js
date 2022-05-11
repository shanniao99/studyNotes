//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        navData:[
            {
                text: '广科'
            },
            {
                text: '广东理工'
            },
            {
                text: '广石油'
            },
            {
                text: '广东工商'
            },
            {
                text: '广州科技'
            },
            {
                text: '白云'
            },
            {
                text: '肇庆'
            },
            {
                text: '嘉应'
            },
            {
                text: '华商'
            }
        ],
        currentTab: 0,
        navScrollLeft: 0,
        yxlist:[
          {yxname:"11111",},
          {yxname:"22222",},
          {yxname:"33333",},
          {yxname:"44444",},
          {yxname:"55555",},
          {yxname:"66666",},
          {yxname:"77777",},
          {yxname:"88888",}
        ]
    },
    //事件处理函数
    onLoad: function () {
      var that = this;
      //向后端服务器发起请求数据
      
      wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  pixelRatio: res.pixelRatio,
                  windowHeight: res.windowHeight,
                  windowWidth: res.windowWidth
              })
          },
      })       
    },
    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    }
})