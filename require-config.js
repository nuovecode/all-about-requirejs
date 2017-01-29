require.config({
    //BaseUrl sets a different base path for your scripts
    baseUrl: 'path',
    //The paths configuration key is where we can rename/alias modules
    paths: {
      "module-name": "helper/other-module"
    },
    //  deps shim configuration makes sure that 'helper/module' is loaded
    //  after 'module-name'. ( Require loads modules asynchronously )
    shim:{
        'helper/module' :{
            'deps':['module-name']
        }
    },
    config: {
        'module-name': {
            size: 'large'
        }
    }

});
