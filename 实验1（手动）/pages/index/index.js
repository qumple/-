Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'images/logo.png',
    name:'Welcome'
  },
  
  getMyInfo:function(e) {
    let info = e.detail.userInfo;
    this.setData({
        src:info.avatarUrl,
        name:info.nickName
    })
  },
})
