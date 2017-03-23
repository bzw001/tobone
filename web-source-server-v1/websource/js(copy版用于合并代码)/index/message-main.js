/**
 * Created by wangbiaozhi on 2017/2/25.
 */
requirejs.config({
    baseUrl:'../',
    paths:{
        ajax:'js/js/common/ajax',
        canvas:"js/js/common/canvas",
        template:'js/lib/template-native',
        noise:'js/lib/simplex-noise.min',
        art_template:'js/js/message/message_articleTemplate',
        message_index:'js/js/message/message_index'
    },
    shim:{
        canvas:{
            deps:['noise']
        },
        art_template:{
            deps:['ajax','template']
        },
        message_index:{
            deps:['canvas','ajax','art_template','template']
        }
    }
});

require(['canvas','art_template','message_index'],function(){
    console.log('message  running');
});