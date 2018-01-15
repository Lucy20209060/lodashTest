<template>
    <transition name="ac_message-fade">
        <div
            class="ac_message"
            :class="customClass"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
        >
            <i v-show="visible" class="iconfont" :class="'lu-icon-' + this.type"></i>
            <transition name="text">
                <div v-show="visible" class="ac_message__group">
                    <slot><p>{{ message }}</p></slot>
                </div>
            </transition>
            <div v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></div>
        </div>
    </transition>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 2500,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      };
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>

<style scoped>
    /*@font-face {font-family: "iconfont";
        src: url('../assets/iconfont/iconfont.eot?t=1502870622562');
        src: url('../assets/iconfont/iconfont.eot?t=1502870622562#iefix') format('embedded-opentype'),
        url('../assets/iconfont/iconfont.woff?t=1502870622562') format('woff'),
        url('../assets/iconfont/iconfont.ttf?t=1502870622562') format('truetype'),
        url('../assets/iconfont/iconfont.svg?t=1502870622562#iconfont') format('svg');
    }
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .icon-warning:before { content: "\e627"; }
    .icon-error:before { content: "\e628"; }
    .icon-success:before { content: "\e629"; }
    .icon-info:before { content: "\e62a"; }*/


    .ac_message{
        box-shadow:0 0 24px 10px rgba(160,160,160,.12);
        min-width:200px;
        padding:10px 12px;
        box-sizing:border-box;
        border-radius:23px 0 0 23px;
        position:fixed;
        left:50%;
        top:30%;
        opacity: .95;

        transform:translateX(-50%) scale(1);
        -ms-transform:translateX(-50%) scale(1);
        -moz-transform:translateX(-50%) scale(1);
        -webkit-transform:translateX(-50%) scale(1);
        -o-transform:translateX(-50%) scale(1);

        transition:opacity .3s,transform .4s;
        -ms-transform:opacity .3s,transform .4s;
        -moz-transition:opacity .3s,transform .4s;
        -webkit-transition:opacity .3s,transform .4s;
        -o-transition:opacity .3s,transform .4s;

        background-color:#fff;
        overflow:visible
    }
    .ac_message-fade-enter,
    .ac_message-fade-leave-active{
        opacity:0;
        transform:translate(-50%,0) scale(0);
        -ms-transform:translate(-50%,0) scale(0);
        -moz-transform:translate(-50%,0) scale(0);
        -webkit-transform:translate(-50%,0) scale(0);
        -o-transform:translate(-50%,0) scale(0);
    }

    .ac_message__group{
        margin-left:30px;
        position:relative;
        height:20px;
        line-height:20px;
        display:-ms-flexbox;
        display:flex;
        -ms-flex-align:center;
        align-items:center
    }
    .ac_message__group p{
        font-size:16px;
        margin:0 10px 0 0;
        color:#333;
        text-align:justify
    }
    
    .ac_message__group.is-with-icon{
        margin-left:0
    }
    /*删除 X*/
    .el-message__closeBtn {
        top: 14px;
        right: 13px;
        position: absolute;
        cursor: pointer;
        color: #bfcbd9;
        font-size: 14px;
    }
    .ac_message__closeBtn:hover{
        color:#97a8be
    }

    .ac_message i{
        color: #999;
        font-size: 18px;
        width:44px;
        height:40px;
        text-align: center;
        line-height: 40px;
        position:absolute;
        left:0;
        top:0
    }
    .ac_message .lu-icon-info{
        color: #20a0ff;
    }
    .ac_message .lu-icon-success{
        color: #009e4d;
    }
    .ac_message .lu-icon-warning{
        color: #ffb35a;
    }
    .ac_message .lu-icon-error{
        color: red;
    }

    .text-enter-active{
        animation: text-in .5s linear;
        -webkit-animation:text-in .5s linear;
    }

    @keyframes text-in {
        0% {
            transform: translateX(15px);
            -ms-transform: translateX(15px);
            -moz-transform: translateX(15px);
            -webkit-transform: translateX(15px);
            -o-transform: translateX(15px);
        }
        100% {
            transform: translateX(0);
            -ms-transform: translateX(0);
            -moz-transform: translateX(0);
            -webkit-transform: translateX(0);
            -o-transform: translateX(0);
        }
    }
</style>
