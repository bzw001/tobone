/**
 * Created by wangbiaozhi on 2017/2/25.
 */
requirejs.config({
    baseUrl:'../',
    paths:{
        ajax:'js/js/common/ajax',
        canvas:'js/js/common/canvas',
        search:'js/lib/search',
        search_index:'js/js/search/search_index',
        noise:'js/lib/simplex-noise.min',
        search_art_template:'js/js/search/search_articleTemplate',
        template:'js/lib/template-native',
        jquery:'js/lib/jquery.min',
        utile:'js/js/common/utile'
    },
    shim:{
        canvas:{
            deps:['noise']
        },
        sort_art_template:{
            deps:['ajax','template']
        },
        search_index:{
            deps:['ajax','search_art_template','template','search']
        }
    }
});

require(['canvas','search_art_template','search_index'],function(){
    console.log('require 运行');
});