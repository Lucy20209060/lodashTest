<style scoped>
    /*.msgbox-fade-enter-active{
        animation:msgbox-fade-in .3s
    }
    .msgbox-fade-leave-active{
        animation:msgbox-fade-out .3s
    }
    @keyframes msgbox-fade-in{
        0%{
            transform:translate3d(0,-20px,0);
            opacity:0
        }
        100%{
            transform:translate3d(0,0,0);
            opacity:1
        }
    }
    @keyframes msgbox-fade-out{
        0%{
            transform:translate3d(0,0,0);
            opacity:1
        }
        100%{
            transform:translate3d(0,-20px,0);
            opacity:0
        }
    }*/
    .el-message-box{
        text-align:left;
        display:inline-block;
        vertical-align:middle;
        background-color:#fff;
        width:360px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        font-size:16px;
        overflow:hidden;
        -webkit-backface-visibility:hidden;
        backface-visibility:hidden
    }
    .el-message-box__wrapper{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center
    }
    .el-message-box__wrapper::after{
        content:"";
        display:inline-block;
        height:100%;
        width:0;
        vertical-align:middle
    }
    .el-message-box__header{
        position:relative;
        padding:20px 20px 0
    }
    .el-message-box__headerbtn{
        position:absolute;
        top:19px;
        right:20px;
        background:0 0;
        border:none;
        outline:0;
        padding:0;
        cursor:pointer
    }
    .el-message-box__headerbtn .el-message-box__close{
        color:#999
    }

    .el-message-box__headerbtn:focus .el-message-box__close,
    .el-message-box__headerbtn:hover .el-message-box__close{
        color:#20a0ff
    }

    .el-message-box__content{
        padding: 0 20px 16px;
        color:#48576a;
        font-size:14px;
        position:relative;
        
    }

    .authentication .el-message-box__content{
        padding-bottom: 28px
    }


    .el-message-box__input{
        padding-top:15px
    }

    .el-message-box__input input.invalid,
    .el-message-box__input input.invalid:focus{
        border-color:#ff4949
    }

    .el-message-box__errormsg{
        color:#ff4949;
        font-size:12px;
        min-height:18px;
        margin-top:2px
    }
    .el-message-box__title{
        padding-left:0;
        margin-bottom:0;
        font-size:16px;
        font-weight:700;
        height:18px;
        color:#333
    }
    .el-message-box__message{
        margin:0;
        
    }
    .el-message-box__message p{
        margin:0;
        line-height:1.4;
        font-size: 20px;
        font-weight: 900;
        transform:scale(.8);
        -ms-transform: scale(.8);
        -moz-transform: scale(.8);
        -webkit-transform: scale(.8);
        -o-transform: scale(.8);
        text-align: center;
        color: #333;
    }
    .el-message-box__btns{
        padding:20px 20px 28px;
        text-align:center
    }
    .el-message-box__btns a{
        display: inline-block;
        text-decoration: none;
        color: #333;
        font-size: 18px;
        width: 140px;
        padding:8px 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        outline: none;
        line-height: 18px;
        text-align: center;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        tap-highlight-color:rgba(0,0,0,0);
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer;

    }
    
    .el-message-box-img {
        text-align: center;
        padding: 20px 0 10px;
    }

    .authentication .el-message-box-img{
        padding: 0 0 36px;
    }





    .el-message-box__btns .box__btn_cancel{
        background: #fff;
        border: 2px solid #f3f3f3;
        
    }
    .el-message-box__btns .box__btn_affirm{
        background: #009e4d;
        border: 2px solid #009e4d;
        color: #fff;
    }
    .el-message-box__btns a:nth-child(2){
        margin-left:10px
    }
    .el-message-box__btns-reverse{
        -ms-flex-direction:row-reverse;
        flex-direction:row-reverse
    }
    .el-message-box__status{
        position:absolute;
        top:50%;
        -ms-transform:translateY(-50%);
        transform:translateY(-50%);
        font-size:36px!important
    }
    .el-message-box__status.el-icon-circle-check{
        color:#13ce66
    }
    .el-message-box__status.el-icon-information{
        color:#50bfff
    }
    .el-message-box__status.el-icon-warning{
        color:#f7ba2a
    }
    .el-message-box__status.el-icon-circle-cross{
        color:#ff4949
    }

