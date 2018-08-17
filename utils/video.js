module.exports = {
  clearContext(that) {
    that.setData({
      contextData: null
    })
  },
  //视频播放
  bindplay_video(that, e) {
    var id = e.currentTarget.dataset.id
    var old_vid = that.data.old_vid
    var contextData = that.data.contextData || {};
    //播放前暂停上一个播放的视频
    if (Object.keys(contextData).length > 0) {
      Object.keys(contextData).forEach(function (val, key) {
        if (id != val) {
          contextData[val].pause();
          that.setData({
            old_vid: id
          })
        }
      })
    }
  },
  //点击封面图触发，
  //然后将src赋给video,是为了解决页面加载就下载video的问题
  bindplay(that, e, callback) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var src = e.currentTarget.dataset.src
    var contextData = that.data.contextData || {};
    var srcs = that.data.srcs || {};
    var id = e.currentTarget.dataset.id
    if (!contextData[id]) {
      contextData[id] = wx.createVideoContext(id)
      srcs[id] = src;
    }
    that.setData({
      srcs,
      contextData
    })
    // 延迟播放，防止上一步setData没有配置好video地址
    setTimeout(function () {
      typeof callback == "function" && callback(contextData[id]);
      contextData[id].play();
      wx.hideLoading()
    }, 1000)
  },
  videofullscreenchange(that, event) {
    var id = event.target.id;
    // 如果退出全屏，则暂停并清空video上下文
    if (!event.detail.fullScreen) {
      that.data.contextData[id].pause()
      that.setData({
        contextData: null
      })
    }
  }
}