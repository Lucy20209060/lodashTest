<template>
    <div class="String-wrap">
        String
    </div>
</template>

<script>

export default {
    name: 'String',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== String ========================================
        /**
         * camelCase
         * 将字符串转化为驼峰写法的字符串
         * 好多分割的字符串都能转化为驼峰写法的字符串
        */
        // console.log(_.camelCase('aaa-bbb')) // => aaaBbb

        /**
         * capitalize
         * 转换首字母大写 其余小写
        *
       /**
        * endsWith([string=''], [target], [position=string.length])
        * [string=''] 要检索的字符串
        * [target] 要检索的字符
        * [position=string.length] 检索的位置
        * 检测字符串某位置（默认结尾处）是否是某特定字符串
       */
        // console.log(_.endsWith('abc', 'c')) // => true
        // console.log(_.endsWith('abc', 'b',2)) // => true

        /**
         * escape
         * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。 
        */
        // console.log(_.escape('<>`'))

        /**
         * escapeRegExp
         * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in
        */
        // console.log(_.escapeRegExp('[lodash](https://lodash.com/)'))

        /**
         * pad([string=''], [length=0], [chars=' '])
         * [string=''] 被调戏的字符串
         * [length=0] 字符串被填充到的长度
         * [chars=' '] 填充使用的字符串 默认空格
         * 用指定字符串填充字符串两侧到指定长度
        */
        // console.log(_.pad('abcd',8,'.')) // => ..abcd..

        /**
         * padEnd
         * 与pad类似 在后面填充
         * 
         * padStart
         * 与pad类似 在前面填充
        */

        /**
         * repeat
         * 字符串重复指定次数
        */
        // console.log(_.repeat('&',5)) // => &&&&&
        // console.log(_.repeat('abc',3)) // => abcabcabc



    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>