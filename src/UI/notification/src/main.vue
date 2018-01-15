<template>
  <transition name="lu-notification-fade">
    <div
      class="lu-notification"
      :class="customClass"
      v-show="visible"
      :style="{ top: top ? top + 'px' : 'auto' }"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click">
      <i
        class="lu-notification__icon"
        :class="[ typeClass, iconClass ]"
        v-if="type || iconClass">
      </i>
      <div class="lu-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
        <h2 class="lu-notification__title" v-text="title"></h2>
        <div class="lu-notification__content"><slot>{{ message }}</slot></div>
        <div class="lu-notification__closeBtn iconfont lu-icon-delete" @click.stop="close"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  // type对应的iconfont
  let typeMap = {
    success: 'success',
    info: 'info2',
    warning: 'warning',
    error: 'error'
  };

  export default {
    data() {
      return {
        visible: false,
        title: '',
        message: '',
        duration: 4500,
        type: '',
        customClass: '',
        iconClass: '',
        onClose: null,
        onClick: null,
        closed: false,
        top: null,
        timer: null
      };
    },

    computed: {
      typeClass() {
        // 根据四种type 返回对应的class
        return this.type && typeMap[this.type] ? `iconfont lu-icon-${ typeMap[this.type] }` : '';
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          // 隐藏DOM
          this.visible = false;
          // 添加 监听过渡完成事件
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      // 销毁实例
      destroyElement() {
        // 移除 监听过渡完成事件
        this.$el.removeEventListener('transitionend', this.destroyElement);
        // 完全销毁一个实例 清理它与其它实例的连接 解绑它的全部指令及事件监听器
        this.$destroy(true);
        // 移除DOM元素
        this.$el.parentNode.removeChild(this.$el);
      },

      // 点击事件触发回调函数
      click() {
        if (typeof this.onClick === 'function') {
          this.onClick();
        }
      },

      // 右上角 X
      close() {
        // 关闭弹窗
        this.closed = true;
        // 触发回调函数
        if (typeof this.onClose === 'function') {
          this.onClose();
        }
      },

      // 滑入清除定时器
      clearTimer() {
        clearTimeout(this.timer);
      },

      // 滑出开启定时器
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
      /*
        开启定时器
        0 不会自动关闭
      */
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  };
</script>

<style scoped>
  .lu-notification-fade-leave-active{
    opacity:0
  }
  .lu-notification{
    width:330px;
    padding:20px;
    box-sizing:border-box;
    border-radius:2px;
    position:fixed;
    right:16px;
    background-color:#fff;
    box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
    transition:opacity .3s,transform .3s,right .3s,top .4s;
    overflow:hidden
  }

  .lu-notification__icon{
    width:40px;
    height:40px;
    font-size:40px;
    float:left;
    position:relative;
    top:3px
  }
  .lu-icon-warning{
    color:#f7ba2a;
  }
  .lu-icon-error{
    color:#ff4949;
  }
  .lu-icon-info2{
    color:#50bfff;
    font-size:45px;
  }
  .lu-icon-success{
    color:#13ce66;
  }

  .lu-notification__group{
    margin-left:0
  }
  .lu-notification__group.is-with-icon{
    margin-left:55px
  }
  .lu-notification__title{
    font-weight:400;
    font-size:16px;
    color:#1f2d3d;
    margin:0
  }
  .lu-notification__content{
    font-size:14px;
    line-height:21px;
    margin:10px 0 0;
    color:#8391a5;
    text-align:justify
  }

  .lu-notification__closeBtn{
    top: 12px;
    right: 14px;
    position: absolute;
    cursor: pointer;
    color: #bfcbd9;
    font-size: 26px;
  }
  .lu-notification__closeBtn:hover{
    color:#97a8be
  }
  .lu-notification-fade-enter{
    -ms-transform:translateX(100%);
    transform:translateX(100%);
    right:0
  }
</style>