</style>

<template>
  <transition name="msgbox-fade">

    <div class="el-message-box__wrapper" tabindex="-1" v-show="visible" @click.self="handleWrapperClick">

        <div class="el-message-box" :class="type">

            <div class="el-message-box-img">
                <img :src="imgType" />
            </div>

            <div class="el-message-box__content" v-if="message !== ''">
              <!-- <div class="el-message-box__status" :class="[ typeClass ]"></div> -->
              <div class="el-message-box__message">
                <slot><p>{{ message }}</p></slot>
              </div>
            </div>

        
            <div class="el-message-box__btns">
                <a 
                    href="javascript:;" 
                    :class="this.type=='authentication'?'box__btn_affirm':'box__btn_cancel'" 
                    @click="handleAction('cancel')">
                    {{ cancelButtonText}}
                </a>
                <a
                    href="javascript:;"
                    :class="this.type=='authentication'?'box__btn_cancel':'box__btn_affirm'"
                    ref="confirm"
                    @click="handleAction('confirm')">
                    {{ confirmButtonText}}
                </a>
            </div>

      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from '../../src/utils/popup';
  import Locale from '../../src/mixins/locale';
  import { addClass, removeClass } from '../../src/utils/dom';
  import { t } from '../../src/locale';

  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  export default {
    mixins: [Popup, Locale],

    props: {
        modal: {
            default: true
        },
        lockScroll: {
            default: true
        },
        showClose: {
            type: Boolean,
            default: true
        },
        closeOnClickModal: {
            default: true
        },
        closeOnPressEscape: {
            default: true
        },
        type:{
            type: String,
            default: 'authentication'
        }
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : '';
      },

      confirmButtonClasses() {
        return `el-button--primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      },
      imgType(){
        return this.promptImg[this.type]
      }
    },

    methods: {
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.visible) return;
        this.visible = false;
        this._closing = true;

        this.onClose && this.onClose();

        if (this.lockScroll) {
          setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow;
              document.body.style.paddingRight = this.bodyPaddingRight;
            }
            this.bodyOverflow = null;
            this.bodyPaddingRight = null;
          }, 200);
        }
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
        if (this.action) this.callback(this.action, this);
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction('cancel');
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
            addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
              addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        return true;
      }
    },

    watch: {
      inputValue: {
        immediate: true,
        handler(val) {
          this.$nextTick(_ => {
            if (this.$type === 'prompt' && val !== null) {
              this.validate();
            }
          });
        }
      },

      visible(val) {
        if (val) this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          // this.$nextTick(() => {
          //   this.$refs.confirm.$el.focus();
          // });
        }
        if (this.$type !== 'prompt') return;
        if (val) {
          setTimeout(() => {
            // if (this.$refs.input && this.$refs.input.$el) {
            //   // this.$refs.input.$el.querySelector('input').focus();
            // }
          }, 500);
        } else {
          this.editorErrorMessage = '';
          removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
        }
      }
    },

    data() {
      return {
        uid: 1,
        title: undefined,
        message: '',
        type: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null,
        
        // 提示框 图片
        promptImg:{
            // 请先进行认证登录
            authentication:"data:image/png;base64,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",

            // 取消订单
            cancelOrder:"data:image/png;base64,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",

            // 取消退款
            cancelRefund:"data:image/png;base64,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",

            // 确定收货
            confirmReceipt:"data:image/png;base64,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",

            // 删除商品
            deleteMerchandise:"data:image/png;base64,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"
        }





      };
    }
  };
</script>
