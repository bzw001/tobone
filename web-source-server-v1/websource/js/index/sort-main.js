/**
 * Created by wangbiaozhi on 2017/2/25.
 */
requirejs.config({
    baseUrl:'../',
    paths:{
        ajax:'js/js/common/ajax',
        canvas:'js/js/common/canvas',
        noise:'js/lib/simplex-noise.min',
        sort_art_template:'js/js/sort/sort_articleTemplate',
        sort_index:'js/js/sort/sort_index',
        template:'js/lib/template-native',
        jquery:'js/lib/jquery.min',
        jqueryCookie:'js/lib/jquery.cookie',
        utile:'js/js/common/utile'

    },
    shim:{

            canvas:{
                deps:['noise']
            },
            jqueryCookie:{
                deps:['jquery']
            },
            sort_art_template:{
                deps:['ajax','template']
            },
            sort_index:{
                deps:['canvas','ajax','sort_art_template','template']
            }

    }
});

require(['canvas','ajax','sort_art_template','sort_index'],function(){
    console.log('sort运行');
});