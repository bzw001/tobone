/**
 * Created by wangbiaozhi on 2017/2/26.
 */
requirejs.config({
    baseUrl:'../',
    paths:{
        ajax:'js/js/common/ajax',
        canvas:'js/js/common/canvas',
        noise:'js/lib/simplex-noise.min',
        every_art_template:'js/js/every/every_articleTemplate',
        every_index:'js/js/every/every_index',
        template:'js/lib/template-native',
        jquery:'js/lib/jquery.min',
        jqueryCookie:'js/lib/jquery.cookie',
        'google-code-prettify':'js/lib/prettify',
        utile:'js/js/common/utile'
    },
    shim:{

            canvas:{
                deps:['noise']
            },

            jqueryCookie:{
                deps:['jquery']
            },
            every_art_template:{
                deps:['ajax','template']
            },
            sort_index:{
                deps:['canvas','ajax','every_art_template','template','jquery']
            }

    }
});

require(['canvas','ajax','every_art_template','every_index','google-code-prettify'],function(){
    console.log('every运行');
});