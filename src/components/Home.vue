<template>
    <div class="home-wrap" v-cloak>
        <i>hahhhahhahha</i>
        <p>{{msg}}</p>
        <input v-model="datas" />
        <div class="home-title" @click="tap">哈哈哈哈哈哈</div>
        <div class="home-title">哦哦哦哦哦哦</div>

    </div>
</template>

<script>
import { is_login } from '@/utils/getData'
export default {
    name: 'home',
    data () {
        return {
            msg: 'home 页面aaaa',
            datas:44
        }
    },
    mounted(){
        console.log('this.$jsEncrypt',this.$jsEncrypt);
        let res = is_login();
        console.log(res);
        this.func2();

    },
    filter:{
        'filters':function(value){
             console.log(value)
        }
    },
    methods:{
        tap(){
            this.$toolTip.center('该区域无法送达，请注意下方的配送范围')
        },

        async func1(){
            console.log(111)
        },
        async func2(){
            console.log(222)
        },
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

	@import '../assets/css/mixin';

	$class-pre:'home';
	.#{$class-pre}{
		&-wrap{
			font-size: 30px;
			i{
                @include width-height(200px,auto);
                float: left;
				color: red;
                @include clearfix;
                @include ell;
                @include line;
			}
		}
        &-title{
            display: inline-block;
            border: 1px solid #333;
            @include border-radius(8px);
            @include border-box;

           
        }
	}

</style>
<style>
	[v-cloak]{
		display: none;
	}
</style>