<template>
    <div class="test-wrap" @click="clearInterval">
        test
    </div>
</template>

<script>

export default {
    name: 'test',
    data () {
        return {
            timer:null
        }
    },
    mounted(){
        this.interval();
    },
    methods:{
        interval(){
            this.timer = setInterval(function(){
                console.log(this)
            }.bind(this),1000)

            // this.timer = setInterval(() => {
            //     console.log(this)
            // },1000)
        },
        clearInterval() {
            clearInterval(this.timer)
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'test';
	.#{$class-pre}{
		&-wrap{
			
		}
	}
</style>