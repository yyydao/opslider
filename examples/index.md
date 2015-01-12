# Demo

---

## Normal usage
<style>

@charset "utf-8";
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100%;
}
body {
    background-color: #fff;
    color: #fff;
    font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    margin: 0;
}
div, section {
    display: block;
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

</style>

<slider>
            <wrapper>
                <!--第一屏-->
                <page class="home">
                    <div class="title">垂直模式</div>
                    <div class="subtitle">请向上或向下滑</div>
                </page>
                <!--第二屏-->
                <page class="info">
                    <div class="title ani fade-in-down">Slide2</div>
                </page>
                <!--第三屏-->
                <page class="job">
                   <div class="title ani elastic-out">Slide3</div>
                </page>
            </wrapper>
        </slider>


````javascript
seajs.use('index', function(opslider) {
   var container = document.querySelector('slider');
      var slider = opslider.define(container,{
          mode: 'vertical'//horizontal vertica
      });
});
````

