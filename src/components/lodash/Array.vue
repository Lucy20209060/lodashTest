<template>
    <div class="Array-wrap">
        Array
        
    </div>
</template>

<script>

export default {
    name: 'Array',
    data () {
        return {
            
        }
    },
    methods:{
        
	},
    mounted(){
        console.log([...new Set([1,2,3,4,1,2,6,7])])
        console.log(Array.from(new Set([1,2,3,4,1,2,6,7])))
        //====================================== Array ========================================


        const obj = {
            goods:{
                'a_1':1,
                'a_2':2,
                'a_3':3,
            },
            adv:'idsahdhajsd'
        }

        const key = 'a_'+3;
        const tem = obj.goods[key]
        // console.log(tem)

        /*
            chunk
            将某个数组按特定的长度划分成多个数组
        */
        const arr0 = ['a', 'b', 'c', 'd',1]
        const arr1 = _.chunk(arr0, 2) 
        // [['a','b'],['c','d'],[1]]

        /*
            compact
            剔除掉数组中的假值（null,'',undefined,NaN）
            " "空字符串 不是假值 
        */
        const arr2 = _.compact([false,null,true,0,'',' ',undefined,NaN,'a',1])
        // [true, " ", "a", 1]

        /*
            difference 
            后续数组中出现的值 会在第一个数组中剔除掉 并返回剔除干净后的第一个数组
        */
        const arr3 = _.difference(arr0,['a','b'],['c',1])
        // [1]

        /*
            drop
            剔除掉数组的前n个元素 n默认等于1
        */
        const arr4 = _.drop(arr0,3)
        // ['d',1]

        /*
            dropRight
            删除掉数组尾部的n个元素 n默认等于1
        */
        const arr5 = _.dropRight([1, 2, 3]);
        // [1,2]
        const arr6 = _.dropRight([1, 2, 3],2);
        // [1]

        /*
            dropRightWhile

        */

        /*
            fill
            替换掉数组中的元素
        */
        const arr01 = ['a', 'b', 'c', 'd',1]
        // const arr7 = _.fill(arr01,5)
        // [5,5,5,5,5]

        const arr8 = _.fill(arr01,5,1,4)
        // ["a", 5, 5, 5, 1]

        /*
            findIndex
            返回匹配条件的第一个元素的索引值 未匹配返回 -1
        */
        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ];

        let returnIndex = _.findIndex(users, function(use) {
            return use.user === 'barney';
        });
        // 0

        const returnIndex2 = _.findIndex(users, { 'user': 'fred', 'active': false });
        const returnIndex3 = _.findIndex(users,'active',false)

        /*
            findLastIndex
            与findIndex查询顺序相反
        */

        /*
            first
            获取数组的第一个元素
        */
        const str = _.first(arr0)
        // 0
        const str1 = _.first([])
        // undefined

        /*
            flatten
            降低多层嵌套数组的层级 默认降低一级
        */
        const arr9 = _.flatten([1, [2, 3, [4]]])
        // [1,2, 3, [4]]

        /*
            flattenDeep
            将多层嵌套数组降为一层
        */

        /*
            indexOf(array, value, [fromIndex=0])
            获取value在数组array中的索引
            fromIndex = n       从前索引值n开始
                        -1      负数 从后开始
                        true    二分法查找
        */
        _.indexOf([1, 2, 1, 2], 2);
        // 1
        _.indexOf([1, 2, 1, 2], 2, 2);
        // 3
        _.indexOf([1, 1, 2, 2], 2, true);
        // 2

        /*
            initial
            删除数组的最后一个元素
        */

        /*
            intersection
            提取出多个数组中的相同元素
        */
        const arr10 = _.intersection([1,2,3],[2,3],[3])
        // [3]

        /*
            last
            取出数组中的最后一位元素
        */

        /*
            lastIndexOf
            从右便遍历数组 返回第一个匹配值的索引值 否则返回-1
            与indexOf相似
        */
        _.lastIndexOf([1, 2, 1, 2], 2);
        // 3

        /*
            pull
            将数组中所有和values相等的元素移除
        */
        const arr11 = [1,2,3,1,2,3]
        _.pull(arr11,2,3)
        
        /*
            pullAt
            移除数组中指定索引的元素 会改变这个数组 并返回移除的数组
        */
        const arr12 = [5,10,15,20,34]
        const arr13 = _.pullAt(arr12,2,4)
        // 删除后的数组   arr12 = [5, 10, 20]
        // 删除的元素     arr13 = [15, 34]

        /*
            remove
            移除数组中满足条件的所有的元素 改变这个数组 并返回移除的元素
        */
        const arr14 = [5,10,15,20,34]
        const arr15 = _.remove(arr14,function(n){
            return n % 2 == 0;
        })
        // arr14 = [5,15]
        // arr15 = [10,20,34]

        /*
            rest
            获取数组除第一个元素外的所有元素
        */

        /*
            slice
            从start位置到end位置（不包括end位置）截取数组
        */
        const arr16 = _.slice([1,2,3,4,5,6,7,8,9,10],2,6)
        // [3,4,5,6]

        /*
            sortedIndex
        */

        /*
            take
            从数组的起始位置，截取n个元素 n默认为1
        */
        _.take([1, 2, 3], 2);
        // [1, 2]

        /*
            takeRight
            从数组的右侧开始，截取n个元素 n默认为1
        */
        // console.log(arr16)
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>