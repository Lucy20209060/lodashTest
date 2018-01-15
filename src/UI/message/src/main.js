import Vue from 'vue';
import { PopupManager } from '../../src/utils/popup';
import { isVNode } from '../../src/utils/vdom';
 // 创建构造器
let MessageConstructor = Vue.extend(require('./main.vue'));

let instance;
let instances = [];
let seed = 1;

var Message = function(options = {}) {

  // 当前 Vue 实例是否运行于服务器
  if (Vue.prototype.$isServer) return;

  // string => object
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 弹窗关闭后的回调函数
  let userOnClose = options.onClose;
  // id:"message_1"
  let id = 'message_' + seed++;
  // 重写回调函数
  options.onClose = function() {
    // 删除
    Message.close(id, userOnClose);
  };

  // 创建 MessageConstructor 实例
  instance = new MessageConstructor({
    data: options
  });

  // id 删除时 函数传过去的id与实例上的id对比 相同则删除
  instance.id = id;

  // isVNode 判断对象是否为类型是否为object 并且 是否含有指定的componentOptions属性
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }

  // 在文档之外渲染并且随后挂载到body
  instance.vm = instance.$mount();
  document.body.appendChild(instance.$el);

  // 显示弹窗
  instance.vm.visible = true;
  // 设置dom的z-index ++
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = PopupManager.nextZIndex();

  // 将弹窗实例推入该数组
  instances.push(instance);

  // instance 好像等于instance.vm
  return instance.vm;
};

/*
  this.$lu_message.error('lu_toast实例') 
  typeof options == string
*/
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      // 删除实例时 如果有回调函数 执行回调函数
      if (typeof userOnClose === 'function') {
        // 将该实例作为参数返回 然而需要它吗???
        userOnClose(instances[i]);
      }
      // 弹窗数组中截取掉删除的实例
      instances.splice(i, 1);
      break;
    }
  }
};

// 删除所有的弹窗实例
Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
