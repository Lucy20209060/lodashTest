<template>
    <div class="Utility-wrap">
        Utility
    </div>
</template>

<script>

export default {
    name: 'Utility',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Utility ========================================
        /**
         * attempt
         * attempt(func, [args])
         * 尝试调用func,返回的结果 或者 捕获错误对象 任何附加的参数都会在调用时传给func
        */
        var elements = _.attempt(function(selector) {
            return document.querySelectorAll(selector);
        }, '.Utility-wrap');
        // console.log(elements[0])

        // console.log(_.constant({ 'a': 1 })())

        /**
         * defaultTo(value, defaultValue)
         * 检查value 如果value为NaN,null,undefiend，返回defaultValue 否则返回value本身
         * 类似于 !!value ? value : defaultValue
        */
        // console.log(_.defaultTo(NaN,40))

        /**
         * identity
         * 返回首个提供的参数
        */
        // console.log(_.identity(1,2,3))
 
        /**
         * noop
         * 返回 undefined
        */
        // console.log(_.noop())

        /**
         * nthArg
         * 创建一个函数 这个函数返回第n个参数，如果n为负数，则返回从结尾开始的第n个参数
        */

        // var fun = _.nthArg(1);
        // console.log(fun(1,2,3,4))

        /**
         * over
         * 创建一个函数 传入提供的参数的函数并调用iteratees 返回结果
        */
        // var func = _.over([Math.max, Math.min]);
        // console.log(func(1, 2, 3, 4))

        /**
         * range([start=0], end, [step=1])
         * 创建一个包含从start 到  end(不包括)的数字的数组
         * [start=0]起点
         * end 结束点
         * [step=1] 增量
        */
        // console.log(_.range(1, 5))

        /**
         * times(n,[iteratee])
         * 调用iteratee n次，每次返回结果存入到数组中
        */

       /**
        * toPath(value)
        * 转化 value 为属性路径的数组
       */
        // console.log(_.toPath('a.b.c')) // => ["a","b","c"]

        /**
         * uniqueId([prefix=''])
         * 返回唯一Id,如果提供prefix，会被添加到ID前缀上
        */
       console.log(_.uniqueId('contact_'),_.uniqueId('contact_'),_.uniqueId('contact_'),_.uniqueId('contact_'),_.uniqueId())






    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>