# Require.js and Magento2

###requirejs-config.js

It can be placed:

       app/code/<Vendor>/<Module>/view/base/requirejs-config.js    
       app/code/<Vendor>/<Module>/view/frontend/requirejs-config.js    
       app/code/<Vendor>/<Module>/view/adminhtml/requirejs-config.js
         
Syntax:

       var config = {
           paths:{
               "module_name":"Vendor_Module/module"
           }
       };
       
Magento2 pass the _config_ variable to a generated piece of code like _require.config( config )_
 
In addition to standard aliases (path) of RequireJS library, Magento uses module notations or relative paths. 
For instance:

       var config = {
           paths: {
               // configuration for resource 'app/code/Magento/Catalog/view/frontend/product/product.js'
               "product": "./product/product"
           }
       };
       
baseUrl parameter is generated automatically.

###Replace default JS components

       var config = {
         "map": {
           "*": {
             "<default_component>": "<custom_component>"
           }
         }
       };

###Extend default JS components

TODO

###Disable default Magento JS
   
TODO

## Useful readings

* [Magento 2 DevDocs](http://devdocs.magento.com/guides/v2.1/javascript-dev-guide/bk-javascript-dev-guide.html)
* [Alan Storm](http://alanstorm.com/magento_2_and_requirejs/)
