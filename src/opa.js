var _default = {
        page: "J_opaPage",
        pannel: "J_opaPannel"
    },
    body = document.documentElement || document.body;

var Events = require('eventor');

var EVENTS = {
    touchdown: "ontouchstart" in window ? "touchstart" : "mousedown",
    touchmove: "ontouchmove" in window ? "touchmove" : "mousemove",
    touchup: "ontouchend" in window ? "touchend" : "mouseup"
};
var userAgent = navigator.userAgent.toLowerCase(),
    browser = {
        version: (userAgent.match(/(?:firefox|opera|safari|chrome|msie|applewebkit)[\/: ]([\d.]+)/))[1],
        safari: /version.+safari/.test(userAgent),
        chrome: /chrome/.test(userAgent),
        firefox: /firefox/.test(userAgent),
        ie: /msie/.test(userAgent),
        opera: /opera/.test(userAgent),
        webkit: /webkit/gi.test(userAgent)
    };


var Opslider = function (cfg) {
    var util = Opslider.Utils,
        config;
    this.config = util.merge({}, _default, cfg || {});
    console.log(this.config);
    config = util.clone(this.config);
    this.get = function (key) {
        return config[key]
    };
    this.set = function (key, val) {
        config[key] = val
    };
    this.init()
};

// mixin
Events.mixTo(Opslider);

Opslider.Utils = {
    isArray: function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]"
    },
    each: function(obj, callback) {
        var util = Opslider.Utils;
        if (util.isArray(obj)) {
            for (var i = 0, len = obj.length; i < len; i++) {
                callback && callback(i, obj[i])
            }
        } else {
            for (var key in obj) {
                callback && callback(key, obj[key])
            }
        }
    },
    clone: function(obj) {
        var util = Opslider.Utils,
            out = null;
        if (util.isArray(obj)) {
            out = [];
            util.each(obj, function(i, e) {
                out.push(e)
            })
        } else {
            out = {};
            util.each(obj, function(i, e) {
                out[i] = e
            })
        }
        return out
    },
    merge: function(baseObj, extendObj, moreObj) {
        var args = arguments,
            util = Opslider.Utils,
            len = args.length,
            temp = {};
        for (var i = len - 1; i > 0; i--) {
            if (util.isArray(args[i - 1])) {
                temp = {};
                for (var j = 0; j < args[i - 1].length; j++) {
                    temp[j] = args[i - 1][j]
                }
                args[i - 1] = temp
            }
            if (util.isArray(args[i])) {
                for (var j = 0; j < args[i].length; j++) {
                    args[i - 1][j] = args[i][j]
                }
            } else {
                for (var j in args[i]) {
                    args[i - 1][j] = args[i][j]
                }
            }
        }
        return args[0]
    },
    trim: function(str) {
        var rBlank = /(^\s+)|(\s+$)/g;
        return str.replace(rBlank, "")
    },
    hasClass: function(node, cls) {
        var clsn = node.className,
            rCls = new RegExp("(^|\\s+)" + cls + "(\\s+|$)", "g");
        return rCls.test(clsn)
    },
    addClass: function(node, cls) {
        var util = Opslider.Utils,
            clsn = node.className;
        if (!util.hasClass(node, cls)) {
            node.className = clsn + " " + cls
        }
    },
    removeClass: function(node, cls) {
        var util = Opslider.Utils,
            clsn = node.className,
            rCls = new RegExp("(^|\\s+)" + cls + "(\\s+|$)", "g");
        if (util.hasClass(node, cls)) {
            node.className = util.trim(clsn.replace(rCls, "$1$2"))
        }
    }
};

