// pages/my/my.js
const common = require("../../utils/common")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    num: 0
  },

  getMyInfo:function(e){
      wx.getUserProfile({
        desc: 'desc',
        success:(res)=>{
          console.log(res)
          this.setData({
            isLogin:true,
            src:res.userInfo.avatarUrl,
            nickname:res.userInfo.nickName
        })
      }
    })
    this.getmyFavourites();
  },
  getmyFavourites:function(){
    let info = wx.getStorageInfoSync();
    console.log(info)
    let keys = info.keys;
    let num = keys.length-1;
    let myList = []
    for(var i = 0;i<num;i++){
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    this.setData({
      newsList:myList,
      num:num
    })
  },
  goToDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
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
    if(this.data.isLogin){
      this.getmyFavourites();
    }
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