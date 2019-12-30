// pages/book/book.js
var app = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// test:4.8
		hintType: 0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// console.log(options.bookName)
		options = "人类简史"
		let tmpThis = this
		app.getBookList().then(res => {
			for (const item of res) {
				if (item.bookname == options) {
					tmpThis.setData({
						book: item
					})
				}
			}
			// console.log(tmpThis.data.book)

		})
	},
	setHintType(e) {
		console.log("E:" + e.currentTarget.dataset.hinttype)
		this.setData({
			hintType: e.currentTarget.dataset.hinttype
		})
		console.log("D:" + this.data.hintType)
	},
	fxBook() {
		console.log(666)
		// wx.showShareMenu({
		// 	withShareTicket: true
		// })
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
	onShareAppMessage: function (e) {
		console.log(e.from)
		console.log(e.target)
		e.from="smile"
		e.target="给超超"

	}
})