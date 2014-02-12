个人网站开发过程学习
====

## 判断鼠标滚轮滚动方向
为了避免兼容性问题, 使用jquery实现

#### 方法1绑定 window scroll 事件, 通过变量记录上次位置, 然后判断

```
    var lastScrollTop = 0;
    $(window).scroll(function(e){
         var st = $(this).scrollTop();
        if (st > lastScrollTop){
            console.log('down');
        } else {
           console.log('up');
        }
        lastScrollTop = st;
    });问题



```


#### 方法2绑定 window mousewheel事件, 通过事件参数判断方向

```
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            console.log('Scroll up');
        }
        else {
            console.log('Scroll down');
        }
    });
```

存在一个问题: 一次滚动操作会触发多次滚动事件


## 使用 css 动画效果实现整屏滚动
除了鼠标滚轮事件外, 还需要绑定键盘上下键, 页面点击按钮

问题
固定高度的div, 内部有absolute的两个div,
所有div高度都一样为100%
一个div为top 0, 一个div为top 100%
只有外部div设置为absolute 且 overflow:hidden的时候, 才不会产生scroll, 否则会有scroll, 这是为什么?

如果想使用css的动画效果需要进行系统的学习.
Transform,Transition,Animation
transition: http://www.w3cplus.com/content/css3-transition
css动画在ie6-9都是不支持的,需要做兼容性   TODO




## 视频的处理

#### 方法1
默认是一张图片
判断能够播放视频: pc, 支持video元素, 最好能检测网速
等视频能够播放后用视频替换图片

#### 方法2
使用视频的poster属性当视频未加载时显示图片
加载完成之后播放
如果不支持视频使用video fail over机制


firefox 不支持mp4格式, 需要生成多格式视频
chrome poster会有白色闪烁现象


## 第一屏
显示Pana, 定义位置, 大小, weight
显示右侧github, linkedin, facebook
左侧显示pana logo


## noscript处理

## 中英文国际化

## IE, firefox, opera, safari, chrome 多浏览器, 多版本兼容
html5shiv, noscript

## 移动设备响应式设计

## js, css压缩
可考虑使用自动化工具grunt实现

## ga 统计, SEO

## 页面中添加特殊图形注释 


## favi.con



## 可参看优秀网站, 查看需要做的地方

* square.com/cash
* jingjs.com



## 问题

1. square.com 整屏滚动是动态判断的, 什么时候整屏滚动, 什么时候自然滚动为什么 ?
