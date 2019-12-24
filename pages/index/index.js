// pages/index/index.js
let app = new getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyNav:{
      title:"分类排行",
      navName:"查看全部 >",
      navUrl:"/pages/logs/logs?title=navigate"
    },
    authorNav:{
      title:"作者排行",
      navName:"查看全部 >",
      navUrl:"/pages/logs/logs?title=navigate"
    },
    bookListNav:{
      title:"新发布",
      navName:"查看全部 >",
      navUrl:"/pages/logs/logs?title=navigate"
    },
    bookLineNav:{
      title:"热销榜",
      navName:"查看全部 >",
      navUrl:"/pages/logs/logs?title=navigate"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// 将全局数classify据拿到
    this.setData({
      classify: app.globalData.classify,
      author: app.globalData.author,
      bookList: app.globalData.bookList.slice(0,6),
      hotSeek:app.globalData.hotSeek
    })
    console.log(this.data.bookList)
    // console.log(this.data.author)

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