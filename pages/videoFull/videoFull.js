// pages/videoFull/videoFull.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受视频地址
    this.setData({
      src:options.src
    })
  },
  onShow(){
    this.videoContext = wx.createVideoContext('myVideo')
    // 全屏播放
    this.videoContext.requestFullScreen()
    var res = wx.getSystemInfoSync();
    //iphone x下隐藏状态栏，仅对IPHONE X生效
    if (res.model.search('iPhone X') != -1) {
      this.videoContext.hideStatusBar();
    }
  },
  // 页面卸载-释放video上下文
  onUnload(){
    this.videoContext.pause();
    this.videoContext.exitFullScreen();
    this.videoContext=null;
  },
  // 监听全屏事件
  videofullchange: function (e) {
    var screen = e.detail;
    this.fullChange(screen.fullScreen);
  },
  // 关闭事件触发
  bind_close_video() {
    this.fullChange(false);
  },
  //退出全屏则返回上一页
  fullChange(fullScreen){
    if (fullScreen == false) {
      this.videoContext.pause();
      wx.navigateBack({
        delta: 1
      })
    }
  },
  //监听播放完，跳到第一帧
  bindended(){
    this.setData({
      playEnd:true
    })
    this.videoContext.seek(0);
  },
  //这个方法我都忘记了，应该用不上
  bindwaiting(){
    if(this.playEnd)
      this.videoContext.pause();
  }
})