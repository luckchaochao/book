//app.js

App({
  onLaunch: function() {},

  globalData: {},

  getClassify() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getfenleilist',
        method: "get",
        data: {},
        success: function(res) {
          that.globalData.classify = res.data
          resolve(res.data)
        }
      });
    })
  },
  getAuthor() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getwriters',
        method: "get",
        data: {},
        success: function(res) {
          that.globalData.author = res.data
          resolve(res.data)
        }
      });
    })
  },
  getBookList() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getbooks',
        method: "get",
        data: {},
        success: function(res) {
          that.globalData.bookList = res.data
          resolve(res.data)
        }
      });
    })
  },
  login() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
				url: 'https://wujunhui.xyz/personimages',
        method: "get",
        data: {
          "yourtelphone": "15565737361"
        },
        success: function(res) {
          that.globalData.userInfo = res.data
          resolve(res.data)
        }
      });
    })
  },



})