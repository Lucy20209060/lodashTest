<template>
    <div class="hello-wrap">
        <i>hahahahhaha</i>
        <input type="text" v-onlynumber />
        <p v-for="(item,index) in list" key="index">{{item.ad_name}}</p>


        {{4234234 | timeStamp }}

        <p :class="4234234 | timeStamp">{{4234234 | timeStamp }}</p>

        <button @click="setCache">cache</button>

        <button @click="getCache">getCache</button>
    </div>
</template>

<script>
// import { getAdList } from '@/utils/http'
import api from '@/utils/Api'

// import cache from '@/utils/cache'
import cache from '@/utils/cache2'

import { getlevel1,getAdList,fetch } from '@/utils/ajax'


import miXins from './mixins';

export default {
    name: 'hello',
    mixins:[miXins],
    data () {
        return {
            msg: 'about',
            list:[]
        }
    },
    created(){
        
    },
    mounted(){
        this.login()

        // async function sayHello(params) { 
        //   const externalFetchedText = await fetch(`${api.home.getAdList}`, params)
        //   console.log(externalFetchedText); // Hello, es8
        // }
        
        // sayHello();

        let obj = { 
            name: 'lucy', 
            age: 18,
            add:'杭州',
            child:{
                child1:{
                    name:'lucy1',
                    age:3
                },
                child1:{
                    name:'lucy2',
                    age:5
                }
            }
        }

        // for of 不能循环对象
        // for (let [k,v] of Object.entries(obj)) {
        //     console.log(k,v);
        // }

        // console.log(Object.getOwnPropertyDescriptors(obj))
        // console.log(obj)

        // for (let [k,v] of Object.entries(obj)) {
        //     console.log(k,v);
        // }

        // console.log(Object.entries(obj))

        // const arr = Object.values(obj)

        // console.log(arr)

        // const str = 'hhhh'
        // console.log(str.padStart(3,'abc'))
        // console.log(str.padEnd(3,'abc'))

        // const arr = [1,2,3,4,]

        // console.log(arr)

        // function gets(a,b,c,){
        //     console.log(a,b,c)
        // }

        // gets(1,2,3,);

        // console.log('this.$jsEncrypt',this.$jsEncrypt);
        // this.lucy.fun2();
        // this.console(getAdList)


        // getlevel1().then(res => {
        //     // this.sendCode = true
        //     console.log('getlevel1',res)
        //     // this.setTimeOut()
        // }).catch(err => {
        //     // _.alert('短信发送失败')

        //     console.log('err',err)
        // })

        // this.get();

        // 构造函数 有prototype属性
        function Person(name,age){
            this.name=name;
            this.age=age;
            this.showMessage=function(){
               console.log(this.name,this.age);
            };
        }
        // Person.prototype = 
        // 创建实例对象 有__proto__属性 指向Person.prototype属性
        var person1=new Person('tan',26);
        var person2=new Person('song',16);

        person1.showMessage();

    // console.log(person1,person2)

        

    },
    methods:{

        get(){
            getAdList({
                pid:0
            }).then(res => {
                // this.sendCode = true
                console.log('getAdList',res)
                // this.setTimeOut()
            }).catch(err => {
                // _.alert('短信发送失败')

                console.log('err',err)
            })
        },
        setCache () {
            cache.set('name', 'lucy', 10)
            cache.set('name2', 'lucy2', 60)
        },
        getCache () {
            let a = cache.get('name')
            let b = cache.get('name2')
            console.log(a,b)
        }

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'hello';
	.#{$class-pre}{
		&-wrap{
			font-size: 30px;
			i{
				color: red;
			}
		}
	}
</style>
