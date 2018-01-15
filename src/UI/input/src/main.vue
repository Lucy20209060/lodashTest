<template>
    <label class="lu_input">
        <input 
            class="lu_input_input" 
            :class="[
                size !=='' ?'lu_input_'+ size:''
            ]" 
            @input="inputChange" 
            @focus="handleFocus"
            @blur="handleBlur"
            type="text" 
            v-model="currentValue"
            :maxlength="maxlength"
        />
    </label>
    

</template>

<script>
export default {
    name: 'lu_input',
    data () {
        return {
            
            
        }
    },
    props: {
        value:'',
        label:'',
        name: String,
        size: {
            type: String,
            default: ''
        },
        maxlength:[String,Number],
        minlength:[String,Number],
    },
    watch: {
        
    },
    computed: {
      currentValue: {
        get() {
            return this.value;
        },
        set(val) {
            this.$emit('input', val);
        }
      }
    },
    mounted(){
        
    },
    methods:{
        inputChange(){
            this.$emit('change', this.currentValue);
        },
        handleFocus(event) {
            this.$emit('focus', event);
        },
        handleBlur(event) {
            this.$emit('blur', event);
        },
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_input{
        display: inline-block;
    }
    .lu_input_input{
        border: 1px solid #bfcbd9;
        outline: none;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: #fff;
        height: 36px;
        line-height: 1px;
        padding: 3px 10px;
        font-size: 14px;
        color: #1f2d3d;
    }
    .lu_input_large{
        height: 42px;
        font-size: 16px;
    }
    .lu_input_small{
        height: 30px;
        font-size: 13px;
    }
    .lu_input_mini{
        height: 20px;
        font-size: 12px;
    }
</style>