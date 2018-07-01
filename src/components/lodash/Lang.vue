<template>
    <div class="Lang-wrap">
        Lang
    </div>
</template>

<script>

export default {
    name: 'Lang',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Lang ========================================
        /**
         * castArray
         * 强制转化为数组
        */
        // var castArray = castArray(1);
        // console.log(castArray)

        /**
         * clone 浅复制
         * */ 
        var objects = [{ 'a': 1 }, { 'b': 2 }];
 
        var shallow = _.clone(objects);
        shallow[0].a = 45;
        // console.log(objects,shallow);

        /**
         * cloneDeep
         * 深拷贝
        */

        /**
         * conformsTo
         * 
        */

        var obj = {
            attr:{},
            data:{
                items:[
                    {
                        item_list:'',
                        item_title:"产品介绍"
                    }
                ],
                isBackup:false,
                isDynamic:true
            }
        }
        var conformsTo = _.conformsTo(obj, { 
            'data': function(n) { 
                // console.log(n) 
            }
        });
        // console.log(conformsTo)

        /**
         * eq 比较两个值 是否相等
        */

        var object = { 'a': 1 };
        var other = { 'a': 1 };
        // console.log(_.eq(object, object)) // true

        /**
         * _.gt(value, other)
         * 检查 value是否大于other
        */

        /**
         * _.gte(value, other)
         * 检查 value是否大于等于other
        */

        /**
        * isArguments 判断value是否是一个类arguments对象
        * 如果value是一个 arguments 对象 返回 true，否则返回 false
        */
        // console.log(_.isArguments([1, 2, 3]))

        /**
        * isArray
        * 检查是否是一个数组
        */
        // console.log(_.isArray([1,2,3,4]))

        /**
        * isArrayLike
        * 检查是否是一个类数组
        */

        /**
        * isBoolean 检查是否是一个布尔值
        */

        /**
        * isElement
        * 检查是否是一个DOM元素
        * 
        */
        console.log(_.isElement(document.body))





    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>