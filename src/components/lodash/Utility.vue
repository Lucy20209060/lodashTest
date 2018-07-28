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
        console.log(_.identity(1,2,3))


    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>