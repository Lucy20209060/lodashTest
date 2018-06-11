<template>
    <div class="Date-wrap">
        Date
    </div>
</template>

<script>

export default {
    name: 'Date',
    data () {
        return {
            
        }
    },
    mounted(){
        //====================================== Date ========================================
        // 延时函数
        _.delay(function(text) {
            console.log(text);
        },2000,'超哥好帅啊');  
    },
    methods:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>