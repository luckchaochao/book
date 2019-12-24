// Component/slideLR/slideLR.js
let app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    slideLRdata: Array
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    qqq() {
      console.log("slideLR组件")
      console.log(app.globalData.classify)
      console.log(this.properties.slideLRdata)
      console.log("slideLR组件")
    }
  }
})