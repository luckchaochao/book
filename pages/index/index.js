// pages/index/index.js
let app = new getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyNav: {
      title: "分类排行",
      navName: "查看全部 >",
      typeUrl: "/pages/classify/classify",
      navUrl:"/pages/allClassify/allClassify"
    },
    authorNav: {
      title: "作者排行",
      navName: "查看全部 >",
      navUrl: "/pages/author/author"
    },
    bookListNav: {
      title: "新发布",
      navName: "查看全部 >",
      navUrl: "/pages/logs/logs?title=navigate"
    },
    bookLineNav: {
      title: "热销榜",
      navName: "查看全部 >",
      navUrl: "/pages/logs/logs?title=navigate"
    },
    hotSeek: [{
      title: "2018排行榜",
      color: "#E24A7B"
    }, {
      title: "职场热门",
      color: "#59B080"
    }, {
      title: "都市言情",
      color: "#EC575E"
    }, {
      title: "哈弗大学经济管理类",
      color: "#8F5FE6"
    }, {
      title: "领导才能",
      color: "#DED658"
    }, ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let tmpThis = this
    app.getClassify().then(res => {
      tmpThis.setData({
        classify: app.globalData.classify
      })
    });
    app.getAuthor().then(res => {
      tmpThis.setData({
        author: app.globalData.author
      })
    });
    app.getBookList().then(res => {
      tmpThis.setData({
        bookList: app.globalData.bookList.slice(0, 6)
      })
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})