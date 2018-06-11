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
        let countBy = _.countBy([6.1, 4.2, 6.3,4.4], Math.floor); // => {4: 2, 6: 2}

        /**
         * _.every(collection, [predicate=_.identity])
         * 参数
         * collection 要处理的集合
         * [iteratee=_.identity] (Array|Function|Object|string): 处理集合中每个元素的方法
         * 
         * 返回
         * 如果 [所有元素] 经过检查都返回true 那么返回true 否则返回false
        */
        let every1 = _.every([true, 1, null, 'yes'], Boolean); // => false

        var users = [
            { 'user': 'barney', 'age': 36, 'active': false },
            { 'user': 'fred',   'age': 40, 'active': false }
        ];
        // 所有元素都要符合条件 才会返回true
        let every2 = _.every(users, {'active': false }); // => true

        /**
         * _.forEach(collection, [iteratee=_.identity])
         * 别名 each
         * collection  要处理的集合
         * [iteratee=_.identity] (Function): 每次迭代调用的函数
         * 
        */
        _([1, 2]).forEach(function(value) {
            // console.log(value); 
        });
        _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
            // console.log(key, value);
        });

        var users = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred',   'age': 40, 'active': false }
        ];
        let filter = _.filter(users, function(o) { return !o.active; });
        // console.log(filter) // => [{ 'user': 'fred',   'age': 40, 'active': false ]


        /**
         * find 
         * 通过条件返回符合条件的元素集合 否则返回 undefiend
        */

        /**
         * includes
         * 检查value值是否在集合中 如果集合是字符串 那么检查value值是否在字符串中 
        */



    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>