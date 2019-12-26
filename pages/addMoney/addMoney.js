// pages/addMoney/addMoney.js
let app = getApp();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		focusType: true,
		addMoneyNumber: null
	},
	setAddMoneyNumber(event) {
		this.setData({
			addMoneyNumber: event.detail.value
		})
	},
	addMoney() {
		let tmpThis = this
		if (this.data.addMoneyNumber > 0) {
			wx.showToast({
				title: '充值成功',
				icon: 'success',
				duration: 2000,
				success: function () {
					let tmpNumber = parseFloat(app.globalData.userInfo[0].moneys)
					let tmpAddNumber = parseFloat(tmpThis.data.addMoneyNumber)

					console.log("充值前的钱" + app.globalData.userInfo[0].moneys)

					app.globalData.userInfo[0].moneys = tmpNumber + tmpAddNumber

					console.log("充值后的钱" + app.globalData.userInfo[0].moneys)

					
					wx.switchTab({
						url: '../home/home'
					})
					// wx.reLaunch({
					// 	url: '../home/home'
					// })
					// wx.redirectTo({
					// 	url: '../home/home'
					// })
					// wx.navigateTo({
					// 	url: '../home/home'

					// })
					// wx.navigateBack({
					// 	delta: 2
					// })
				}
			})
		} else {
			this.setData({
				addMoneyNumber: ""
			})
			wx.showToast({
				title: '请输入正确的金额',
				icon: 'none',
				duration: 2000
			})
		}
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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