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
        template:'js/lib/template-native'
    },
    shim:{
        deps:{
            canvas:['noise'],
            sort_art_template:['ajax','template'],
            sort_index:['canvas','ajax','sort_art_template','template']
        }
    }
});

require(['canvas','ajax','sort_art_template','sort_index'],function(){
    console.log('sort运行');
});