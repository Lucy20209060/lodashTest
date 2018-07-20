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



    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>