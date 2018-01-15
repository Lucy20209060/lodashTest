<template>
    <div class="lu_code_input">
        <i 
            class="lu_code_input-i"
            v-for="item in num" 
            key="index" 
            :style="{ 
                width: cellWidth,
                height: cellWidth  
            }"
        >
            <input 
                type="text" 
                maxlength="1" 
                onkeyup="value=value.replace(/[^\d]/g,'')" 
                @input="inputChange"
                v-model="nums[item]"
            >
        </i>
    </div>
</template>

<script>
export default {
    name: 'lu_code_input',
    data () {
        return {
            nums:{
                0:'',
                1:'',
                2:'',
                3:'',
                4:'',
                5:'',
                6:'',
            }
        }
    },
    props: {
        num:{
            type:Number,
            default:4
        },
        cellWidth:{
            type:String,
            default:''
        }
    },
    watch: {
        
    },
    computed: {
      
    },
    mounted(){
        
    },
    methods:{
        inputChange(){
            let arrTem = [];
            for(let i in this.nums){
                if( i >=1 && i <= this.num ){
                    arrTem.push(this.nums[i] || 0)
                }
                
            }

            this.$emit('change', arrTem.join('') );
        },
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .lu_code_input{
        display: inline-block;
        border: 1px solid #999;
        border-right: 0;
        overflow: hidden;
    }
    .lu_code_input-i{
        float: left;
        border-right: 1px solid #999;
    }
    input{
        outline: none;
        float: left;
        width: 100%;
        height: 100%;
        padding: 0;
        border: 0;
        font-size: 16px;
        text-align: center;

    }
</style>