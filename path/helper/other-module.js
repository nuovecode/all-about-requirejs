define(['module'], function (module) {
        
    var obj = {};

    obj.getMethod = function() {
        var config = module.config().key;
        return '2. I return from second module ' +
            'and I have the following configuration: ' + config;
    };
    return obj;
});