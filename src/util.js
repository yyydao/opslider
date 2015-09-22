var util = {
    getWidth: function (el, outer, round) {
        var width = window.getComputedStyle(el, null).getPropertyValue('width');
        var returnWidth = parseFloat(width);
        if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
        if (round) return Math.ceil(returnWidth);
        else return returnWidth;
    },
    getHeight: function (el, outer, round) {
        if (outer) return el.offsetHeight;

        var height = window.getComputedStyle(el, null).getPropertyValue('height');
        var returnHeight = parseFloat(height);
        if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
        if (round) return Math.ceil(returnHeight);
        else return returnHeight;
    },
    getOffset: function (el) {
        var box = el.getBoundingClientRect();
        var body = document.body;
        var clientTop  = el.clientTop  || body.clientTop  || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop  = window.pageYOffset || el.scrollTop;
        var scrollLeft = window.pageXOffset || el.scrollLeft;
        return {
            top: box.top  + scrollTop  - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    },
    windowWidth : function () {
        if (window.innerWidth) return window.innerWidth;
        else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
    },
    windowHeight : function () {
        if (window.innerHeight) return window.innerHeight;
        else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
    },
    addEventListener : function (el, event, listener, useCapture) {
        if (typeof useCapture === 'undefined') {
            useCapture = false;
        }
        el.addEventListener(event, listener, useCapture);
    },
    removeEventListener:function(el, event, listener, useCapture){
        if (typeof useCapture === 'undefined') {
            useCapture = false;
        }
        el.removeEventListener(event, listener, useCapture);
    },
    extend: function(target, source){
        for (var prop in source) {
            if (prop in target && typeof target[prop] === 'object') {
                for (var subProp in source[prop]) {
                    if (!(subProp in target[prop])) {
                        target[prop][subProp] = source[prop][subProp];
                    }
                }
            }
            else if (! (prop in target)) {
                target[prop] = source[prop];
            }
        }
        return target;
    },
    setTransform : function (el, transform) {
        var es = el.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
    },
    setTranslate : function (el, translate) {
        var es = el.style;
        var pos = {
            x : translate.x || 0,
            y : translate.y || 0,
            z : translate.z || 0
        };
        var transformString = 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)';
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
    },
    setTransition : function (el, duration) {
        var es = el.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
    }
};

module.exports= util;