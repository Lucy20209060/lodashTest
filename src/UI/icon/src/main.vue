<template>
    <i 
        class="iconfont lu_icon" 
        :class="className"
    >
    </i>
</template>

<script>
export default {
    name: 'lu_icon',
    data () {
        return {
            
            
        }
    },
    props: {
        className:{
            type:String,
            default:'lu-icon-info'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_icon{
        font-size: 20px;
    }
</style>