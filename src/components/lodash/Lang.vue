<template>
    <div class="Lang-wrap">
        Lang
		<textarea v-model="msg"></textarea>
    </div>
</template>

<script>

export default {
    name: 'Lang',
    data () {
        return {
            msg:'232323 \n 23123'
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
        // console.log(_.isElement(document.body)) // true

        /*
			isEmpty
			检查value是否是一个空对象 集合 映射 或 set
			对象如果被认为为空，那么他们没有自己的可枚举属性的对象。
		*/

		/*
			isEqual
			深比较两个值是否相等
		*/
		var object = {"success":true,"code":0,"data":[{"orderCount":295349}]};
		var other = {"success":true,"code":0,"data":[{"orderCount":295340}]};
		
		// console.log(_.isEqual(object, other))
		// => true

		/*
			isFunction
			检测是否是一个 Function对象
		*/
		// console.log(_.isFunction(_))
		// function test(){
		// 	console.log(3)
		// }
		// console.log(_.isFunction(test))

		/*
			isInteger
			检测是否为整数
		*/
		// console.log(_.isInteger(3.2))

		/*
			isMatch(object, source)
			深度比较 来确定object是否含有和source完全相等的属性值
		*/

        /**
            isNaN
            检测value是否是NaN
        */
        // console.log(_.isNaN(NaN))

        /**
            isNumber
            检测value是否为数字类型
        */

        /**
            isObject
            检测value是否为对象类型
        */

        /**
            isPlainObject
            检测value是否为普通的对象类型
        */

        /**
            isString
            检测value是否为字符串类型
        */

        /**
            toArray
            转换为数组
        */
        let obje = { 'a': 1, 'b': 2 };
        // console.log(_.toArray(obje)) // => [1,2]
        // console.log(_.toArray('abcd')) // => ['a','b','c','d']




    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
