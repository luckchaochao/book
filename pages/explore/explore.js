// pages/explore/explore.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let tmpThis = this
    app.getBookList().then(res => {
      tmpThis.setData({
        bookList: app.globalData.bookList
      })
      console.log(tmpThis.data.bookList)
    });
    app.getAuthor().then(res => {
      tmpThis.setData({
        author: app.globalData.author.slice(5, 9)
      })
      // console.log(tmpThis.data.author)

    });
  },
  setPageType(event) {
    this.setData({
      pageType: event.currentTarget.dataset.value
    })
    // console.log(event.currentTarget.dataset.value)
		// console.log(this.data.pageType)
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