Opslider.prototype.init = function () {
    var len = 0;
    this.set("pageNode", document.getElementById(this.get("page")) || document.body); //每一单页都是一个page
    this.set("panNodes", this.get("pageNode").querySelectorAll("." + this.get("pannel")));
    len = this.get("panNodes").length;
    if (!len || len < 2) {
        return
    }
    this.set("vw", (body.clientWidth > 640 ? 640 : body.clientWidth));
    this.set("vh", this.get("size").height || body.clientHeight);
    this.set("pb", document.querySelector("#J_PageBack"));
    this.set("current", 0);
    this.set("circle", false);
    this.set("diff", 100);
    this.set("prefix", this.getPrefix(browser));
    this.set("prevent", false);
    this._parseNode();
    this.preLoad(0);
    this.bindEvent();
    this.pbEvent()
};
Opslider.prototype.getPrefix = function (brow) {
    var pre = "";
    if (browser.webkit) {
        pre = "Webkit"
    } else {
        if (brow.firefox) {
            pre = "Moz"
        } else {
            if (brow.msie) {
                pre = "Ms"
            } else {
                if (brow.opera) {
                    pre = "O"
                } else {
                    pre = ""
                }
            }
        }
    }
    return pre
};
Opslider.prototype._parseNode = function () {
    var pn = this.get("pageNode"),
        pans = this.get("panNodes"),
        util = Opslider.Utils;
    pn.style.width = this.get("vw") + "px";
    pn.style.height = this.get("vh") + "px";
    pn.style.left = "50%";
    pn.style.marginLeft = "-" + this.get("vw") / 2 + "px";
    pn.style.overflow = "hidden";
    for (var i = 0, len = pans.length; i < len; i++) {
        var item = pans.item(i);
        item.style.position = "absolute";
        item.style.left = "0";
        item.style.top = "0";
        item.style.width = "100%";
        item.style.height = "100%";
        if (i !== 0) {
            item.style[this.get("prefix") + "Transform"] = "translate3d(0, " + this.get("vh") + "px, 0)";
            item.style["transform"] = "translate3d(0, " + this.get("vh") + "px, 0)"
        } else {
            util.addClass(item, "current");
            util.addClass(item, "start-animate")
        }
        item.setAttribute("data-index", i)
    }
};
Opslider.prototype.resize = function () {
    var size = {
            width: body.clientWidth > 640 ? 640 : body.clientWidth,
            height: body.clientHeight
        },
        pn = this.get("pageNode");
    this.set("vw", size.width);
    this.set("vh", size.height);
    pn.style.width = size.width + "px";
    pn.style.height = size.height + "px";
    pn.style.marginLeft = "-" + size.width / 2 + "px"
};
Opslider.prototype.getNext = function (index, flag) {
    var pans = this.get("panNodes"),
        len = pans.length,
        next = 0;
    if (flag === 1) {
        next = (index + 1 == len) ? 0 : index + 1
    } else {
        next = (index - 1) < 0 ? len - 1 : index - 1
    }
    return pans[next]
};
Opslider.prototype.preLoad = function (currentIndex) {
    var pans = this.get("panNodes"),
        len = pans.length,
        ci = +currentIndex,
        nci = ci - 1 < 0 ? len - 1 : ci - 1,
        pci = ci + 1 > len - 1 ? 0 : ci + 1,
        lazys = null;
    if (pans[nci]) {
        lazys = pans[nci].querySelector(".J_MiLazyLoad");
        if (lazys) {
            pans[nci].innerHTML = lazys.innerHTML
        }
    }
    if (pans[pci]) {
        lazys = pans[pci].querySelector(".J_MiLazyLoad");
        if (lazys) {
            pans[pci].innerHTML = lazys.innerHTML
        }
    }
};
Opslider.prototype.getIndex = function(){
    this.setupEvents();


    this.trigger('getIndex', page, page===1, page===this.options.totalPages);
    return this;
};
Opslider.prototype.bindEvent = function () {
    var _this = this,
        util = Opslider.Utils,
        cur = _this.get("current"),
        pre = _this.get("prefix"),
        page = _this.get("pageNode"),
        start = {
            x: 0,
            y: 0
        },
        move = {
            x: 0,
            y: 0
        },
        pans = _this.get("panNodes"),
        len = pans.length;

    function exchange(ev) {
        if (_this.get("prevent")) {
            return false
        }
        _this.set("prevent", true);
        var target = page.querySelector(".current"),
            index = +target.getAttribute("data-index"),
            circle = _this.get("circle"),
            next = null,
            disy = 0,
            scale = 0,
            vh = _this.get("vh"),
            posObj = ev.touches ? ev.touches[0] : ev;
        start.y = posObj.clientY || posObj.pageY;

        function moveHandler(ev) {
            posObj = ev.touches ? ev.touches[0] : ev;
            move.y = posObj.clientY || posObj.pageY;
            disy = move.y - start.y;
            if (Math.abs(disy) > 20) {
                if (disy > 0) {
                    if (target.getAttribute("data-index") > 0) {
                        next = _this.getNext.call(_this, index, -1);
                        scale = (1 - Math.abs(disy / vh)).toFixed(2);
                        target.style[pre + "TransformOrigin"] = "center bottom";
                        target.style["transformOrigin"] = "center bottom";
                        target.style[pre + "Transform"] = "scale(" + scale + ")";
                        target.style["transform"] = "scale(" + scale + ")";
                        next.style[pre + "Transform"] = "translate3d(0, -" + (vh - disy) + "px, 0)";
                        next.style["transform"] = "translate3d(0, -" + (vh - disy) + "px, 0)"
                    } else {
                        next = null;
                        target.style[pre + "Transform"] = "translate3d(0, " + disy + "px, 0)";
                        target.style["transform"] = "translate3d(0, " + disy + "px, 0)"
                    }
                } else {
                    if (target.getAttribute("data-index") < len - 1) {
                        next = _this.getNext.call(_this, index, 1);
                        scale = (1 - Math.abs(disy / vh)).toFixed(2);
                        target.style[pre + "TransformOrigin"] = "center top";
                        target.style["transformOrigin"] = "center top";
                        target.style[pre + "Transform"] = "scale(" + scale + ")";
                        target.style["transform"] = "scale(" + scale + ")";
                        next.style[pre + "Transform"] = "translate3d(0, " + (vh + disy) + "px, 0)";
                        next.style["transform"] = "translate3d(0, " + (vh + disy) + "px, 0)"
                    } else {
                        next = null
                    }
                }
            }
            ev.preventDefault()
        }

        function endHandler(ev) {
            if (next) {
                posObj = ev.changedTouches ? ev.changedTouches[0] : ev;
                move.y = posObj.clientY || posObj.pageY;
                disy = move.y - start.y;
                if (disy > 0) {
                    next = _this.getNext.call(_this, index, -1)
                } else {
                    next = _this.getNext.call(_this, index, 1)
                }
                util.addClass(target, "has-transition");
                util.addClass(next, "has-transition");
                if (Math.abs(disy) > _this.get("diff")) {
                    target.style[pre + "Transform"] = "scale(0)";
                    target.style["transform"] = "scale(0)";
                    next.style[pre + "Transform"] = "translate3d(0, 0, 0)";
                    next.style["transform"] = "translate3d(0, 0, 0)";
                    setTimeout(function () {
                        util.removeClass(target, "current");
                        util.addClass(next, "current");
                        util.removeClass(target, "has-transition");
                        util.removeClass(next, "has-transition");
                        _this.preLoad(next.getAttribute("data-index"));
                        _this.set("prevent", false);
                        _this.get("transEnd") && _this.get("transEnd").call(_this)
                    }, 300)
                } else {
                    target.style[pre + "Transform"] = "scale(1)";
                    target.style["transform"] = "scale(1)";
                    next.style[pre + "Transform"] = "translate3d(0, " + ((disy > 0 ? -1 : 1) * vh) + "px, 0)";
                    next.style["transform"] = "translate3d(0, " + ((disy > 0 ? -1 : 1) * vh) + "px, 0)";
                    setTimeout(function () {
                        _this.set("prevent", false);
                        util.removeClass(target, "has-transition");
                        util.removeClass(next, "has-transition")
                    }, 300)
                }
            } else {
                util.addClass(target, "has-transition");
                target.style[pre + "Transform"] = "translate3d(0, 0, 0)";
                target.style["transform"] = "translate3d(0, 0, 0)";
                if (target.getAttribute("data-index") == len - 1) {
                    if (_this.get("pb")) {
                        if (_this.get("pbTimer")) {
                            clearTimeout(_this.get("pbTimer"));
                            _this.pbTimer = null
                        }
                        _this.get("pb").style.visibility = "visible";
                        _this.get("pb").style.zIndex = 100;
                        _this.get("pb").style.opacity = 1
                    }
                }
                setTimeout(function () {
                    _this.set("prevent", false);
                    util.removeClass(target, "has-transition")
                }, 300)
            }
            page.removeEventListener(EVENTS.touchmove, moveHandler, false);
            page.removeEventListener(EVENTS.touchup, endHandler, false)
        }

        page.addEventListener(EVENTS.touchmove, moveHandler, false);
        page.addEventListener(EVENTS.touchup, endHandler, false)
    }

    page.addEventListener(EVENTS.touchdown, exchange, false);
    page.addEventListener(EVENTS.touchmove, function (ev) {
        ev.preventDefault()
    }, false)
};
Opslider.prototype.pbEvent = function () {
    var _this = this,
        pb = _this.get("pb"),
        sy, ey, xyObj, vdis;
    if (!pb) {
        return false
    }

    function pbTouchStart(ev) {
        ev.preventDefault();
        xyObj = ev.touches ? ev.touches[0] : ev;
        sy = xyObj.clientY || xyObj.pageY
    }

    function pbTouchEnd(ev) {
        ev.preventDefault();
        xyObj = ev.changedTouches ? ev.changedTouches[0] : ev;
        ey = xyObj.clientY || xyObj.pageY;
        vdis = ey - sy;
        if (Math.abs(vdis) > 50) {
            if (vdis > 0) {
                pb.style.opacity = 0;
                _this.set("pbTimer", setTimeout(function () {
                    pb.style.visibility = "hidden";
                    pb.style.zIndex = 100
                }, 520))
            }
        }
    }

    pb.addEventListener(EVENTS.touchdown, pbTouchStart, false);
    pb.addEventListener(EVENTS.touchup, pbTouchEnd, false)
};



module.exports = Opslider;