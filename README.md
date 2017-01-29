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

_You can also set app: '../app' if the module ID starts with "app", load it from the js/app directory._

**map:** For the given module prefix, instead of loading the module with the given ID, substitute a different module ID.

_There is also support for a "*" map value which means "for all modules loaded, use this map config". If there is a more specific map config, that one will take precedence over the star config. Example:_

**shim:** Configure the dependencies, exports, and custom initialization for older, traditional "browser globals" scripts that do not use define() to declare the dependencies and set a module value. **NB only use shim config for non-AMD scripts**

* **deps:** Makes sure that a module depends from an other (is loaded after)
* **exports**
* **init**

**config:** Pass configuration info into a module


## Useful readings

* [Requirejs docs](http://requirejs.org/docs/api.html)







