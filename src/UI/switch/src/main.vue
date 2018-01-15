<template>
    <label class="lu_switch">
        <input 
            class="lu_switch_input" 
            @change="switchChange" 
            type="checkbox" 
            v-model="currentValue" 
            :disabled="disabled"
        />

        <span 
            class="lu_switch_core"
            :class="[
                disabled?'lu_switch_disabled':''
            ]"
        >
        </span>

        <div class="lu_switch_label">
            <slot></slot>
        </div>
    </label>
</template>


<script type="text/babel">
  export default {
    name: 'lu_switch',
    data() {
      return {
        // visible: false
      }
    },
    props: {
      value: Boolean,
      disabled:{
        type:Boolean,
        default:false
      }
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
    methods:{
      switchChange(){
        this.$emit('change', this.currentValue);
      }
    }

  };
</script>

<style scoped>
  .lu_switch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
}
.lu_switch * {
    pointer-events: none;
}
.lu_switch_label {
    margin-left: 10px;
    display: inline-block;
}
.lu_switch_label:empty {
    margin-left: 0;
}
.lu_switch_core {
    display: inline-block;
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 16px;
    box-sizing: border-box;
    background: #d9d9d9;
}
.lu_switch_core::after, .lu_switch_core::before {
    content: " ";
    top: 0;
    left: 0;
    position: absolute;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    border-radius: 15px;
}
.lu_switch_core::after {
    width: 30px;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
}
.lu_switch_core::before {
    width: 50px;
    height: 30px;
    background-color: #fdfdfd;
}
.lu_switch_input {
    display: none;
}
.lu_switch_input:checked + .lu_switch_core {
    border-color: #26a2ff;
    background-color: #26a2ff;
}
.lu_switch_input:checked + .lu_switch_core::before {
    -webkit-transform: scale(0);
            transform: scale(0);
}
.lu_switch_input:checked + .lu_switch_core::after {
    -webkit-transform: translateX(20px);
            transform: translateX(20px);
}
.lu_switch_disabled{
    border-color: #e4e8f1!important;
    background-color: #e4e8f1!important;
    cursor: not-allowed;
}
</style>