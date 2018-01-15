<template>
    <label class="lu_radio">
        <input type="radio" class="lu_radio_input" :name="name" :value="label" />
        
        <span>
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
    

</template>

<script>
export default {
    name: 'lu_radio',
    data () {
        return {
            
            
        }
    },
    props: {
        value:'',
        label:'',
        name: String
    },
    watch: {
        // 'checked'(val, oldValue) {
        //     console.log(val)
        // }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>