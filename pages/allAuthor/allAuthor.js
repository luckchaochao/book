// pages/allAuthor/allAuthor.js
var app =  getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let tmpThis = this
		// app.getClassify().then(res => {
		//   tmpThis.setData({
		// 	classify: app.globalData.classify
		//   })
		// });
		app.getAuthor().then(res => {
		  tmpThis.setData({
			authorTop: app.globalData.author.slice(0,3),
			authorList: app.globalData.author.slice(3)
		  })
		  console.log(tmpThis.data.author)

		});
		// app.getBookList().then(res => {
		//   tmpThis.setData({
		// 	bookList: app.globalData.bookList.slice(0, 6)
		//   })
		// });
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