/**
 * Created by YYY on 2015/1/10.
 */
var animateManager =require('./animateManager'),
    pluginManager = require('./pluginManager'),
    util =require('./util');

var Slider = function(container,params){

    'use strict';

    this.container = container;
    this.slides = [];

    //屏幕的宽高
    this.width = 0;
    this.height = 0;
    //单幅页面大小
    //如果水平是宽度
    //反之是高度
    this.slideSize = 0;

    //手势的坐标
    this.touches = {
        start: 0,	//如果水平模式,则为X,否则就是Y
        startX: 0,
        startY: 0,
        current: 0,		//TouchMove时设置,如果水平模式为X,反之为Y
        currentX: 0,
        currentY: 0
    };
    //单个slide绝对位置坐标
    this.positioins = {
        start: 0,
        current: 0
    };


    //当前slide索引值
    this.currentIndex = 0;
    //上一个slide索引值(向上或向下)
    this.previousIndex = 0;
    //循环模式下的索引值
    this.loopIndex = 0;

    this.id = setTimeout(1);

    this.wrapper = this.container.children[0];

    //用默认选项合并params
    this.params = util.extend(params,{
        mode: 'horizontal', //vertical
        loop: false,
        speed: 300,
        slideActiveClass: 'slider-play',
        slideAniClass: 'ani',
        slideAniHiddenClass:'ani-hidden',
        animation:'',
        plugins:[],
        //是否平铺整个屏幕
        isOverspread: true
    });

    //是否水平模式
    this.isH = params.mode === 'horizontal';

    this.init();

    //辅助判断嵌套关系
    this._isScrolling = undefined;
    //是否初始化
    this._inited = false;
    //是否是touch事件
    this._isTouchEvent = false;
    this._isTouched = false;

};
Slider.prototype = {

    /**====================================
     * 初始化
     *=====================================*/
    init: function(reInit){
        this.calcSlide();
        this.createLoop();
        this.calcWrapper();
        this.bindEvent();
        if(this.params.loop){
            //循环模式
            this.goTo(0,0,false);
        }else{
            this.updateActiveSlide(0);
        }
        if(!this._inited){
            this.triggerPlugin('onFirstInit');
            this.triggerAnimate('onFirstInit');
        }else{
            this.triggerPlugin('onInit');
            this.triggerAnimate('onInit');
        }
        this._inited = true;
    },
    reInit: function(){
        this.calcWrapper();
        this.triggerPlugin('onInit');
        this.triggerAnimate('onInit');
    },
    //计算slide
    calcSlide: function(){
        this.slides = [];

        var slide;
        //初始化slides
        for(var i=0,l = this.wrapper.children.length; i < l;i++){
            slide = this.wrapper.children[i];
            this.slides.push(slide);
        }
    },
    //计算Wrapper容器宽高
    calcWrapper: function(){
        var slide,
            slideWidth,
            slideHeight,
            slidesLength = this.slides.length,
            wrapper = this.wrapper;

        //设置屏幕的宽高
        if(this.params.isOverspread){
            this.width = slideWidth = util.windowWidth();
            this.height = slideHeight = util.windowHeight();
            this.container.style.width = this.width + 'px';
            this.container.style.height = this.height + 'px';
        }else{
            this.width = slideWidth = util.getWidth(this.container);
            this.height = slideHeight = util.getHeight(this.container);
        }


        // alert(this.height);
        this.slideSize = this.isH ? this.width : this.height;
        this.wrapperSize = this.isH ? slidesLength * slideWidth : slidesLength * slideHeight;

        for(var i = 0,l = this.slides.length;i< l;i++){
            slide = this.slides[i];
            slide.style.width = slideWidth + 'px';
            slide.style.height = slideHeight + 'px';
            slide.setAttribute('data-page-size',this.slideSize);
        }


        //设置wrapper的宽高
        wrapper.style.width = (this.isH ? slidesLength * slideWidth : slideWidth) + 'px';
        wrapper.style.height = (this.isH ? slideHeight : slidesLength * slideHeight) + 'px';

        window.setTimeout(function(){
            window.scrollTo(0,0);
        },100);
    },
    //初始化TouchStart/TouchMove/TouchEnd/Resize事件
    bindEvent: function(){
        var bind = util.addEventListener,
        self = this;
        var hasTouch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

        bind(self.wrapper, hasTouch ? 'touchstart' : 'mousedown' , self.onTouchStart.bind(self));
        bind(self.wrapper, hasTouch ? 'touchmove' : 'mousemove', self.onTouchMove.bind(self));
        bind(self.wrapper, hasTouch ? 'touchend' : 'mouseup', self.onTouchEnd.bind(self));
        bind(window, 'resize',self.fixResize.bind(self));
        if('onorientationchange' in window){
            bind(window, 'orientationchange',self.fixResize.bind(self));
        }
    },

    /*====================================
     * TouchStart/TouchMove/TouchEnd事件
     *====================================*/
    onTouchStart: function(event){

        if (this._isTouched) {
            return false;
        }

        this._isTouched = true;
        this._isTouchEvent = event.type === 'touchstart';

        this._isScrolling = undefined;

        var eventTarget = event.target || event.srcElement;
        if (document.activeElement) {
            if (document.activeElement !== eventTarget) document.activeElement.blur();
        }

        var formTagNames = ('a input select textarea').split(' ');
        if(formTagNames.indexOf(eventTarget.tagName.toLowerCase()) < 0){
            event.preventDefault();
        }

        if(!this._isTouchEvent || event.targetTouches.length === 1){
            var pageX = this._isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = this._isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            this.touches.startX = this.touches.currentX = pageX;
            this.touches.startY = this.touches.currentY = pageY;
            this.touches.current = this.touches.start = this.isH ? pageX : pageY;

            //设置当前page绝对坐标
            this.positioins.start = this.positioins.current = this.getWrapperTranslate();

            this.setWrapperTransition(0);
            this.setWrapperTransition(this.positioins.start);

            this.triggerAnimate('onTouchStart');
        }


    },
    onTouchMove: function(event){

        if (!this._isTouched) return;
        if (this._isTouchEvent && event.type === 'mousemove') return;

        if (!this._isTouchEvent || event.touches.length === 1) {
            var pageX = this._isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = this._isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            if (typeof this._isScrolling === 'undefined' && this.isH) {
                this._isScrolling = !!(this._isScrolling || Math.abs(pageY - this.touches.startY) > Math.abs(pageX - this.touches.startX));
            }
            if (typeof this._isScrolling === 'undefined' && !this.isH) {
                this._isScrolling = !!(this._isScrolling || Math.abs(pageY - this.touches.startY) < Math.abs(pageX - this.touches.startX));
            }
            if (this._isScrolling) {
                return;
            }

            if(!this._isMoved){
                //第一次开始move
                if (this.params.loop) {
                    this.fixLoop();
                    this.positioins.start = this.getWrapperTranslate();
                }
            }
            this._isMoved = true;

            event.preventDefault();

            this.touches.current = this.isH ? pageX : pageY;

            //当前帧绝对位置 = 手势滑动距离 + 之前帧绝对位置距离
            this.positioins.current = (this.touches.current - this.touches.start) + this.positioins.start;

            //设置滑动跟随
            this.setWrapperTranslate(this.positioins.current);

            this.triggerAnimate('onTouchMove');
        }
    },
    onTouchEnd: function(event){

        if (!this._isTouched) return;
        this._isMoved = false;
        this._isTouched = false;

        //如果不能动，则重置当前帧
        if (this._isScrolling) {
            this.resetSlide();
        }

        var threshold = 50,	//滑动阀值
            diff = this.positioins.current - this.positioins.start,
            maxPosition = -this.maxWrapperPosition();



        //检查是否小于边界或大于边界
        //用于重置当前帧
        if(Math.abs(diff) < threshold || this.positioins.current > 0 || this.positioins.current < maxPosition){
            this.resetSlide();
            this.triggerAnimate('onTouchEnd');
            return;
        }

        if(diff < 0){
            this.next(true);
        }else{
            this.prev(true);
        }
        this.triggerAnimate('onTouchEnd');
    },

    /*======================================
     * loop处理
     *======================================*/
    //创建循环节点
    createLoop: function(){
        if(!this.params.loop)	return;

        //在首（尾）帧之前插入尾（首）帧
        var firstSlide = '',
            lastSlide = '',
            i;

        var wrapperHTML = function(outerHtml){
            var par = document.createElement('div');
            var child;

            par.innerHTML = outerHtml;
            child = par.firstChild;

            return child.outerHTML;
        }

        //找到首帧和尾帧
        for(i=0;i<1;i++){
            lastSlide = wrapperHTML(this.slides[i].outerHTML);
        }
        for(i=this.slides.length-1;i<this.slides.length;i++){
            firstSlide = wrapperHTML(this.slides[i].outerHTML);
        }
        var totalSlideHTML = firstSlide + this.wrapper.innerHTML + lastSlide;
        this.wrapper.innerHTML = totalSlideHTML;

        this.calcSlide();
    },
    //修复自动循环
    fixLoop: function(){
        var newIndex,
        slidesLength = this.slides.length;

        if (this.currentIndex < 1) {
            newIndex = slidesLength - 3 + this.currentIndex;
            this.goTo(newIndex, 0,false);
        }
        else if ((this.currentIndex > slidesLength -  2)) {
            newIndex = -slidesLength + this.currentIndex + 1;
            this.goTo(newIndex, 0,false);
        }
    },

    /*================================
     * 获得wrapper容器大小
     *================================*/
    //因为坐标是从0,0开始，所以最大容器大小 = wrapperSize - slideSize
    maxWrapperPosition: function(){
        var size = this.wrapperSize - this.slideSize;
        return size < 0 ? 0 : size;
    },

    /**=====================================
     * 转帧
     *======================================*/
    //跳转到第几帧
    goTo: function(index,duration,runCallback){

        if(this.params.loop) index = index + 1;

        if(index < 0){ index = 0;}
        if(index === this.slides.length){ index = this.slides.length - 1;}

        //获得偏移量
        var position = -index * this.slideSize;

        this.goToPosition(position,duration,'to',runCallback);
    },
    //根据位置转帧
    goToPosition: function(position,duration,action,runCallback){
        duration = duration === 0 ? 0 : this.params.speed;
        this.setWrapperTranslate(position);
        this.setWrapperTransition(duration);
        this.updateActiveSlide(position);

        if(action ==='prev' || action === 'next' || (action === 'to' && runCallback === true)){
            if(this.params.onSlideChanged) this.params.onSlideChanged.call(this);console.log('this',this);
        }
    },
    //重置帧
    resetSlide: function(){
        //如果当前位置>0,直接设置为0
        //反之，设置为最大容器的大小
        var currentPosition = this.getWrapperTranslate(),
            slideSize = this.slideSize,
            maxWrapperPosition = this.maxWrapperPosition(),
            newPosition = currentPosition;

        newPosition = currentPosition < 0 ?
            Math.round(currentPosition/slideSize) * slideSize : 0;

        if(newPosition <= -maxWrapperPosition){
            newPosition = -maxWrapperPosition;
        }

        //如果只是在原来位置上点击，直接返回
        if (newPosition === currentPosition) return false;

        this.goToPosition(newPosition,this.params.speed,'reset');
    },
    //设置当前帧样式
    //以及设置上一帧索引号
    updateActiveSlide : function(position){

        if(this.slides.length === 0){ return; }
        if(position > 0){ position = 0; }

        this.previousIndex = this.currentIndex;

        //根据position获得当前索引
        this.currentIndex = Math.round(-position / this.slideSize);

        if (this.currentIndex === this.slides.length) this.currentIndex = this.slides.length - 1;
        if (this.currentIndex <= 0) this.currentIndex = 0;

        var slide,
            aniArray;
        for (var i = 0; i < this.slides.length; i++) {
            slide = this.slides[i];
            slide.classList.remove(this.params.slideActiveClass);
            this.setAnimateDisplay(slide,true);
        }
        this.slides[this.currentIndex].classList.add(this.params.slideActiveClass);
        this.setAnimateDisplay(this.slides[this.currentIndex],false);

        if(this.params.loop){
            //设置loop模式的索引值
            this.loopIndex = this.currentIndex - 1;
            if (this.loopIndex >= this.slides.length - 2) {
                this.loopIndex = this.slides.length - 2 - this.loopIndex;
            }
            if (this.loopIndex < 0) {
                this.loopIndex = this.slides.length - 2 + this.loopIndex;
            }
            if (this.loopIndex < 0) this.loopIndex = 0;
        }else{
            this.loopIndex = this.currentIndex;
        }
    },
    /**
     * 添加动画特定样式
     */
    setAnimateDisplay: function(context,isAdd){
        //只查找当前context子节点是否含有slideAniClass
        //这块可在优化
        var i = 0,
            j = 0,
            children =context.children;
        il = children.length,

            jl = 0,
            aniClass = this.params.slideAniClass,
            hiddenAniClass = this.params.slideAniHiddenClass;

        for(; i < il;i++){
            if(children[i].className){
                var childrenClasses = children[i].className.split(/\s+/);
                for(jl = childrenClasses.length; j<jl; j++){
                    if(childrenClasses[j] === aniClass){
                        children[i].classList[isAdd? 'add' : 'remove'](hiddenAniClass);
                    }
                }
            }
        }
    },

    /**=====================================
     * 处理window的Resize事件
     *======================================*/
    //修复resize
    fixResize: function(){

        window.setTimeout(function(){
            window.scrollTo(0,0);
        },100);

        this.reInit();
        //如果是循环模式
        //则使用循环模式的索引值
        //防止每次resize后currentIndex+1的问题
        this.goTo(this.params.loop ? this.loopIndex : this.currentIndex,0,false);
    },

    /**======================================
     * API
     *=======================================*/
    //下一帧
    next: function(internal){
        //设置internal参数的意义是
        //prev和next如果是外部调用的，需要重新修正一下循环索引
        //如果是内部调用，就不用修正了，因为在move时已经修正完毕，在修正一次就是多余了
        if(!internal &&this.params.loop) this.fixLoop();

        //根据当前偏移量位置/单帧大小（水平为宽度，垂直为高度）* 单帧大小 + 单帧大小
        var currentPosition = this.getWrapperTranslate(),
            newPosition = currentPosition,
            slideSize = this.slideSize,
            maxWrapperPosition = this.maxWrapperPosition();

        newPosition = -(Math.floor(Math.abs(currentPosition) / slideSize) * slideSize + slideSize);

        if(newPosition < -maxWrapperPosition){
            newPosition = -maxWrapperPosition;
        }

        if(currentPosition === newPosition) return;

        this.goToPosition(newPosition,this.params.speed,'next');
    },
    //上一帧
    prev: function(internal){
        //设置internal参数的意义是
        //prev和next如果是外部调用的，需要重新修正一下循环索引
        //如果是内部调用，就不用修正了，因为在move时已经修正完毕，在修正一次就是多余了
        if(!internal &&this.params.loop) this.fixLoop();

        //根据（当前帧位置偏移量 / 单帧大小 - 1 ） × 单帧大小
        var currentPosition = this.getWrapperTranslate(),
            newPosition = currentPosition,
            slideSize = this.slideSize;

        newPosition = -(Math.ceil(-currentPosition / slideSize) - 1) * slideSize;

        if(newPosition > 0){ newPosition = 0;}
        if(newPosition === currentPosition) return;
        this.goToPosition(newPosition,this.params.speed,'prev');
    },
    //根据索引号获得帧
    getSlide : function (index) {
        return this.slides[index];
    },

    /**=====================================
     * 调用动画事件
     *======================================*/
    triggerAnimate: function(method, args){
        var self = this,
            params = self.params,
            ani;

        if(animateManager.exists(params.animation)){
            ani = animateManager.get(params.animation)(self);
            if(method in ani){
                ani[method](args);
            }

        }
    },
    /**=====================================
     * 调用插件事件
     *======================================*/
    triggerPlugin:function(method,args){
        var plugin,
            self = this;

        self.params.plugins.forEach(function(name){
            if(pluginManager.exists(name)){
                plugin = pluginManager.get(name)(self);
                if(method in plugin){
                    plugin[method](args);
                }
            }
        });
    },

    getWrapperTranslate: function(axis){
        var el = this.wrapper,
            matrix, curTransform, curStyle, transformMatrix;

        if (typeof axis === 'undefined') {
            axis = this.params.mode === 'horizontal' ? 'x' : 'y';
        }

        curStyle = window.getComputedStyle(el, null);
        if (window.WebKitCSSMatrix) {
            transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
        }
        else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m41;
            else
                curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m42;
            else
                curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    },
    setWrapperTranslate : function (x, y, z){
        var es = this.wrapper.style,
            coords = {x: 0, y: 0, z: 0},
            translate;

        if (arguments.length === 3) {
            coords.x = x;
            coords.y = y;
            coords.z = z;
        }
        else {
            if (typeof y === 'undefined') {
                y = this.params.mode === 'horizontal' ? 'x' : 'y';
            }
            coords[y] = x;
        }

        translate = 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)'   ;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
        this.triggerAnimate('onSetWrapperTransform', coords);
    },
    setWrapperTransition : function (duration) {
        var es = this.wrapper.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
        this.triggerAnimate('onSetWrapperTransition',duration);
    },

    util:util
};
module.exports = Slider;