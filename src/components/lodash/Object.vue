<template>
    <div class="Object-wrap">
        Object
    </div>
</template>

<script>

export default {
    name: 'Object',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Object ========================================
        /**
         * assign
         * 浅拷贝
        */
        //    let tem1 = {
        //        a:1,
        //        b:2,
        //        c:3
        //    }
        //    console.log(_.assign(tem1,{d:4}),tem1)

        /**
         * at(object,[paths])
         * 创建一个数组 值来自object的paths路径相应的值
        */
        // var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        // console.log(_.at(object, ['a[0].b.c', 'a[1]']))

        /**
         * findKey
         * 根据条件返回第一个符合条件的value对应的key值
        */

        // var users = {
        //     'barney':  { 'age': 36, 'active': true },
        //     'fred':    { 'age': 40, 'active': false },
        //     'pebbles': { 'age': 1,  'active': true }
        // };
        // const key = _.findKey(users,(item)=>{
        //     return item.active === true
        // })
        // console.log(key) // => fred

        /**
         * findLastKey
         * 类似于 findKey 不过它是反方向开始遍历的
        */

       /**
        * get(object, path, [defaultValue])
        * object目标对象 
        * path 寻求路径 string/array
        * [defaultValue] 默认值
        * 根据object对象的path路径获取值，如果解析是undefined会以defaultValue取代
        * 
       */
        // var object = { 'a': [{ 'b': { 'c': 3 } }]};
        // console.log(_.get(object,'a[0].c','default'))

        /**
         * result(object, path, [defaultValue])
         * 与get类似
         * 并且可以解析到一个函数 绑定this到这个函数并返回执行后的结果
        */

       /**
        * set(object, path, value)
        * 设置object对应的path属性路径上的值 如果path不存在，则创建
       */

      /**
       * unset(object, path)
       * 移除对象路径上的值
      */

     /**
      * update(object, path, updater)
      * object 要修改的对象
      * path 要设置属性的路径
      * updater用来生成设置值的函数
     */

    //  async function showData() {
    // // 假装请求数据1
    // var data1 = await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve('data1');
    //     }, 1000);
    // });

    var object = { 'a': [{ 'b': { 'c': 3 } }] };
    _.update(object, 'a[0].b.c', function(n) { return n * n; });
    // console.log(object.a[0].b.c); // => 9

    _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
    // console.log(object.x[0].y.z); // => 0


    // // 假装请求数据2且此请求依赖数据1
    // var data2 = await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve('data2');
    //     }, 2000);
    // });
    // console.log(data1);

    // // 展示数据2
    // console.log(data2);
    // }

    // showData();

    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
