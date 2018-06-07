<template>
    <div class="Collection-wrap">
        Collection
    </div>
</template>

<script>

export default {
    name: 'Collection',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Collection ========================================
        /**
         * _.countBy(collection, [iteratee=_.identity])
         * 参数
         * collection 要处理的集合
         * [iteratee=_.identity] (Array|Function|Object|string): 处理集合中每个元素的方法
         * 
         * 返回
         * 返回一个组成的集合对象
         * key:处理的结果
         * value:处理的结果的次数
        */
        let countBy = _.countBy([6.1, 4.2, 6.3,4.4], Math.floor);
        console.log(countBy) // => {4: 2, 6: 2}
        
    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>