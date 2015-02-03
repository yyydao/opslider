# Demo

- order: 1
---

<style>

slider-wrap{
    overflow:hidden;
}
slider {
    backface-visibility: hidden;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
slider wrapper {
    box-sizing: content-box;
    display: block;
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0s;
    transition-property: transform, left, top;
    transition-timing-function: ease;
    width: 100%;
}
slider page {
    box-sizing: content-box;
    display: block;
    float: left;
    height: 100%;
    position: relative;
    width: 100%;
    background-size:contain;
}
slider page .ani-hidden {
    display: none;
}
.landscape-tip {
    background-color: #45b19a;
    display: none;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9999;
}
.landscape-tip .content {
    color: #fff;
    height: 150px;
    left: 50%;
    margin: -35px 0 0 -125px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 250px;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-in {
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
}
.ani.fade-in {
    animation-name: fade-in;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-in-up {
0% {
    opacity: 0;
    transform: translate3d(0px, 100%, 0px);
}
100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.fade-in-up {
    animation-name: fade-in-up;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-in-right {
0% {
    opacity: 0;
    transform: translate3d(100%, 0px, 0px);
}
100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.fade-in-right {
    animation-name: fade-in-right;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-in-down {
0% {
    opacity: 0;
    transform: translate3d(0px, -100%, 0px);
}
100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.fade-in-down {
    animation-name: fade-in-down;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-in-left {
0% {
    opacity: 0;
    transform: translate3d(-100%, 0px, 0px);
}
100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.fade-in-left {
    animation-name: fade-in-left;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-out {
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
.ani.fade-out {
    animation-name: fade-out;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-out-up {
0% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(0px, -100%, 0px);
}
}
.ani.fade-out-up {
    animation-name: fade-out-up;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-out-right {
0% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(100%, 0px, 0px);
}
}
.ani.fade-out-right {
    animation-name: fade-out-right;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-out-down {
0% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(0px, 100%, 0px);
}
}
.ani.fade-out-down {
    animation-name: fade-out-down;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes fade-out-left {
0% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(-100%, 0px, 0px);
}
}
.ani.fade-out-left {
    animation-name: fade-out-left;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-x {
0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0px, 0px, 0px);
}
40%, 43% {
    transform: translate3d(0px, -30px, 0px);
}
70% {
    transform: translate3d(0px, -15px, 0px);
}
90% {
    transform: translate3d(0px, -4px, 0px);
}
}
.ani.elastic-x {
    animation-name: elastic-x;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-y {
0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0px, 0px, 0px);
}
40%, 43% {
    transform: translate3d(-30px, 0px, 0px);
}
70% {
    transform: translate3d(-15px, 0px, 0px);
}
90% {
    transform: translate3d(-4px, 0px, 0px);
}
}
.ani.elastic-y {
    animation-name: elastic-y;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-in {
0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
}
20% {
    transform: scale3d(1.1, 1.1, 1.1);
}
40% {
    transform: scale3d(0.9, 0.9, 0.9);
}
60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
}
80% {
    transform: scale3d(0.97, 0.97, 0.97);
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
}
.ani.elastic-in {
    animation-name: elastic-in;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-in-up {
0% {
    opacity: 0;
    transform: translate3d(0px, 3000px, 0px);
}
60% {
    opacity: 1;
    transform: translate3d(0px, -25px, 0px);
}
75% {
    transform: translate3d(0px, 10px, 0px);
}
90% {
    transform: translate3d(0px, -5px, 0px);
}
100% {
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.elastic-in-up {
    animation-name: elastic-in-up;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-in-right {
0% {
    opacity: 0;
    transform: translate3d(3000px, 0px, 0px);
}
60% {
    opacity: 1;
    transform: translate3d(-25px, 0px, 0px);
}
75% {
    transform: translate3d(10px, 0px, 0px);
}
90% {
    transform: translate3d(-5px, 0px, 0px);
}
100% {
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.elastic-in-right {
    animation-name: elastic-in-right;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-in-down {
0% {
    opacity: 0;
    transform: translate3d(0px, -3000px, 0px);
}
60% {
    opacity: 1;
    transform: translate3d(0px, 25px, 0px);
}
75% {
    transform: translate3d(0px, -10px, 0px);
}
90% {
    transform: translate3d(0px, 5px, 0px);
}
100% {
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.elastic-in-down {
    animation-name: elastic-in-down;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-in-left {
0% {
    opacity: 0;
    transform: translate3d(-3000px, 0px, 0px);
}
60% {
    opacity: 1;
    transform: translate3d(25px, 0px, 0px);
}
75% {
    transform: translate3d(-10px, 0px, 0px);
}
90% {
    transform: translate3d(5px, 0px, 0px);
}
100% {
    transform: translate3d(0px, 0px, 0px);
}
}
.ani.elastic-in-left {
    animation-name: elastic-in-left;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-out {
20% {
    transform: scale3d(0.9, 0.9, 0.9);
}
50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
}
100% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
}
}
.ani.elastic-out {
    animation-name: elastic-out;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-out-up {
20% {
    transform: translate3d(0px, -10px, 0px);
}
40%, 45% {
    opacity: 1;
    transform: translate3d(0px, 20px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(0px, -2000px, 0px);
}
}
.ani.elastic-out-up {
    animation-name: elastic-out-up;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-out-right {
20% {
    transform: translate3d(10px, 0px, 0px);
}
40%, 45% {
    opacity: 1;
    transform: translate3d(-20px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(2000px, 0px, 0px);
}
}
.ani.elastic-out-right {
    animation-name: elastic-out-right;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-out-down {
20% {
    transform: translate3d(0px, 10px, 0px);
}
40%, 45% {
    opacity: 1;
    transform: translate3d(0px, -20px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(0px, 2000px, 0px);
}
}
.ani.elastic-out-down {
    animation-name: elastic-out-down;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes elastic-out-left {
20% {
    transform: translate3d(-10px, 0px, 0px);
}
40%, 45% {
    opacity: 1;
    transform: translate3d(20px, 0px, 0px);
}
100% {
    opacity: 0;
    transform: translate3d(-2000px, 0px, 0px);
}
}
.ani.elastic-out-left {
    animation-name: elastic-out-left;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes flash {
0%, 50%, 100% {
    opacity: 1;
}
25%, 75% {
    opacity: 0;
}
}
.ani.flash {
    animation-name: flash;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes shake {
0%, 100% {
    transform: translate3d(0px, 0px, 0px);
}
10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0px, 0px);
}
20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0px, 0px);
}
}
.ani.shake {
    animation-name: shake;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes pulse {
0% {
    transform: scale3d(1, 1, 1);
}
50% {
    transform: scale3d(1.05, 1.05, 1.05);
}
100% {
    transform: scale3d(1, 1, 1);
}
}
.ani.pulse {
    animation-name: pulse;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes swing {
20% {
    transform: rotate3d(0, 0, 1, 15deg);
}
40% {
    transform: rotate3d(0, 0, 1, -10deg);
}
60% {
    transform: rotate3d(0, 0, 1, 5deg);
}
80% {
    transform: rotate3d(0, 0, 1, -5deg);
}
100% {
    transform: rotate3d(0, 0, 1, 0deg);
}
}
.ani.swing {
    animation-name: swing;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes sling {
0% {
    transform: scale3d(1, 1, 1);
}
10%, 20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}
30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}
40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}
100% {
    transform: scale3d(1, 1, 1);
}
}
.ani.sling {
    animation-name: sling;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes wobble {
0% {
    transform: none;
}
15% {
    transform: translate3d(-25%, 0px, 0px) rotate3d(0, 0, 1, -5deg);
}
30% {
    transform: translate3d(20%, 0px, 0px) rotate3d(0, 0, 1, 3deg);
}
45% {
    transform: translate3d(-15%, 0px, 0px) rotate3d(0, 0, 1, -3deg);
}
60% {
    transform: translate3d(10%, 0px, 0px) rotate3d(0, 0, 1, 2deg);
}
75% {
    transform: translate3d(-5%, 0px, 0px) rotate3d(0, 0, 1, -1deg);
}
100% {
    transform: none;
}
}
.ani.wobble {
    animation-name: wobble;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes rubberband-x {
0% {
    transform: scale3d(1, 1, 1);
}
30% {
    transform: scale3d(1.25, 0.75, 1);
}
40% {
    transform: scale3d(0.75, 1.25, 1);
}
50% {
    transform: scale3d(1.15, 0.85, 1);
}
65% {
    transform: scale3d(0.95, 1.05, 1);
}
75% {
    transform: scale3d(1.05, 0.95, 1);
}
100% {
    transform: scale3d(1, 1, 1);
}
}
.ani.rubberband-x {
    animation-name: rubberband-x;
}
.ani {
    animation-duration: 1s;
    animation-fill-mode: both;
}
.ani.infinite {
    animation-iteration-count: infinite;
}
@keyframes rubberband-y {
0% {
    transform: scale3d(1, 1, 1);
}
30% {
    transform: scale3d(1.25, 0.75, 1);
}
40% {
    transform: scale3d(0.75, 1.25, 1);
}
50% {
    transform: scale3d(1.15, 0.85, 1);
}
65% {
    transform: scale3d(0.95, 1.05, 1);
}
75% {
    transform: scale3d(1.05, 0.95, 1);
}
100% {
    transform: scale3d(1, 1, 1);
}
}
.ani.rubberband-y {
    animation-name: rubberband-y;
}
 .title{
    font-style: italic;
    font-size: 42px;
    margin-top: 80px;
    margin-bottom: 0;
    line-height: 45px;
    text-align: center;
    color: #fff;
}
.subtitle{
    font-style: italic;
    font-size: 25px;
    text-align: center;
    color: #fff;
}

/**********第一屏*********/
.home{
    background-color: #45b19a;
}
/*************第二屏**************/
.info{
    background-color: #ff787a;
}
/**************第三屏*****************/
.job{
    background-color: #80ac50;
}
</style>

## Normal usage



<div id="slider-wrap">
    <slider>
        <wrapper>
            <!--第一屏-->
            <page class="home" style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/1.png);background-size: contain">
              
            </page>
            <!--第二屏-->
            <page class="info" style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/2.png);background-size: contain">
              
            </page>
            <!--第三屏-->
            <page class="job" style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/3.png);background-size: contain">
              
            </page>
        </wrapper>
    </slider>
</div>


###html结构

````html
<slider>
    <wrapper>
        <!--第一屏-->
        <page>
        </page>
        <!--第二屏-->
        <page>
        </page>
        <!--第三屏-->
        <page>
        </page>
    </wrapper>
</slider>
````
###必要css
````css
slider-wrap{
    overflow:hidden;
}
slider {
    backface-visibility: hidden;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
slider wrapper {
    box-sizing: content-box;
    display: block;
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0s;
    transition-property: transform, left, top;
    transition-timing-function: ease;
    width: 100%;
}
slider page {
    box-sizing: content-box;
    display: block;
    float: left;
    height: 100%;
    position: relative;
    width: 100%;
    background-size:contain;
}
slider page .ani-hidden {
    display: none;
}
````
###js代码
````javascript
seajs.use('index', function(opslider) {
    var container = document.querySelector('slider');
    var slider = opslider.define(container,{
        //展示模式,水平(horizontal)或垂直(vertical)
        mode: 'vertical',
        //是否循环
        loop: false,
        //自定义动画效果,为空则是默认效果
        animation:'',
        //插件
        plugins:[],
        //是否平铺整个屏幕，默认为true
        isOverspread:true,
        //转帧时触发
        onSlideChanged:function(){
            //@todo
        }
    });
});
````

## Method && Property

方法列表。 
----
###goTo(n)
大家都爱的goto,跳到第n张

###next()
到下一张

###prev() 
到上一张

###getSlide(index)
获得某一张的具体属性

内部属性列表。
---
###currentIndex
当前帧索引值

###loopIndex
循环模式下的索引值

###slides[]
包含所有帧的数组

###width
容器的宽度

###height
容器的高度

###previousIndex
上一页（下一页）索引值

###isH
是否水平模式

###onSlideChanged(callback)
切换时触发内部的callback


````
seajs.use('index', function(opslider) {
    var slider = opslider.define(container,{
        onSlideChanged:function(){
            //访问当前索引
            var index = this.currentIndex;
        }
    });
    //下一页
    slider.next();
    //上一页
    slider.prev();
    //获得第二帧
    var page = slider.getSlide(2);
//....
}
````
