import Vue from 'vue';

 // 创建构造器
const ToastConstructor = Vue.extend(require('./main.vue'));

// 使用过的实例数组
let toastPool = [];
// let toast = [];

let getAnInstance = () => {
  /*
    Element每次都是直接实例化
    这里第一次之后 使用回收的实例，性能考虑吗？？？
  */
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  // 创建 ToastConstructor 实例
  return new ToastConstructor({
    el: document.createElement('div')
  });

};

// 将使用过的实例放入该数组
let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

// 移除弹窗DOM元素
let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
  // toast = [];
};

// 原型上挂载close方法 删除DOM元素
ToastConstructor.prototype.close = function() {
  // 隐藏v-show
  this.visible = false;
  // 添加 过渡完成后删除事件
  this.$el.addEventListener('transitionend', removeDom);
  // 关闭标志
  this.closed = true;
  // 保存使用后的实例
  returnAnInstance(this);
};

/*
    options = {
      message: '信息弹窗提示',
      position: 'top',
      duration: 1500
    }
*/
let Toast = (options = {}) => {
  // 防止弹窗重复出现
  // if(toast.length != 0){
  //   return false
  // }
  // toast.push(1)


  // 显示时间 默认3000ms
  let duration = options.duration || 3000;

  // ToastConstructor 实例
  let instance = getAnInstance();

  console.log(instance)

  // 弹窗关闭标志
  instance.closed = false;
  clearTimeout(instance.timer);

  // options 可能是字符串（只有message） 可能是对象
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';

  // 将实例插入body
  document.body.appendChild(instance.$el);

  // DOM更新循环结束
  Vue.nextTick(function() {
    // 显示v-show
    instance.visible = true;
    // 移除 过渡完成后删除事件
    instance.$el.removeEventListener('transitionend', removeDom);

    // 倒计时关闭弹窗
    ~duration && (instance.timer = setTimeout(function() {
      // instance.closed = false 调用close() 关闭 
      if (instance.closed) return;
      instance.close();
    }, duration));
  });
  return instance;
};

export default Toast;
