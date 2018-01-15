<template>
    <div class="mixins-wrap">
        
    </div>
</template>

<script>

export default {
    name: 'mixins',
    data () {
        return {
            
        }
    },
    mounted(){
        this.login();
    },
    methods:{
        login() {
            console.log('mixins.vue')
            // this.$router.push('/')
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$class-pre:'mixins';
	.#{$class-pre}{
		&-wrap{
			
		}
	}
</style>