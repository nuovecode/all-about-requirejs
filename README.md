# All about requirejs
Everything, absolutely everything, about require.js

### Contents

* [AMD](#)
* [require.js and Magento 2](doc/MAGE2.md)

### Configurations

        require.config({
                     
            baseUrl: 'path',            
            paths: {
              "module-name": "helper/other-module"
            },
            shim:{
                'helper/module' :{
                    'deps':['module-name']
                }
            }    
        });


**baseUrl:** Sets a different base path for the modules

**paths:** Rename modules/Sets alias

**shim:** Javascript object that defines some configurations for a module

* **deps:** Makes sure that a module depends from an other (is loaded after)









