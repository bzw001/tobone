/**
 * Created by wangbiaozhi on 2017/2/26.
 */
requirejs.config({
    baseUrl:'../',
    paths:{
        bootstrap:'aboutMe/bootstrap/js/bootstrap.min',
        jquery:'js/lib/jquery.min',
        index:'aboutMe/js/index'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        index:{
            deps:['jquery']
        }
    }

});

require(['bootstrap','index']);