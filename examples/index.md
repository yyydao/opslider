

# Demo

---



## page

---

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

/* 组件样式 */
.page {
  position: relative;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.pannels {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  -webkit-background-size: contain;
  background-size: contain;
}

.has-transition {
  -webkit-transition: -webkit-transform .3s ease-out;
  -o-transition: -o-transform .3s ease-out;
  transition: transform .3s ease-out;
}

/* DEMO优化 */
@-webkit-keyframes guideTop {
  0% {
    -webkit-transform: translateY(42px);
    opacity: 0
  }
  60% {
    -webkit-transform: translateY(12px);
    opacity: 1
  }
  100% {
    -webkit-transform: translateY(0px);
    opacity: 0
  }
}

@-moz-keyframes guideTop {
  0% {
    -moz-transform: translateY(42px);
    opacity: 0
  }
  60% {
    -moz-transform: translateY(12px);
    opacity: 1
  }
  100% {
    -moz-transform: translateY(0px);
    opacity: 0
  }
}

@-o-keyframes guideTop {
  0% {
    -o-transform: translateY(42px);
    opacity: 0
  }
  60% {
    -o-transform: translateY(12px);
    opacity: 1
  }
  100% {
    -o-transform: translateY(0px);
    opacity: 0
  }
}

@keyframes guideTop {
  0% {
    transform: translateY(42px);
    opacity: 0
  }
  60% {
    transform: translateY(12px);
    opacity: 1
  }
  100% {
    transform: translateY(0px);
    opacity: 0
  }
}

.page {
   background: #000;
 }

.u-guideTop {
  display: block;
  position: absolute;
  left: 50%;
  bottom: 50px;
  z-index: 9;
  width: 40px;
  height: 50px;
  background: url(../src/img/units-icons.png) -67px 0;
  margin-left: -20px;
  outline: none;
}

.u-guideTop.z-move {
  -webkit-animation: guideTop 1.5s infinite;
  -moz-animation: guideTop 1.5s infinite;
  -o-animation: guideTop 1.5s infinite;
  animation: guideTop 1.5s infinite;
}
</style>

---

<link href ="/src/style.css" type="stylesheet">
    
<div id="JPage" class="page">
    <div class="JPanel pannels " data-src="http://192.168.80.107:8004/zt/wechat_template/img/1.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/1.png) center top no-repeat;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move J_MiLazyLoad"></a>
    </div>
    <div class="JPanel pannels " data-src="http://192.168.80.107:8004/zt/wechat_template/img/2.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/2.png) center top no-repeat;background-size: contain;">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/3.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/3.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/4.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/4.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/5.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/5.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/6.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/6.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/7.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/7.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/8.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/8.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/9.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/9.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/10.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/10.png) center top no-repeat #333;background-size: contain">
        <a href="javascript:void(0);" class="u-guideTop z-move"></a>
    </div>
    <div class="JPanel pannels" data-src="http://192.168.80.107:8004/zt/wechat_template/img/11.png"
         style="background: url(http://192.168.80.107:8004/zt/wechat_template/img/11.png) center top no-repeat #333;background-size: contain">
       <div id="J_PageBack"></div> 
    </div>
</div>



````javascript
seajs.use('index', function(Opslider) {
            new Opslider({
                size:{},
                page: "JPage", // id
                panel: "JPanel" // class
            }).on('show',function(e){   //暴露当前的index
                console.log(e);
            });
});
````