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
 
baseUrl parameter is generated automatically.

###Replace default JS components

       var config = {
         "map": {
           "*": {
             "<default_component>": "<cupstom_component>"
           }
         }
       };
       
Ex to replace color swatches:
       
       "map": {
          "*": {
            'swatchRenderer': "Vendor_Module/js/customSwatch"
          }
       }    
       
       
###Override default JS components methods   
   
####Mixin   

**Definition:** In object-oriented programming languages, a mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.[See](https://en.wikipedia.org/wiki/Mixin)

Declare the mixin as an AMD module (Ex. the checkout steps)
       
           config: {
               mixins: {
                   'Magento_Checkout/js/model/step-navigator': {
                       'js/checkoutCustomization': true
                   }
       
               }
           }
            
And define a module that return a callback with the target JS component (module) as an argument.

         
         define([ "jquery", "ko" ], function ($) {
             
             'use strict';
                  
             return function (target) {
         
                 var next = target.next;
                 target.next = function() {
                     var result = next.apply(this, arguments);
                     return  result;
                 };
         
                 var isProcessed = target.isProcessed;
                 target.isProcessed = function (code) {
                     var result = isProcessed.apply(this, arguments);
                     return  result;
                 };
         
                 return target
             };        
         });
            
###Extend default JS components 

**Magento widget**

       define([
         'jquery',
         'jquery/ui',
         'mage/<widget_name>' 
       ], function($){
        
         $.widget('<vendor>.<new_widget_name>', $.mage.<widget.name>, { 
            
            //Do things
            
         });
        
         return $.<vendor>.<new_widget_name>;
       });

**Magento component**

       define([
         '<component_path>' 
       ], function(<component_alias>){
        
         return <component_alias>.extend({
        
           defaults: { ... }, // properties with default values
           ... // methods of your component
         });
       });       


## Useful readings

* [Magento 2 DevDocs - Javascript dev guide ](http://devdocs.magento.com/guides/v2.1/javascript-dev-guide/bk-javascript-dev-guide.html)
* [Alan Storm - Magento2 and RequireJs ](http://alanstorm.com/magento_2_and_requirejs/)
* [Alan Storm - The Curious Case of Magento 2 Mixins ](http://alanstorm.com/the-curious-case-of-magento-2-mixins/)
* [Firebearstudio - RequireJs magento2 tutorial](https://firebearstudio.com/blog/advanced-development-with-requirejs-magento-2-tutorial.html)
