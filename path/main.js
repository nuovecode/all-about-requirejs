requirejs(['helper/module', 'module-name'], function(module1, module2) {

    var container = document.getElementById('messages');

    container.innerHTML = container.innerHTML + '<p>'+ module1.getMessage() + '</p>';
    container.innerHTML = container.innerHTML +'<p>'+ module2.getMethod() + '</p>';

});
