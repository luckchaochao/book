//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })



    let tmpThis = this
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      method: "get",
      data: {},
      success: function (res) {
        tmpThis.globalData.classify = res.data
      }
    });


    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      method: "get",
      data: {},
      success: function (res) {
        tmpThis.globalData.author = res.data
      }
    });

    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      method: "get",
      data: {},
      success: function (res) {
        tmpThis.globalData.bookList = res.data
      }
    });

    // wx.request({
    //   url: 'https://wujunhui.xyz/gethostser',
    //   method: "get",
    //   data: {},
    //   success: function (res) {
    //     tmpThis.globalData.hotSeek = res.data
    //   }
    // });









  },
  globalData: {
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
    userInfo: null,
    classify: {},
    author: {}
  }
})