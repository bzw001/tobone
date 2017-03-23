/**
 * Created by wangbiaozhi on 2017/2/23.
 */
/*简单搜索的实现
 * 针对用户输入的数据进行分词，然后在数据库进行查找，最后确定结果排列顺序
 *
 * 英文：
 * 英文只对前3个单词进行匹配
 * 汉字最多对6个汉字进行组合排序，2个汉字为一组，1个汉字的返回默认结果页，奇数汉字，分别从前组合一次，从后组合一次
 * 对于英文与汉字组合的，优先查询英文，查询不到暂时不查询汉字
 * */

/*
 * 示例：
 * css  js
 * 爬虫的使用
 * ajax模型
 * */

define([],function(){
    /**
     *
     * @param str 输入的字符串
     * @returns {*}
     *          prior:classArr1,优先查找的数组
     *          low:classArr2   次之搜索的数组
     *
     */
    function participle(str){
        var strType=null;
        var classArr1=[];
        var classArr2=[];
        var charArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        strType=judge(str);
        console.log(strType)
        switch(strType) {
            case -1:
                return null;
                break;
            case 0:
                classArr1 = str.split(' ');
                break;
            case 1:
                /*这里的缺陷比较大，没有很好的结合中英文混合出现的情况*/
                /*使用数组存储字符串存在英文字母的索引，然后得到最大值*/
                var indexArr = [];
                for (var i = 0, len = charArr.length; i < len; i++) {
                    var en_str ='';
                    var ch_str='';
                    var num = str.lastIndexOf(charArr[i]);
                    indexArr.push(num);
                    if (i==len-1) {
                        num=Math.max.apply(null,indexArr);
                        en_str = str.slice(0, num + 1);
                        ch_str=str.slice(num+1);
                        classArr1 = en_str.split(' ');
                        if(classArr1.length>3){
                            classArr1.splice(3);
                        }
                        break;
                    }
                }
                break;
            case 2:
                len=str.length;
                len=len>6?6:len;
                if(len%2==0){
                    for(var j=0;j<len;j++){

                            classArr1.push(''+str[j]+str[++j]);

                    }
                }else{
                    if(len<2){
                        classArr1.push(''+str[0]);
                        break;
                    }
                    /*省去最后一个字*/
                    for( j=0;j<len-2;){
                        classArr1.push(''+str[j]+str[++j]);
                    }
                    /*省去第一个字*/
                    for( j=len-1;j>1;j--){
                        classArr2.push(''+str[j-1]+str[j]);
                    }
                }
        }
        console.log(classArr1);
        console.log(classArr2);
        /*判断字符串是什么字符类型*/
        /*
         * 0-全英文
         * 1-中英文
         * 2-全中文
         * */
        function judge(str){
            if(escape(str).indexOf('%u')==-1){
                return 0;
            }else if(/[a-z]|[A-Z]/.test(str)&&escape(str).indexOf('%u')>=0){
                return 1;
            }else if(!/[a-z|A-Z]/.test(str)){
                return 2;
            }else return -1;
        }

        return {
            prior:classArr1,
            low:classArr2
        }
    }
    return participle;
});

