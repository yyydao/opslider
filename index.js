var opslider;


var Slider =require('./src/slider');
    animateM =require('./src/animateManager'),
    pluginM =require('./src/pluginManager'),
    util =require('./src/util');

if (typeof opslider === 'undefined') {
    opslider = {};
}

opslider.addAnimate = animateM.add;
opslider.addPlugin = pluginM.add;
opslider.util = util;

opslider.define = function(wrapper,params){
    return new Slider(wrapper,params);
};

function scan(){
    var nodeList = document.querySelectorAll('[data-slider-wrapper=slider]'),
        l = nodeList.length,
        i = 0,
        j = 0,
        item,
        key,
        val,
        attrs,
        opts = {};

    while(l--){
        item = nodeList.item(l);
        attrs = item.attributes;
        opts = {};
        opts.plugins = [];
        for(i=0,j = attrs.length; i < j;i++){
            key = attrs[i].nodeName.replace('data-slider-','');
            if(key !== 'plugin'){
                val = attrs[i].value === 'true' ? true : (attrs[i].value === 'false' ? false : attrs[i].value);
                opts[key] = val;
            }else{

                opts.plugins = attrs[i].value.split(',');
            }
        }
        opslider.define(item,opts);
    }
};
window.addEventListener('DOMContentLoaded',scan,false);



module.exports = opslider;

