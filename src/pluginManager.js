var plugin = {};

module.exports = {
    add: function(name,callback){
        plugin[name] = callback;
    },
    get: function(name){
        return plugin[name];
    },
    exists: function(name){
        return !!plugin[name];
    }
};