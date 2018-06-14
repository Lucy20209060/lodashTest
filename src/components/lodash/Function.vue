<template>
    <div class="Function-wrap">
        Function
    </div>
</template>

<script>

export default {
    name: 'Function',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Function ========================================
        /**
         * delay
         * 延迟函数
        */
        _.delay(function(text) {
        // console.log(text);
        }, 1000, 'later');

        /**
         * once
         * 只调用一次
        */
        var initialize = _.once(function(){
            console.log('调用了一次')
        });
        initialize();
        initialize();
        initialize();
        initialize();
        initialize();

        function doubled(n) {
            return n * 2;
        }
        
        function square(n) {
            return n * n;
        }
        
        var func = _.overArgs(function(x, y) {
            return [x, y];
        }, [square, doubled]);
        
        
        console.log(func(9, 3))
        // => [81, 6]
         console.log(func(10, 5))
        // => [100, 10]







    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>