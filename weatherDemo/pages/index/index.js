Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区'],
    location:101220306,
    now:{
        tmp:0,
        cond_txt:"未知",
        icon:'999',
        hum:0,
        pres:0,
        vis:0,
        wind_dir:0,
        wind_spd:0,
        wind_sc:0
    }
  },
  /**
   * 更新省、市、区信息
   */
  regionChange:function(e){
    this.setData({region:e.detail.value})
    this.getCityId();
    this.getWeather();
  },
  /**
   * 获取城市ID
   */
  getCityId:function(){
      var that = this;
      wx.request({
        url: 'https://geoapi.qweather.com/v2/city/lookup',
        data:{
            location:that.data.region[2],
            key:'ab51c49c1edb429a9037e59031dd6109'
        },

        success: (res) =>{
          this.setData({location:res.data.location[0].id});
          //console.log(res.data);
        }
      })
  },
/**
   * 获取实况天气数据
   */
  getWeather:function(){
    var that = this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data:{
          location:that.data.location,
          key:'ab51c49c1edb429a9037e59031dd6109'
      },
      success: function(res){
        that.setData({now:res.data.now});
        //console.log(res.data);
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    this.getCityId();  
    this.getWeather();
  },

})