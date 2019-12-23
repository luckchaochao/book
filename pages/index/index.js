// pages/index/index.js
let app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let tmpThis = this
    // wx.request({
    //   url: 'https://wujunhui.xyz/getfenleilist',
    //   method: "get",
    //   data: {

    //   },
    //   success: function (res) {
    //     tmpThis.setData({
    //       items: res.data
    //     })
    //     // console.log(tmpThis.data.items)
    //   }
    // })
    console.log(1)
    console.log(app.globalData.classify)
    this.setData({
      items: app.globalData.classify
    })
    console.log(this.data.items)
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