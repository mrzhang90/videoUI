# videoUI

-  videoUI 视频切换播放和全屏播放 微信小程序

## 解决痛点：

- video的src默认为空，解决了viode自动下载的bug
	- 加快页面加载速度，为用户节省流量

- 视频切换播放
	- ![自动暂停上一个视频](assets/images/1.jpg)

- custom-cache="{{false}}"
	- 解决视频缓存中卡住的问题

- 视频全屏播放
	- 解决iPhone X兼容问题
	- ![视频全屏播放](assets/images/3.jpg)

``` html
<video id="wxParse{{item.index}}" src="{{srcs['wxParse'+item.index]}}" class="wxParse-video-video" poster="{{item.attr.cover}}" bindplay="bindplay_video" data-id="wxParse{{item.index}}" custom-cache="{{false}}">
	<cover-view class="controls" hidden="{{srcs['wxParse'+item.index]}}" bindtap="bindplay" data-id="wxParse{{item.index}}" data-src="{{item.attr.src}}">
	</cover-view>
</video>
```

## 说明：
* 我们贝壳亲子英语小程序，经过多版本迭代，优化了视频体验流程，这个项目是从实际项目抽离出的精华
* 喜欢请start，您的支持就是我的动力…

* 项目地址: [https://github.com/mrzhang90/videoUI](https://github.com/mrzhang90/videoUI)
