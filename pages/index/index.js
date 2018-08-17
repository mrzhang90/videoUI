import * as video from '../../utils/video';
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos: [
      {
        index: 0,
        attr: {
          src: 'https://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f40.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'          
        }
      },
      {
        index: 1,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover:'//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      }
    ]
  },
  //主题封面点击-播放视频
  bindplay(e) {
    video.bindplay(this, e)
  },
  //监听视频播放
  bindplay_video(e) {
    video.bindplay_video(this, e)
  },
  //跳转到全屏播放页面
  startOnPlay(ev) {
    wx.navigateTo({
      url: '/pages/videoFull/videoFull?src=' + ev.currentTarget.dataset.src,
    })
  }
})