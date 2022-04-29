// pages/components/component/view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:"string"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"组件传值(子传父)"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    passValue(){
      //创建自定义事件传值到父组件
      this.triggerEvent("takeOver",this.data.msg);
    }
  }
})
