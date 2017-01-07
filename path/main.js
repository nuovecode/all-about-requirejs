requirejs(['helper/module', 'module-name'], function(ar1, ar2) {

    var message = ar1.getMessage();
    console.log(message);

    console.log(ar2.getMethod());

});
