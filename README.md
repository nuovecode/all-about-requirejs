# All about requirejs
Everything, absolutely everything, about require.js

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

**callback:** A function to execute after _deps_ have been loaded.

**config:** Pass configuration info into a module

**waitSeconds:** The number of seconds to wait before giving up on loading a script. Setting it to 0 disables the timeout. The default is 7 seconds.

**enforceDefine:** If set to true, an error will be thrown if a script loads that does not call define() or have a shim exports string value that can be checked.

### Related contents

* [AMD](doc/AMD.md)
* [require.js and Magento 2](doc/MAGE2.md)

## Useful readings

* [Requirejs docs](http://requirejs.org/docs/api.html)
* [Using RequireJS Map Config](https://www.safaribooksonline.com/blog/2013/10/04/using-requirejs-map-config/)







