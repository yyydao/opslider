var animate = {};

module.exports = {
    add: function(name,callback){
        animate[name] = callback;
    },
    get: function(name){
        return animate[name];
    },
    exists: function(name){
        return !!animate[name];
    }
};